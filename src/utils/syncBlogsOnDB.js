import { getBlogs } from "@/app/blogs/fetchBolgs";
import { baseURL } from "../../config";
export async function syncBlogsOnDB() {
  const blogs = await getBlogs();
  const blogposts = blogs.map((blog) => {
    return {
      slug: blog.slug,
    };
  });

  try {
    const response = await fetch(`${baseURL}/api/blogposts`, {
      method: "POST",
      body: JSON.stringify(blogposts),
    });
    const result = await response.json();
    console.log(result.message);
  } catch (error) {
    console.log(error);
  }
}

//   syncBlogsOnDB();
