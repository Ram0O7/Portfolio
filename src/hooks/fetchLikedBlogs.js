// useLikedBlogs.js
import { useState, useEffect } from "react";
import { getLikedBlogs } from "@/utils/queryLikes";
import { getBlogs } from "@/app/blogs/fetchBolgs";

function useLikedBlogs(email) {
  const [likedBlogs, setLikedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      const blogs = await getBlogs();
      const { likedBlogs } = await getLikedBlogs(email);
      const liked = blogs.filter((blog) => likedBlogs?.includes(blog.slug));
      setLikedBlogs(liked);
      setLoading(false);
    }
    fetchBlogs();
  }, []);

  return [likedBlogs, loading];
}

export default useLikedBlogs;
