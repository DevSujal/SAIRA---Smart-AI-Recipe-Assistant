import { exec } from 'child_process';
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest) {
    // Capture user input from the request
    const body = await req.json();
    const {input} = body || '';

    // Construct the Python command
    const command = `python3 ./scripts/search_recipe.py "${input}"`;

    // Execute the Python script
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing Python script: ${error.message}`);
            return NextResponse.json({ error: 'Internal server error' }, {status: 500});
        }
        if (stderr) {
            console.error(`Python script error: ${stderr}`);
            return NextResponse.json({ error: 'Python script error' }, {status: 500});
        }

        // Parse the output from the Python script
        let result: any;
        try {
            result = JSON.parse(stdout);
        } catch (parseError) {
            return NextResponse.json({ error: 'Failed to parse Python output' });
        }

        // Return the result to the client
        return NextResponse.json({ recipes: result });
    });
  }



