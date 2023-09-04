import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description:
    "Rk's blog page, where you can find blogs about various interesting progrmming stuffs.",
};

export default function Blog() {
  const blogDir = "blogs";
  const files = fs.readdirSync(path.join(blogDir));
  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");
    const { data: frontMatter } = matter(fileContent);
    return { meta: frontMatter, slug: filename.replace(".mdx", "") };
  });

  return (
    <div className="flex flex-col gap-8 py-12">
      <h1 className="text-3xl text-red-500 font-extralight">
        This is my blog page
      </h1>
      <div className="blogs flex flex-col gap-4">
        {blogs.map((blog) => {
          return (
            <Link href={"/blogs/" + blog.slug} passHref key={blog.slug}>
              <h1>{blog.meta.title}</h1>
              <p>{blog.meta.description}</p>
              <span>{blog.meta.date}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
