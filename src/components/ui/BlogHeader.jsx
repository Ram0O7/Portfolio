const BlogHeader = ({ title, tags }) => {
  return (
    <>
      <h1>{title}</h1>
      <div className="flex gap-4">
        {tags.map((tag) => {
          return (
            <p key={tag}>
              <span>#</span>
              {tag}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default BlogHeader;
