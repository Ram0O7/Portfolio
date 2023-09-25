import { NextResponse } from "next/server";
import { Comment } from "@/models/BlogPost";
import connectToDatabase from "@/utils/db";
import mongoose from "mongoose";

export async function POST(request) {
  const comment = await request.json();
  await connectToDatabase();

  try {
    const result = await Comment.create({ ...comment });
    console.log(result);
    return NextResponse.json({
      message: "comment successfully added to the database!",
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
    const result = await Comment.find({ blogSlug: slug }).select([
      "content",
      "user",
      "updatedAt",
    ]);
    console.log(result);

    return NextResponse.json({
      message: "comments fetched successfully!",
      comments: result,
    });
  } catch (error) {
    return NextResponse.json({
      message: "something went wrong, try again!",
    });
  } finally {
    mongoose.connection.close();
  }
}
export async function DELETE(request) {
  const { id } = await request.json();

  await connectToDatabase();

  try {
    const result = await Comment.findByIdAndDelete(id);
    console.log(result);

    return NextResponse.json({
      message: "comment deleted successfully!",
    });
  } catch (error) {
    return NextResponse.json({
      message: "something went wrong, try again!",
    });
  } finally {
    mongoose.connection.close();
  }
}
