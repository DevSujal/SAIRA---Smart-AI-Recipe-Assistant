import { exec } from "child_process";
import { NextRequest, NextResponse } from "next/server";
import { promisify } from "util";
import path from "path";
import fs from "fs"
import zlib from "zlib"
import csv from "csv-parser"
const execPromise = promisify(exec);

async function getFullRecipesDetails(map: Object) {
  return new Promise((resolve, reject) => {
    const recipes = [];
    const csvPath = path.resolve('src/app/api/generate-recipe/RAW_recipes.csv');
    const csvGzPath = path.resolve('src/app/api/generate-recipe/RAW_recipes.csv.gz');
    
    // Try compressed file first, fallback to uncompressed
    let readStream;
    if (fs.existsSync(csvGzPath)) {
      console.log('Reading compressed CSV:', csvGzPath);
      readStream = fs.createReadStream(csvGzPath).pipe(zlib.createGunzip());
    } else if (fs.existsSync(csvPath)) {
      console.log('Reading uncompressed CSV:', csvPath);
      readStream = fs.createReadStream(csvPath);
    } else {
      reject(new Error('CSV file not found (neither .csv nor .csv.gz)'));
      return;
    }
    
    readStream
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

    // Log stderr (debug messages) but don't treat it as an error
    if (stderr) {
      console.log(`Python script logs: ${stderr}`);
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
