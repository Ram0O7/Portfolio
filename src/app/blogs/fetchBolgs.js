import config from "@/config/sanity-config";
import { createClient, groq } from "next-sanity";
export async function getBlogs() {
  //feching blogs from sanity io using groq query
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
      "metadata":image.metadata,
    }`
  );
  return blogs;
}
export async function getProjects() {
  //feching projects from sanity io using groq query
  const projects = await createClient(config).fetch(
    groq`*[_type == "project" && !(_id in path("drafts.**"))]{
        _id,
        name,
        img,
        tags,
        repo,
        website,
      }`
  );
  return projects;
}

export async function getBlog(slug) {
  //feching single blog from sanity which matchess the slug passed through param
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
        "metadata":image.metadata,
        content,
      }`,
    { slug }
  );
  return blog;
}
