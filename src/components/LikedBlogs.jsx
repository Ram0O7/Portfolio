"use client";
import React, { useEffect, useState } from "react";
import { getBlogs } from "@/app/blogs/fetchBolgs";
import ShowBlogs from "./ShowBlogs";
import { useSession } from "next-auth/react";
import { getLikedBlogs } from "@/utils/queryLikes";

export default function LikedBlogs() {
  const { data: session } = useSession();
  const [likedBlogs, setLikedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      const blogs = await getBlogs();
      const { likedBlogs } = await getLikedBlogs(session?.user.email);
      const liked = blogs.filter((blog) => likedBlogs.includes(blog.slug));
      setLikedBlogs(liked);
      setLoading(false);
    }
    fetchBlogs();
  }, []);

  return (
    <div>
      {likedBlogs.length === 0 ? (
        loading ? (
          <h1 className="text-2xl font-bold text-center">Loading...</h1>
        ) : (
          <h1 className="text-2xl font-bold text-center">
            looks like you haven't liked any blogs! like a blog to add to you
            liked collections.
          </h1>
        )
      ) : (
        <ShowBlogs blogs={likedBlogs} />
      )}
    </div>
  );
}
