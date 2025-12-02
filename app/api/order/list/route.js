import connectDB from "@/config/db";
import Order from "@/models/Order";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { userId } = getAuth(request);

    if (!userId) {
      return NextResponse.json({
        success: false,
        message: "User is not authenticated",
        orders: []
      });
    }

    await connectDB();

    // Fetch all orders for this user (no populate needed)
    const orders = await Order.find({ userId }).sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      orders,
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
