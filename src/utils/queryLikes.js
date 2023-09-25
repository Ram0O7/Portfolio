import { baseURL } from "../../config";
import axios from "axios";
export const updatelikes = async (slug, likedBy) => {
  try {
    const response = await fetch(`${baseURL}/api/blogposts/${slug}/likes`, {
      method: "PUT",
      body: JSON.stringify({ likedBy }),
    });
    const result = await response.json();
    console.log(result.message);
  } catch (error) {
    console.log(error.message);
  }
};
export const getlikes = async (slug) => {
  try {
    const response = await axios.get(`${baseURL}/api/blogposts/${slug}/likes`);
    const result = response.data;
    return result.likes;
  } catch (error) {
    console.log(error.message);
  }
};
