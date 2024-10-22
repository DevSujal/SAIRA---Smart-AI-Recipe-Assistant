import { exec } from "child_process";
import { NextRequest, NextResponse } from "next/server";
import { promisify } from "util";
import path from "path";
import fs from "fs"
import csv from "csv-parser"
const execPromise = promisify(exec);

async function getFullRecipesDetails(map: Object) {
  return new Promise((resolve, reject) => {
    const recipes = [];
    fs.createReadStream(path.resolve('src/app/api/generate-recipe/RAW_recipes.csv'))
      .pipe(csv())
      .on("data", (row) => {
        if (row.name in map) {
          const temp = map[row.name];
          recipes.push({recipe : row, similarity : temp});
        }
      })
      .on("end", () => {
        if (recipes.length > 0) {
          resolve(recipes);
        } else {
          reject("No matching recipes found");
        }
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}

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
    let output: any;
    try {
      result = JSON.parse(stdout);
      const map = {}
      for (let i = 0; i < result.length; i++) {
        const element = result[i];
        map[element["Recipe Name"]] = element["Similarity Score"];
      }

      console.log(map)
        const temp = await getFullRecipesDetails(map);
        if(temp && Array.isArray(temp))
          output = temp;
    } catch (parseError) {
      console.error(`Failed to parse Python output: ${parseError.message}`);
      return NextResponse.json(
        { error: "Failed to parse Python output" },
        { status: 500 }
      );
    }
    // sorting the recipe based on similarity score
    output.sort((a : any, b : any) => b.similarity - a.similarity)
    // Return the result to the client
    return NextResponse.json({ recipes: output });
  } catch (error) {
    console.error(`Error executing Python script: ${error.message}`);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
