"use client";
import ShowBlogs from "./ShowBlogs";
import { useSession } from "next-auth/react";
import useLikedBlogs from "@/hooks/fetchLikedBlogs";

export default function LikedBlogs() {
  const { data: session } = useSession();
  const [likedBlogs, loading] = useLikedBlogs(session?.user.email);

  return (
    <div>
      {likedBlogs.length === 0 ? (
        loading ? (
          <h1 className="text-2xl font-bold text-center">Loading...</h1>
        ) : (
          <h1 className="text-xl font-bold text-center">
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
