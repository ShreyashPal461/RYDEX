import { NextResponse } from "next/server";
import connectDb from "@/lib/db";
import Booking from "@/models/booking.model";
import { auth } from "@/auth";
import mongoose from "mongoose";

export async function GET() {
  try {
    await connectDb();

    const session = await auth();
    const driverId = session?.user?.id;

    if (!driverId || !mongoose.Types.ObjectId.isValid(driverId)) {
      return NextResponse.json({ booking: null });
    }

    const booking = await Booking.findOne({
      driver: driverId,
      status: {
        $in: ["requested", "awaiting_payment", "confirmed", "started"],
      },
    }).sort({ createdAt: -1 }).populate("user driver vehicle");

    return NextResponse.json(booking);
  } catch (error) {
    console.error("GET ACTIVE BOOKING ERROR:", error);
    return NextResponse.json({ booking: null });
  }
}