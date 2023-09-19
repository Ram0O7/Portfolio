import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    replies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

const blogPostSchema = new mongoose.Schema({
  slug: { type: String, required: true },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  likedPosts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BlogPost",
    },
  ],
});

const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);
const BlogPost =
  mongoose.models.BlogPost || mongoose.model("BlogPost", blogPostSchema);
const User = mongoose.models.User || mongoose.model("User", userSchema);

export { Comment, BlogPost, User };
