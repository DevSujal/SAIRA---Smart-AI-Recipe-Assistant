import { NextRequest, NextResponse } from "next/server";
import fetch from "node-fetch"; // Use this in Node.js; skip this line in a browser
const HUGGING_FACE_API_KEY = process.env.Hugging_Face_Api_key;

async function generateDetailedPrompt(recipeName: String) {
  const prompt = `Generate a detailed description for a recipe called "${recipeName}" with colors, textures, main ingredients, and style of presentation.`;

  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/google/flan-t5-small",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HUGGING_FACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: prompt,
          parameters: { max_new_tokens: 50 }, // Limits the number of tokens for a short, descriptive response
        }),
      }
    );
    if (!response) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("data : ", data);
    const detailedDescription =
      data[0]?.generated_text ||
      `A tasty and visually appealing dish named ${recipeName}.`;

    console.log("Generated prompt:", detailedDescription);
    return detailedDescription;
  } catch (error) {
    console.error("Error generating prompt:", error);
    return `A tasty and visually appealing dish named ${recipeName}.`;
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

    const response = await generateDetailedPrompt(body.input);

    return NextResponse.json({ data: response }, { status: 200 }); // Changed to 200 for successful creation
  } catch (error) {
    console.error("Error processing request:", error);

    // Return appropriate status codes based on error type
    const statusCode = error.message.includes("Input must be") ? 400 : 500;

    return NextResponse.json({ error: error.message }, { status: statusCode });
  }
}
