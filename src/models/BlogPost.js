import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  likedBlogs: {
    type: [String],
  },
});

const commentSchema = new mongoose.Schema(
  {
    blogSlug: { type: String },
    content: { type: String },
    user: {
      image: { type: String },
      name: { type: String },
      email: { type: String },
    },
  },
  { timestamps: true }
);

const blogPostSchema = new mongoose.Schema({
  slug: { type: String, unique: true },
  likes: { type: Number, default: 0 },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
const BlogPost =
  mongoose.models.BlogPost || mongoose.model("BlogPost", blogPostSchema);
const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export { BlogPost, Comment, User };
