import User from "../../../../models/user.model";
import connect from "../../../../dbconnect";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userName, email, password } = body;

    if (!userName || !email || !password) {
      return NextResponse.json(
        { message: "all fields are required" },
        { status: 400 }
      );
    }

    if ([userName, email, password].some((field) => field.trim() === "")) {
      NextResponse.json(
        { message: "all fields are required" },
        { status: 400 }
      );
    }

    const existedUser = await User.findOne({
      $or: [{ userName }, { email }],
    });

    if (!email.includes("@", ".")) {
      return NextResponse.json(
        { message: "email is not valid" },
        { status: 400 }
      );
    }

    if (existedUser) {
      return NextResponse.json(
        { message: "user with email or username already exist" },
        { status: 400 }
      );
    }

    const user = await User.create({
      userName,
      email,
      password,
    });

    const createdUser = await User.findById(user._id).select(
      "-refreshToken -password"
    );

    if (!createdUser) {
      return NextResponse.json(
        { message: "something went wrong" },
        { status: 500 }
      );
    }

    const responseBody = {
      status: 200,
      user: createdUser,
      message: "User Registered Successfully",
    };

    NextResponse.json(responseBody, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
