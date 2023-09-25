import { baseURL } from "../../config";
import axios from "axios";
export const postComment = async (comment, slug) => {
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
export const getComments = async (slug) => {
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

export const deleteComment = async (slug, id) => {
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
