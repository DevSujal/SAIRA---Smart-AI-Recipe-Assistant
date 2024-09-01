import userModel from "@/models/user.model";
import connect from "@/dbconnect";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, gmail, password } = body;
    if (!username || !gmail || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const userExists = await userModel.findOne({
      $or: [{ username }, { gmail }],
    });

    if (userExists) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const user = await userModel.create({ username, gmail, password });
    return NextResponse.json(
      { message: "User created successfully", data: user },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
