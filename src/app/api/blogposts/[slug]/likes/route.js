import { NextResponse } from "next/server";
import connectToDatabase from "@/utils/db";
import { BlogPost, User } from "@/models/BlogPost";
import mongoose from "mongoose";
import { redis } from "@/utils/redis";

export async function PUT(request, { params }) {
  const { likedBy } = await request.json();
  const { slug } = params;
  await connectToDatabase();
  const redisKey = slug + ":likes";

  try {
    const user = await User.findOne({ email: likedBy });

    if (!user) {
      await User.create({ email: likedBy });
    }
    const { likedBlogs } = await User.findOne({ email: likedBy }).select(
      "likedBlogs"
    );

    if (!likedBlogs.includes(slug)) {
      const user = await User.findOneAndUpdate(
        { email: likedBy },
        { $addToSet: { likedBlogs: slug } },
        { new: true }
      );

      const blogpost = await BlogPost.findOneAndUpdate(
        { slug },
        { $inc: { likes: 1 } },
        { upsert: true, new: true }
      );
      await redis.del(redisKey);
    } else {
      throw new Error("already liked the blog!");
    }
    return NextResponse.json({
      message: "likes updated successfully!",
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
    });
  }
}
export async function GET(request, { params }) {
  await connectToDatabase();
  const { slug } = params;
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const email = searchParams.get("email");
  let likes;
  let hasLiked = false;
  const redisKey = slug + ":likes";

  try {
    if (email) {
      const Blogs = await User.findOne({
        email,
      }).select("likedBlogs -_id");
      const likedBlogs = Blogs ? Blogs.likedBlogs : [];
      if (likedBlogs.includes(slug)) {
        hasLiked = true;
      }
    }
    const likesCache = await redis.get(redisKey);

    if (likesCache) {
      likes = likesCache;
      return NextResponse.json({
        message: "likes fetched from redis server successfully!",
        likes,
        hasLiked,
      });
    }
    const result = await BlogPost.findOne({ slug }).select("likes -_id");
    if (!result) {
      const blogpost = new BlogPost({ slug, likes: 0 });
      await blogpost.save();
      likes = 0;
    } else {
      likes = +result.likes;
    }

    await redis.set(redisKey, likes);
    return NextResponse.json({
      message: "likes fetched from database successfully!",
      likes,
      hasLiked,
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      likes: 0,
    });
  }
}
