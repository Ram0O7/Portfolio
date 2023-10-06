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

export default async function Image({ params }) {
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
      </div>
    ),
    { ...size }
  );
}
