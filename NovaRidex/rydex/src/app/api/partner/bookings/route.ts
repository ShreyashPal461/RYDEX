import { NextResponse } from "next/server";
import connectDb from "@/lib/db";
import Booking from "@/models/booking.model";
import { auth } from "@/auth";
import mongoose from "mongoose";

export async function GET(req: Request) {
  try {
    await connectDb();

    const session = await auth();
    const driverId = session?.user?.id;

    if (!driverId || !mongoose.Types.ObjectId.isValid(driverId)) {
      return NextResponse.json({ bookings: [] });
    }

    const bookings = await Booking.find({
      driver: driverId,
    })
      .populate({
        path: "vehicle",
        select: "vehicleModel imageUrl type number",
      })
      .populate({
        path: "user",
        select: "name image",
      })
      .populate({
        path: "driver",
        select: "name",
      })
      .sort({ createdAt: -1 });

    return NextResponse.json({ bookings });
  } catch (error) {
    console.error("GET BOOKINGS ERROR:", error);
    return NextResponse.json({ bookings: [] });
  }
}