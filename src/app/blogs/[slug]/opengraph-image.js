/* eslint-disable @next/next/no-img-element */
import getReadingTime from "@/lib/getReadingTime";
import { ImageResponse } from "next/server";
import { getBlog } from "../fetchBolgs";
import { timeSince } from "@/lib/DateFromatted";
export const size = {
  width: 1200,
  height: 630,
};
export const alt = "Blog | Ramkrishn Rai";
export const contentType = "image/png";

export default async function og({ params }) {
  const slug = params.slug;
  const blog = await getBlog(slug);

  return new ImageResponse(
    (
      <div tw="relative flex w-full h-full flex items-center justify-center">
        {/* Background */}
        <div tw="absolute flex inset-0">
          <img tw="flex flex-1" src={blog?.image} alt={blog?.alt} />
          {/* Overlay */}
          <div tw="absolute flex inset-0 bg-black bg-opacity-50" />
        </div>
        <div tw="flex flex-col text-red-100">
          {/* Title */}
          <div tw="text-6xl font-bold">{blog?.title}</div>
          {/* Tags */}
          <div tw="flex mt-6 flex-wrap items-center text-4xl text-red-300">
            <div tw="w-4 h-4 mx-6 rounded-full bg-green-300 " />
            <div>Ramkrishn Rai</div>
            <div tw="w-4 h-4 mx-6 rounded-full bg-green-300" />
            <div>{getReadingTime(blog?.content)}</div>
            <div tw="w-4 h-4 mx-6 rounded-full bg-green-300" />
            <div>{timeSince(blog?._createdAt)}</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
