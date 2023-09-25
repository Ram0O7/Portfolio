import Profile from "@/components/Profile";
import ShowBlogs from "@/components/ShowBlogs";
import React from "react";
import { getBlogs } from "../blogs/fetchBolgs";
export default async function page() {
  const blogs = await getBlogs();
  const likedBlogs = blogs.splice(0, 3);
  // console.log(likedBlogs);

  return (
    <>
      <Profile />
      <h1 className="text-3xl font-extrabold text-center mb-8 sm:text-4xl lg:text-5xl underline">
        Liked Blogs
      </h1>
      <ShowBlogs blogs={likedBlogs} />
    </>
  );
}
