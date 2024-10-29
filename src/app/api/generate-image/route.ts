import { NextResponse, NextRequest } from "next/server";
import { generateImage } from "./imageGeneration";
import path from "path";
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { input } = body;
    const filepath = await generateImage(input);
    return NextResponse.json({ image : filepath }, { status: 201 });
  } catch (error) {
    console.error("Error during generation:", error.message);
    return NextResponse.json({ error }, { status: 500 });
  }
}
