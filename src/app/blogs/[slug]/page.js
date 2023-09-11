import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import dynamic from "next/dynamic";
import BlogHeader from "@/components/ui/BlogHeader";
const CodeHighlight = dynamic(() => import("@/components/ui/CodeHighlight"), {
  ssr: false,
  loading: () => (
    <h1 className="text-3xl text-center mt-40 font-bold animate-pulse">
      Loading...
    </h1>
  ),
});

export async function generateMetadata({ params }) {
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
      <BlogHeader
        title={props.frontMatter.title}
        tags={props.frontMatter.tags}
      />
      <MDXRemote source={props.content} />
    </CodeHighlight>
  );
}
