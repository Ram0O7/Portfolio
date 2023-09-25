import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import BlogHeader from "@/components/ui/BlogHeader";
import { getBlogs, getBlog } from "../fetchBolgs";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import BlogWrapper from "@/components/ui/BlogWrapper";
import config from "@/config/sanity-config";
import Link from "next/link";
import Image from "next/image";
import CopyBtn from "@/lib/CopyBtn";
import Comment from "@/components/Comment";

const builder = imageUrlBuilder(config);
function urlFor(source) {
  return builder.image(source);
}

export async function generateMetadata({ params }) {
  // read route params
  const slug = params.slug;

  // fetch data
  const blog = await getBlog(slug);

  return {
    title: blog.title,
    description: blog.description,
  };
}

export async function generateStaticParams() {
  const blogs = await getBlogs();
  const paths = blogs.map((blog) => ({
    slug: blog.slug,
  }));
  return paths;
}

const components = {
  types: {
    code: (props) => (
      <div className="relative my-2">
        <SyntaxHighlighter language={props.value.language} style={vs2015}>
          {props.value.code}
        </SyntaxHighlighter>
        <CopyBtn style={"absolute top-2 right-2 text-lg lg:text-xl"} />
      </div>
    ),
    image: ({ value }) => (
      <div className="relative object-cover w-full h-72 sm:h-96 sm:w-4/5 mx-auto overflow-hidden">
        <Image
          src={urlFor(value.asset._ref).auto("format").fit("max").toString()}
          alt={value.alt}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="/images/backgroundEffect.jpg"
          className="object-cover rounded-sm"
        />
      </div>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      return <Link href={`https://${value?.href}`}>{children}</Link>;
    },
  },
};

export default async function Page({ params }) {
  const blog = await getBlog(params.slug);

  return (
    <BlogWrapper>
      <BlogHeader title={blog.title} tags={blog.tags} blogpost={params.slug} />
      <PortableText value={blog.content} components={components} />
      <Comment blogpost={params.slug} />
    </BlogWrapper>
  );
}
