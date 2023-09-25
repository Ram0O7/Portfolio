import { baseURL } from "../../config";
export const updatelikes = async (slug, likedBy) => {
  try {
    const response = await fetch(`${baseURL}/api/blogposts/${slug}/likes`, {
      method: "PUT",
      body: JSON.stringify({ likedBy }),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
};
export const getlikes = async (slug) => {
  try {
    const response = await fetch(`${baseURL}/api/blogposts/${slug}/likes`, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

export async function getLikedBlogs(email) {
  try {
    const response = await fetch(`${baseURL}/api/blogposts/?email=${email}`, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
