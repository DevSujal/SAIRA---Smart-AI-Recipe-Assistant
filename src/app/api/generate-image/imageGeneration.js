'use server'
import fetch from 'node-fetch';
import fs from 'fs/promises';
import path from 'path';

// Load environment variables

// API Key and model configuration
const Hugging_Face_Api_key = process.env.Hugging_Face_Api_key;

const MODEL_URL = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-3.5-large";

export async function generateImage(prompt) {
    try {
        console.log("Generating image for prompt:", prompt);

        const response = await fetch(MODEL_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${Hugging_Face_Api_key}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                inputs: prompt,
                parameters: {
                    num_inference_steps: 30,    // Lower for faster generation
                    width: 512,                 // Standard size
                    height: 512,
                    guidance_scale: 7.5         // How closely to follow the prompt
                }
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Get image data
        const imageBuffer = await response.buffer();

        // Save image with timestamp
        const filename = `generated-image-${Date.now()}.png`;
        
        const filePath = path.join(path.resolve("public"), filename);
        await fs.writeFile(filePath, imageBuffer);
        
        console.log(`Image successfully saved as ${filename}`);
        return filename;

    } catch (error) {
        console.error("Error:", error.message);
        throw error;
    }
}