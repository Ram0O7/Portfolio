import LikedBlogs from "@/components/LikedBlogs";
import Profile from "@/components/Profile";
import React from "react";
export default async function page() {
  return (
    <>
      <Profile />
      <h1 className="text-3xl font-extrabold text-center mb-8 sm:text-4xl lg:text-5xl underline">
        Liked Blogs
      </h1>
      <LikedBlogs />
    </>
  );
}
