import Like from "./Like/Like";

const BlogHeader = ({ title, tags }) => {
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
      <div className="flex items-start gap-2">
        <h1>{title}</h1>
        <Like />
      </div>
      <div className="flex flex-wrap">
        {tags.map((tag) => {
          return (
            <p key={tag} className="mr-4 mb-0">
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
    </>
  );
};

export default BlogHeader;
