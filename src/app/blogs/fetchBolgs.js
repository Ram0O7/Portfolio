import config from "@/config/sanity-config";
import { createClient, groq } from "next-sanity";
export async function getBlogs() {
  const blogs = await createClient(config).fetch(
    groq`*[_type == "blog" && !(_id in path("drafts.**"))]{
        _id,
        _createdAt,
        title,
        description,
        tags,
        "slug": slug.current,
        "image": image.asset->url,
        "alt": image.alt,
      }`
  );
  return blogs;
}
export async function getBlog(slug) {
  const blog = await createClient(config).fetch(
    groq`*[_type == "blog" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        description,
        tags,
        "slug": slug.current,
        "image": image.asset->url,
        "alt": image.alt,
        content,
      }`,
    { slug }
  );
  return blog;
}
