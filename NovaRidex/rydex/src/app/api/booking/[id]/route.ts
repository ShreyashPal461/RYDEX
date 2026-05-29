import connectDb from "@/lib/db";
import Booking from "@/models/booking.model";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET(
  req: Request,
  context : { params: Promise<{ id: string }> }
) {
  try {
    await connectDb();
    const id = (await context.params).id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid booking ID" },
        { status: 400 }
      );
    }

    const booking = await Booking.findById(id).populate("driver vehicle");
    if (!booking) {
      return NextResponse.json(
        { message: "Booking not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(booking);
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Failed to fetch booking" },
      { status: 500 }
    );
  }
}