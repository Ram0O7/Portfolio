import { NextResponse } from "next/server";
import connectToDatabase from "@/utils/db";
import { User } from "@/models/BlogPost";

export async function POST(request) {
  await connectToDatabase();
  const user = await request.json();

  try {
    const userExits = await User.exists({ ...user });
    if (!userExits) {
      const result = await User.create({ ...user });
      console.log(result);
    }

    return NextResponse.json({
      message: `${
        userExits ? "user already exits!" : "user added to the database!"
      }`,
    });
  } catch (error) {
    return NextResponse.json({
      message: "something went wrong, try again!",
      statusCode: 500,
    });
  }
}
