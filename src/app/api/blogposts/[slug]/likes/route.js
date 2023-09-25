import { NextResponse } from "next/server";
import connectToDatabase from "@/utils/db";
import { BlogPost, User } from "@/models/BlogPost";

export async function PUT(request, { params }) {
  const { likedBy } = await request.json();
  const { slug } = params;
  await connectToDatabase();

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
  const { slug } = params;
  await connectToDatabase();

  try {
    const result = await BlogPost.findOne({ slug }).select("likes -_id");
    let likes;
    if (!result) {
      const blogpost = new BlogPost({ slug, likes: 1 });
      await blogpost.save();
      likes = 0;
    } else {
      likes = result.likes;
    }

    return NextResponse.json({
      message: "likes fetched successfully!",
      likes,
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      likes: 0,
    });
  }
}
