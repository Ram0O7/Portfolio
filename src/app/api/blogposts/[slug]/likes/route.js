import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { slug } = params;
  return NextResponse.json({
    message: `Getting likes count for the blog ${slug}`,
  });
}
