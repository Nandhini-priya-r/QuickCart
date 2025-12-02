import connectDB from "@/config/db";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Product from "@/models/Product";
import Order from "@/models/Order";
import User from "@/models/User";

export async function POST(request) {
  try {
    await connectDB();

    const { userId } = getAuth(request);
    if (!userId) {
      return NextResponse.json({ success: false, message: "Unauthorized" });
    }

    const { address, items } = await request.json();

    if (!address || !items || items.length === 0) {
      return NextResponse.json({ success: false, message: "Invalid data" });
    }

    let orderItems = [];
    let totalAmount = 0;

    for (const item of items) {
      const product = await Product.findById(item.product);
      if (!product) continue;

      orderItems.push({
        product: product._id,     // REQUIRED FIELD
        quantity: item.quantity,  // REQUIRED FIELD
      });

      totalAmount += product.offerPrice * item.quantity;
    }

    const finalAmount = totalAmount + Math.floor(totalAmount * 0.02);

    const newOrder = await Order.create({
      userId,
      address,
      items: orderItems,
      amount: finalAmount,
      status: "Pending",
      date: Date.now()   // REQUIRED FIELD
    });

    // Clear user cart
    await User.findOneAndUpdate(
      { userId },
      { cartItems: {} }
    );

    return NextResponse.json({
      success: true,
      message: "Order Placed",
      order: newOrder,
    });

  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, message: error.message });
  }
}
