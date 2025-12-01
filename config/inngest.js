import { Inngest } from "inngest";
import connectDB from "./db";
import User from "@/models/User";

export const inngest = new Inngest({ id: "quickcart-next" });

export const syncUserCreation = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    const user = event.data;

    await connectDB();

    const email =
      user?.email_addresses?.[0]?.email_address ||
      user?.primary_email_address?.email_address ||
      "";

    const imageUrl =
      user?.image_url ||
      user?.profile_image_url ||
      "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Clipart.png";

    const name =
      (user?.first_name || user?.last_name)
        ? `${user?.first_name || ""} ${user?.last_name || ""}`.trim()
        : user?.username || "Guest User";

    await User.create({
      clerkId: user.id,
      email,
      name,
      imageUrl,
    });

    console.log("✅ User synced to MongoDB:", user.id);
  }
);

// UPDATE USER
export const syncUserUpdate = inngest.createFunction(
  { id: "update-user-from-clerk" },
  { event: "clerk/user.updated" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;

    await connectDB();

    await User.findOneAndUpdate(
      { clerkId: id },
      {
        email: email_addresses[0].email_address,
        name: `${first_name} ${last_name}`,
        imageUrl:
          image_url ||
          "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Clipart.png",
      }
    );
  }
);

// DELETE USER
export const syncUserDeletion = inngest.createFunction(
  { id: "delete-user-with-clerk" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    const { id } = event.data;

    await connectDB();
    await User.findOneAndDelete({ clerkId: id });
  }
);
