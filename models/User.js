import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    clerkId: { type: String, required: true, unique: true },

    // Name should NOT be required because Clerk sometimes sends empty values
    name: { type: String, default: "" },

    email: { type: String, required: true, unique: true },

    // Always safe with fallback image
    imageUrl: {
      type: String,
      default: "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Clipart.png",
    },

    cartItems: { type: Object, default: {} },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
