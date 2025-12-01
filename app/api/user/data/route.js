import connectDB from "@/config/db";
import { getAuth } from "@clerk/nextjs/server";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return NextResponse.json({
        success: false,
        message: "No Clerk User ID found",
      });
    }
    console.log("db connected intial,",userId)
    
    await connectDB();
    console.log("db connected after")

    const user = await User.findOne({ clerkId: userId });

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "User Not Found in Database",
      });
    }

    return NextResponse.json({ success: true, user });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
