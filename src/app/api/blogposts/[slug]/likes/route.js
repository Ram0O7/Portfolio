import { NextResponse } from "next/server";
import connectToDatabase from "@/utils/db";
import { BlogPost } from "@/models/BlogPost";
import mongoose from "mongoose";

export async function PUT(request, { params }) {
  const { likedBy } = await request.json();
  const { slug } = params;
  await connectToDatabase();
  console.log(slug, likedBy);
  try {
    // const blogpost = await BlogPost.findOneAndUpdate(
    //   { slug },
    //   { slug: slug, $push: { likedBy: likedBy } },
    //   { upsert: true, new: true },
    //   (err, updatedDocument) => {
    //     if (err) {
    //       console.error("Error updating document:", err);
    //     } else {
    //       console.log("Updated Document:", updatedDocument);
    //     }
    //   }
    // );
    const isBlogExist = await BlogPost.exists({ slug });
    !isBlogExist && (await BlogPost.create({ slug }));

    const blogpost = await BlogPost.findOneAndUpdate(
      { slug },
      { slug, $push: { likes: likedBy } },
      { upsert: true, new: true }
    );

    console.log(blogpost);
    return NextResponse.json({
      message: "likes updated successfully!",
    });
  } catch (error) {
    return NextResponse.json({
      message: "something went wrong, try again!",
    });
  } finally {
    mongoose.connection.close();
  }
}
export async function GET(request, { params }) {
  const { slug } = params;
  await connectToDatabase();

  try {
    const result = await BlogPost.find({ blogSlug: slug }).select(["likes"]);
    console.log(result);

    return NextResponse.json({
      message: "likes fetched successfully!",
      BlogPosts: result,
    });
  } catch (error) {
    return NextResponse.json({
      message: "something went wrong, try again!",
    });
  } finally {
    mongoose.connection.close();
  }
}
