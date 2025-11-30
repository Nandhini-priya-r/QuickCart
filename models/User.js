import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    clerkId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    imageUrl: { type: String },
    cartItems: { type: Object, default: {} },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
