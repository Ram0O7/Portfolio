import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  const emailBody = await request.json();
  const url = process.env.EMAILENDPOINT;
  const airtableUrl = process.env.AIRTABLE_URL;

  const result = axios
    .post(
      airtableUrl,
      {
        fields: {
          name: emailBody.name,
          email: emailBody.email,
          message: emailBody.message,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      if (response.status === 200) {
        console.log("user added to the database!");
        //send email to my personal mailbox
      } else {
        throw new error("something went wrong!");
      }
    })
    .catch((error) => {
      console.log(error);
    });

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
