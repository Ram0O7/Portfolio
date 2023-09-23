"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaTrash } from "react-icons/fa";
import { useThemeContext } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { baseURL } from "../../config";
import axios from "axios";
import { timeSince } from "@/lib/DateFromatted";

const postComment = async (comment, slug) => {
  try {
    const response = await fetch(`${baseURL}/api/blogposts/${slug}/comments`, {
      method: "POST",
      body: JSON.stringify({ blogSlug: slug, ...comment }),
    });
    const result = await response.json();
    console.log(result.message);
  } catch (error) {
    console.log(error.message);
  }
};
const getComments = async (slug) => {
  try {
    const response = await axios.get(
      `${baseURL}/api/blogposts/${slug}/comments`
    );
    const result = response.data;
    return result.comments;
  } catch (error) {
    console.log(error.message);
  }
};

const deleteComment = async (slug, id) => {
  try {
    const response = await fetch(`${baseURL}/api/blogposts/${slug}/comments`, {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    const result = await response.json();
    console.log(result.message);
  } catch (error) {
    console.log(error.message);
  }
};

export default function Comment({ blogpost }) {
  const { data: session, status } = useSession({ required: true });

  const { theme } = useThemeContext();
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");
  const contentInputRef = useRef(null);

  const handleDelete = async (id) => {
    if (
      confirm(
        "Are you sure! you want to delete this comment.\nThis action is irreversible."
      )
    ) {
      await deleteComment(blogpost, id);
      setComments(comments.filter((comment) => comment._id != id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //clearing the form
    contentInputRef.current.value = "";
    setComments([
      ...comments,
      {
        content,
        user: {
          image: session.user.image,
          name: session.user.name,
          email: session.user.email,
        },
        updatedAt: new Date(),
      },
    ]);
    postComment(
      {
        content,
        user: {
          image: session.user.image,
          name: session.user.name,
          email: session.user.email,
        },
      },
      blogpost
    );
  };

  useEffect(() => {
    const getAllComments = async () => {
      const comments = await getComments(blogpost);
      setComments([...comments]);
    };
    getAllComments();
  }, []);

  return (
    <div
      className={`py-8 lg:py-16 mt-16 flex flex-col gap-4 border-t border-${theme}-txt`}
    >
      <h1 className="text-4xl sm:text-5xl lg:text-6xl">Comments</h1>
      {status === "authenticated" && (
        <div className="commentBody flex flex-col gap-8 py-8">
          {comments.length === 0 && (
            <p className={`text-center text-sm text-${theme}-txt/70`}>
              no comments to show, be the first to comment something on this
              post.
              <span className="text-lg">&#128525;</span>
            </p>
          )}
          {comments.map((comment) => {
            const { content, user, updatedAt, _id } = comment;
            return (
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                className="flex flex-col gap-1"
                key={_id || content}
              >
                <div className="comment-info flex gap-2 items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={user.image}
                      alt={user.name}
                      className="w-full h-full object-cover !m-0"
                    />
                  </div>
                  <p className="text-sm uppercase !m-0 font-bold">
                    {user.name}
                  </p>
                  <p className={`text-xs text-${theme}-txt/70`}>
                    {timeSince(updatedAt)}
                  </p>
                  {session.user.email === user.email && (
                    <button
                      onClick={() => handleDelete(_id)}
                      name="button"
                      className={`uppercase ml-auto text-sm tracking-wide text-${theme}-txt/70 hover:text-inherit`}
                    >
                      <FaTrash />
                    </button>
                  )}
                </div>
                <p className="!m-0">{content}</p>
              </motion.div>
            );
          })}
        </div>
      )}
      <form
        action="submit"
        className="flex flex-col gap-5 text-sm font-bold"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            ref={contentInputRef}
            type="text"
            placeholder="add your comment..."
            className="resize-y text-sm"
            required
            onChange={() => setContent(contentInputRef.current.value)}
          />
        </div>
        <div className="self-end">
          <button
            type="submit"
            className={`btn after:bg-${theme}-secondary-accent relative uppercase tracking-widest pb-1`}
          >
            add comment
          </button>
        </div>
      </form>
    </div>
  );
}
