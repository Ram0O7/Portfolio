import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import BlogHeader from "@/components/ui/BlogHeader";
import { getBlogs, getBlog } from "../fetchBolgs";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import BlogWrapper from "@/components/ui/BlogWrapper";
import config from "@/config/sanity-config";
import Link from "next/link";
import Image from "next/image";

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
      <div className="my-2">
        <SyntaxHighlighter language={props.value.language} style={dracula}>
          {props.value.code}
        </SyntaxHighlighter>
      </div>
    ),
    image: ({ value }) => (
      <div className="relative object-cover w-full h-72 sm:h-96 sm:w-4/5 mx-auto overflow-hidden">
        <Image
          src={urlFor(value.asset._ref).auto("format").fit("max").toString()}
          alt={value.alt}
          fill={true}
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
      <BlogHeader title={blog.title} tags={blog.tags} />
      <PortableText value={blog.content} components={components} />
    </BlogWrapper>
  );
}
