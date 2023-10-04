import { User } from "@/models/BlogPost";
import connectToDatabase from "@/utils/db";
import { redis } from "@/utils/redis";
import { NextResponse } from "next/server";

export async function GET(request) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const email = searchParams.get("email");
  const redisKey = email + ":likedBlogs";
  try {
    const likedBlogsCache = await redis.lrange(redisKey, 0, -1);
    const likedBlogsArray = likedBlogsCache.map((blog) => JSON.parse(blog)); //deserializing each element from json to normal objects
    if (likedBlogsArray.length !== 0) {
      return NextResponse.json({
        message: "liked blogs fetched from redis server successfully!",
        likedBlogs: likedBlogsArray,
      });
    }
    await connectToDatabase();
    const Blogs = await User.findOne({
      email,
    }).select("likedBlogs -_id");
    const likedBlogs = Blogs ? Blogs.likedBlogs : [];
    const stringifiedLikedBlogs = likedBlogs.map((blog) =>
      JSON.stringify(blog)
    );
    await redis.rpush(redisKey, ...stringifiedLikedBlogs);
    return NextResponse.json({
      message: "liked blogs fetched from database successfully!",
      likedBlogs,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
