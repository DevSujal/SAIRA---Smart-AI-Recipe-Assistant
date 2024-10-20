import { exec } from "child_process";
import { NextRequest, NextResponse } from "next/server";
import { promisify } from "util";
import path from "path";

const execPromise = promisify(exec);

export async function POST(req: NextRequest) {
  // Capture user input from the request
  const body = await req.json();
  const { input } = body || "";

  // Create an absolute path to the Python file
  const pythonScriptPath = path.resolve('src/app/api/generate-recipe/search_recipe.py');

  const command = `python "${pythonScriptPath}" "${input}"`;
  // return NextResponse.json({ command });
  // const command = `python ./scripts/search_recipe.py "${input}"`;

  try {
    // Execute the Python script asynchronously
    const { stdout, stderr } = await execPromise(command);

    if (stderr) {
      console.error(`Python script error: ${stderr}`);
      return NextResponse.json(
        { error: "Python script error" },
        { status: 500 }
      );
    }

    // Parse the output from the Python script
    let result: any;
    try {
      result = JSON.parse(stdout);
    } catch (parseError) {
      console.error(`Failed to parse Python output: ${parseError.message}`);
      return NextResponse.json(
        { error: "Failed to parse Python output" },
        { status: 500 }
      );
    }

    // Return the result to the client
    return NextResponse.json({ recipes: result });
  } catch (error) {
    console.error(`Error executing Python script: ${error.message}`);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
