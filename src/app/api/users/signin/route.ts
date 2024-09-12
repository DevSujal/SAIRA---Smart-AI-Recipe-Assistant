import User from "../../../../models/user.model";
import connect from "../../../../dbconnect";
import { NextRequest, NextResponse } from "next/server";
import { generateAccessRefreshToken } from "../generateAccessAndRefreshToken";
import { cookies } from "next/headers";
connect();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userName, email, password } = body;

    if (!userName && !email) {
      return NextResponse.json(
        { message: "userName or email is required" },
        { status: 400 }
      );
    }

    if (!password) {
      return NextResponse.json(
        { message: "password is required" },
        { status: 400 }
      );
    }

    const user = await User.findOne({
      $or: [{ userName }, { email }],
    });

    if (!user) {
      return NextResponse.json({ message: "user not found" }, { status: 404 });
    }

    if (!user.isPasswordCorrect(password)) {
      return NextResponse.json(
        { message: "invalid user credentials" },
        { status: 401 }
      );
    }

    const { accessToken, refreshToken } = await generateAccessRefreshToken(
      user._id
    );

    const loggedInUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    const options = {
      httpOnly: true,
      secure: true,
    };

    cookies().set("accessToken", accessToken, options);
    cookies().set("refreshToken", refreshToken, options);

    const responseBody = {
      status: 200,
      user: loggedInUser, // Example user data
      accessToken,
      refreshToken,
      message: "User logged in successfully",
    };

    // Send JSON response
    return NextResponse.json(responseBody, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
