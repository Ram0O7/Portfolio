"use client";
import { useState } from "react";
import "./like.css";

export default function Like() {
  const [likeCount, setLikeCount] = useState(100);
  const [liked, setLiked] = useState(false);

  const toggleDisplay = () => {
    if (likeCount === 100) {
      setLikeCount(likeCount + 1);
      setLiked(true);
    } else {
      setLikeCount(likeCount - 1);
      setLiked(false);
    }
  };
  return (
    <div
      className="flex flex-col gap-1 items-center group max-w-fit scale-75"
      onClick={toggleDisplay}
    >
      <div className="heart-bg flex items-center justify-center group-active:bg-pink-700/30 md:group-hover:bg-pink-700/30 bg-opacity-20">
        <div className={`heart-icon ${liked ? "liked" : ""}`}></div>
      </div>
      <div
        className={`group-active:text-pink-700 md:group-hover:text-pink-700 text-sm sm:text-lg ${
          liked ? "text-pink-700" : ""
        }`}
      >
        {likeCount}
      </div>
    </div>
  );
}
