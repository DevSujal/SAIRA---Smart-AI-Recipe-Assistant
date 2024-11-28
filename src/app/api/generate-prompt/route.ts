import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

// Validate environment variables early
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("GEMINI_API_KEY environment variable is not set");
}

// Initialize AI client once, not on every request
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generationConfig = {
  temperature: 0.7, // Reduced for more consistent output
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const BASE_PROMPT = `
Extract the ingredient list, key words like spicy, sugar-free, etc., also find the dish name and avoid list if any.
Ensure the response is strictly formatted as valid JSON.

Expected format:
{
  "dishName": "string",
  "ingredients": ["string"],
  "keyWords": ["string"],
  "ingredientsAvoid": ["string"]
}

Use English for all ingredients and keywords.
Always include all fields in the response, using empty arrays if no values are found.
give all the relevant ingredients for the recipe.
`;

async function validateInput(input) {
  if (!input || typeof input !== "string") {
    throw new Error("Input must be a non-empty string");
  }
  if (input.length > 2000) {
    // Add reasonable limit
    throw new Error("Input text is too long. Maximum 2000 characters allowed.");
  }
}

async function parseGeminiResponse(responseText) {
  try {
    // Remove any potential non-JSON content
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("No valid JSON found in response");
    }

    const parsed = JSON.parse(jsonMatch[0]);

    // Validate required fields
    const requiredFields = [
      "dishName",
      "ingredients",
      "keyWords",
      "ingredientsAvoid",
    ];
    for (const field of requiredFields) {
      if (!parsed.hasOwnProperty(field)) {
        throw new Error(`Missing required field: ${field}`);
      }
      // Ensure arrays are actually arrays
      if (field !== "dishName" && !Array.isArray(parsed[field])) {
        parsed[field] = [];
      }
    }

    return parsed;
  } catch (error) {
    throw new Error(`Failed to parse AI response: ${error.message}`);
  }
}

async function run(input) {
  await validateInput(input);

  const chatSession = model.startChat({
    generationConfig,
    history: [], // Consider if history is needed
  });

  const prompt = `${BASE_PROMPT}\n\nInput text:\n${input}`;

  try {
    const result = await chatSession.sendMessage(prompt);
    const responseText = result.response.text();

    if (!responseText) {
      throw new Error("Empty response from AI model");
    }

    return await parseGeminiResponse(responseText);
  } catch (error) {
    console.error("Error during message generation:", error);
    throw new Error(`Failed to generate response: ${error.message}`);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body || !body.input) {
      return NextResponse.json(
        { error: "Missing required 'input' field in request body" },
        { status: 400 }
      );
    }

    const response = await run(body.input);
    console.log(response)
    return NextResponse.json({ data: response }, { status: 200 }); // Changed to 200 for successful creation
  } catch (error) {
    console.error("Error processing request:", error);

    // Return appropriate status codes based on error type
    const statusCode = error.message.includes("Input must be") ? 400 : 500;

    return NextResponse.json({ error: error.message }, { status: statusCode });
  }
}
