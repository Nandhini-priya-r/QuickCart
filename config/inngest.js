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
