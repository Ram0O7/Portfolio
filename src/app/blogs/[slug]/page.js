import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import CodeHighlight from "@/UI/CodeHighlight";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const slug = params.slug;

  // fetch data
  const page = getPost(slug);

  return {
    title: page.frontMatter.title,
    description: page.frontMatter.description,
  };
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("blogs"));
  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
  return paths;
}

function getPost(slug) {
  const markdownFile = fs.readFileSync(
    path.join("blogs", slug + ".mdx"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownFile);
  return {
    frontMatter,
    slug,
    content,
  };
}
export default function Page({ params }) {
  const props = getPost(params.slug);

  return (
    <CodeHighlight>
      <article className="prose prose-sm sm:prose-base prose-headings:font-semibold lg:prose-lg prose-img:object-cover prose-img:w-full prose-img:h-72 sm:prose-img:w-3/4 sm:prose-img:h-96 !prose-invert prose-slate prose-orange prose-img:rounded-sm max-w-none">
        <MDXRemote source={props.content} />
      </article>
    </CodeHighlight>
  );
}