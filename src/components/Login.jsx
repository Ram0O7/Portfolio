"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { baseURL } from "../../config";
import { syncBlogsOnDB } from "@/utils/syncBlogsOnDB";
// import { revalidatePath } from "next/cache";

const revalidateBlogs = () => {
  // revalidatePath("/blogs");
  // revalidatePath("/blogs/[slug]");
  console.log("revalidating...");
};

const addUserToDB = async (session) => {
  try {
    const result = await fetch(`${baseURL}/api/user/`, {
      method: "POST",
      body: JSON.stringify(session.user),
    });
    const data = await result.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
export default function Login() {
  const { data: session, status } = useSession({ required: true });

  // useEffect(() => {
  //   if (status === "authenticated") {
  //     // addUserToDB(session); //adding new user to the database
  //     syncBlogsOnDB();
  //   }
  // }, [status]);

  if (status === "authenticated") {
    return (
      <div className="w-72 bg-blue-500 mx-auto my-60 rounded-md">
        <div className="m-auto max-w-fit flex flex-col py-12 gap-6 justify-center items-center min-h-full">
          <h1 className="text-2xl">{session.user.name}</h1>
          <h2 className="text-lg">{session.user.email}</h2>
          <div className="relative">
            <img
              src={`${session.user.image}`}
              alt="profile-image"
              className="w-14 h-14 rounded-full"
            />
          </div>
          <button
            className="px-4 py-2 bg-inherit bg-pink-400 shadow-md rounded-md"
            onClick={() => signOut()}
          >
            Sign out
          </button>
          <button
            className="px-4 py-2 bg-inherit bg-pink-400 shadow-md rounded-md"
            onClick={revalidateBlogs}
          >
            revalidate blogs
          </button>
        </div>
        {session.user.email === "ram706860@gmail.com" &&
          session.user.name.toLowerCase() === "ramkrishn rai" && (
            <div className="text-center py-4">
              This is a secret message!
              <br />
              only viewed by RK!
            </div>
          )}
      </div>
    );
  }
  return (
    <div className="w-72 h-60 bg-blue-500 mx-auto my-60 flex justify-center items-center rounded-md">
      <button
        className="px-4 py-2 bg-inherit bg-pink-400 shadow-md rounded-md"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </div>
  );
}
