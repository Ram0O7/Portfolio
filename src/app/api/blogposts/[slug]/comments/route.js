import { NextResponse } from "next/server";
import { Comment } from "@/models/BlogPost";
import connectToDatabase from "@/utils/db";
import { redis } from "@/utils/redis";

export async function POST(request, { params }) {
  const { slug } = params;
  const comment = await request.json();
  await connectToDatabase();
  const redisKey = slug + ":comments";

  try {
    const result = await Comment.create({ ...comment });

    const stringifiedComment = JSON.stringify({
      user: result.user,
      _id: result._id,
      content: result.content,
      updatedAt: result.updatedAt,
    });
    await redis.rpush(redisKey, stringifiedComment);
    return NextResponse.json({
      message: "comment successfully added to the database!",
    });
  } catch (error) {
    return NextResponse.json({
      message: "something went wrong, try again!",
    });
  }
}
export async function GET(request, { params }) {
  const { slug } = params;
  const redisKey = slug + ":comments";
  try {
    const commentsCache = await redis.lrange(redisKey, 0, -1);
    const commentsArray = commentsCache.map((comments) => JSON.parse(comments)); //deserializing each element from json to normal objects
    if (commentsArray.length !== 0) {
      return NextResponse.json({
        message: "comments fetched from redis server successfully!",
        comments: commentsArray,
      });
    }
    await connectToDatabase();
    const result = await Comment.find({ blogSlug: slug }).select([
      "content",
      "user",
      "updatedAt",
    ]);
    const stringifiedComments = result.map((comment) =>
      JSON.stringify(comment)
    );
    await redis.rpush(redisKey, ...stringifiedComments);
    return NextResponse.json({
      message: "comments fetched from database successfully!",
      comments: result,
    });
  } catch (error) {
    return NextResponse.json({
      message: "something went wrong, try again!",
    });
  }
}
export async function DELETE(request, { params }) {
  const { slug } = params;
  const { id } = await request.json();
  const redisKey = slug + ":comments";

  await connectToDatabase();

  try {
    await Comment.findByIdAndDelete(id);
    await redis.del(redisKey);
    return NextResponse.json({
      message: "comment deleted successfully!",
    });
  } catch (error) {
    return NextResponse.json({
      message: "something went wrong, try again!",
    });
  }
}
