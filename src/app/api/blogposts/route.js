import { User } from "@/models/BlogPost";
import connectToDatabase from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const email = searchParams.get("email");
  await connectToDatabase();
  try {
    const Blogs = await User.findOne({
      email,
    }).select("likedBlogs -_id");
    const likedBlogs = Blogs ? Blogs.likedBlogs : [];

    return NextResponse.json({
      message: "liked blogs fetched successfully!",
      likedBlogs,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
