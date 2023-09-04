import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
    <div className="py-12 lg:py-28">
      <article className="prose prose-sm md:prose-base lg:prose-lg !prose-invert prose-slate prose-img:rounded-sm max-w-none">
        <MDXRemote source={props.content}></MDXRemote>
      </article>
    </div>
  );
}
