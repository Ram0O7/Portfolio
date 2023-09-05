import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

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
    <div className="py-12">
      <div className="blogs flex flex-col gap-10 sm:gap-12">
        {blogs.map((blog) => {
          return (
            <Link
              href={"/blogs/" + blog.slug}
              passHref
              key={blog.slug}
              className="flex flex-col sm:flex-row justify-between items-center gap-6"
            >
              <div className="relative w-full sm:w-96 h-60 sm:h-48">
                <Image
                  src={`${blog.meta.thumbnail}`}
                  alt="blog image"
                  fill={true}
                  className="object-cover rounded-sm"
                />
              </div>
              <div className="flex flex-col gap-2 sm:gap-4">
                <span className="text-xs text-text-primary">
                  {blog.meta.date}
                </span>
                <h1 className="text-2xl sm:text-3xl">{blog.meta.title}</h1>
                <p className="text-sm text-text-primary">
                  {blog.meta.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
