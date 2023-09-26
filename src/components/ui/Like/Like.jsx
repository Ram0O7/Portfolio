"use client";
import { useEffect, useState } from "react";
import "./like.css";
import { getlikes, updatelikes } from "@/utils/queryLikes";
import { signIn, useSession } from "next-auth/react";

export default function Like({ blogpost }) {
  const { data: session, status } = useSession();
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const updateLikesOnServer = async () => {
    try {
      // Simulate an API request
      const isLiked = await updatelikes(blogpost, session?.user.email);
      console.log("Likes updated on the server");
    } catch (error) {
      console.error("Failed to update likes on the server", error);
    }
  };

  // Function to handle liking a post
  const handleLikeClick = () => {
    if (status === "authenticated") {
      if (!liked) {
        setLiked(true);
        // Optimistic update: immediately increment the like count
        setLikes(likes + 1);
        // Debounce sending the request to the server
        setTimeout(() => {
          updateLikesOnServer(likes + 1);
        }, 2000); // Debounce for 2 second
      }
    } else {
      if (
        confirm(
          "you need to be signed in.\nIn order to add likes or comments to the blogposts."
        )
      ) {
        signIn();
      }
    }
  };

  const updateLikeStatus = async () => {
    const { likes, hasLiked } = await getlikes(blogpost, session?.user.email);
    likes && setLikes(likes);
    setLiked(hasLiked);
  };

  useEffect(() => {
    updateLikeStatus();
  }, []);

  return (
    <div
      className="flex flex-col gap-1 items-center group max-w-fit scale-75"
      onClick={handleLikeClick}
    >
      <div className="heart-bg flex items-center justify-center group-active:bg-pink-700/30 md:group-hover:bg-pink-700/30 bg-opacity-20">
        <div className={`heart-icon ${liked ? "liked" : ""}`}></div>
      </div>
      <div
        className={`group-active:text-pink-700 md:group-hover:text-pink-700 text-sm sm:text-lg ${
          liked ? "text-pink-700" : ""
        }`}
      >
        {likes}
      </div>
    </div>
  );
}
