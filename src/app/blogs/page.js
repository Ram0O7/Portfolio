import ShowBlogs from "@/components/ShowBlogs";

export const metadata = {
  title: "Blog",
  description:
    "Rk's blog page, where you can find blogs about various interesting progrmming stuffs.",
};

export default async function Blog() {
  return <ShowBlogs />;
}
