import { baseURL } from "../../config";
import { getBlogs, getProjects } from "./blogs/fetchBolgs";
export default async function sitemap() {
  //get all blogs and get their urls
  const blogs = await getBlogs();
  const blogUrls =
    blogs.map((blog) => {
      return {
        url: `${baseURL}/blogs/${blog.slug}`,
        lastModified: blog._createdAt,
      };
    }) ?? [];
  //get all projects and get their urls
  const projects = await getProjects();
  const projectRepoUrls =
    projects.map((project) => {
      return {
        url: project.repo,
        lastModified: new Date(),
      };
    }) ?? [];
  const projectWebUrls =
    projects.map((project) => {
      return {
        url: project.website,
        lastModified: new Date(),
      };
    }) ?? [];
  return [
    {
      url: baseURL,
      lastModified: new Date(),
    },
    ...blogUrls,
    ...projectRepoUrls,
    ...projectWebUrls,
  ];
}
