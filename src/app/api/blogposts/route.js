import { BlogPost } from "@/models/BlogPost";
import connectToDatabase from "@/utils/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  const blogposts = await request.json();
  await connectToDatabase();
  try {
    //getting all documents from the database
    const blogsOnDB = await BlogPost.find();
    const addedBlogs = new Set(blogsOnDB.map((blog) => blog.slug));
    // taking the difference of the blogs on db to the blogs to upload so that only the unique ones are added
    const blogsToSaveOnDB = blogposts.filter(
      (blogpost) => !addedBlogs.has(blogpost.slug)
    );
    if (blogsToSaveOnDB.length > 0) {
      const data = await BlogPost.insertMany(blogsToSaveOnDB);

      return NextResponse.json({
        message: "successfully added blogs to the database!",
        data,
      });
    } else {
      return NextResponse.json({ message: "blogs are in sync!" });
    }
  } catch (error) {
    return NextResponse.json({ message: error.message });
  } finally {
    mongoose.connection.close();
  }
}
