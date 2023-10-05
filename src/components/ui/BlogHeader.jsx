import getReadingTime from "@/lib/getReadingTime";
import Like from "./Like/Like";
import { timeSince } from "@/lib/DateFromatted";
import { AiOutlineClockCircle, AiOutlineCalendar } from "react-icons/ai";
import ShareOptions from "@/lib/ShareOptions";
import { baseURL } from "../../../config";

const BlogHeader = ({ title, tags, blogpost, content, time, slug }) => {
  const tagColors = {
    javascript: "text-yellow-500",
    html: "text-red-500",
    css: "text-blue-500",
    python: "text-indigo-500",
    "c++": "text-cyan-800",
    java: "text-orange-800",
    "node js": "text-green-300",
    express: "text-yellow-300",
    accessibility: "text-gray-500",
    website: "text-green-500",
    app: "text-cyan-500",
    programming: "text-pink-500",
    career: "text-violet-500",
    development: "text-rose-500",
  };
  const keys = Object.keys(tagColors);

  return (
    <>
      <div className="flex items-center justify-between gap-2">
        <h1 className="!m-0">{title}</h1>
        <Like blogpost={blogpost} />
      </div>
      <div className="flex flex-wrap">
        {tags.map((tag) => {
          return (
            <p key={tag} className="mr-4 my-4 text-xs sm:text-sm">
              <span
                className={
                  tagColors[tag.toLowerCase()] ||
                  tagColors[keys[Math.floor(Math.random() * keys.length)]]
                }
              >
                #
              </span>
              {tag.toUpperCase()}
            </p>
          );
        })}
      </div>
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex gap-2 items-center justify-start font-bold">
          <AiOutlineClockCircle />
          <p className={`!m-0 text-xs`}>{getReadingTime(content)}</p>
          &nbsp;|&nbsp;
          <AiOutlineCalendar />
          <p className="!m-0 text-xs">{timeSince(time)}</p>
        </div>
        <ShareOptions url={`${baseURL}/blogs/${slug}`} />
      </div>
    </>
  );
};

export default BlogHeader;
