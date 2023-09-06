import { NextResponse } from "next/server";

export async function POST(request) {
  const emailBody = await request.json();
  const url = process.env.EMAILENDPOINT;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailBody),
  });

  const data = await res.json();

  return NextResponse.json({
    message: "response recorded successfully!",
    data,
  });
}
