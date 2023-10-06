import mongoose from "mongoose";

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

const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export { Comment };
