import { auth } from "@/auth";
import connectDb from "@/lib/db";
import Booking from "@/models/booking.model";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDb();

    /* ===== AUTH CHECK ===== */
    const session = await auth();

    if (!session || !session.user || !session.user.email) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    // Single source of truth check in DB to avoid Next-Auth cookie/JWT role lag
    const dbUser = await User.findOne({ email: session.user.email });
    if (!dbUser || dbUser.role !== "vendor") {
      return NextResponse.json(
        { message: "Forbidden" },
        { status: 403 }
      );
    }

    const vendorId = dbUser._id;

    /* ===== FETCH PENDING BOOKINGS ===== */
    const bookings = await Booking.find({
      driver: vendorId,
      status: "requested",
    })
      .sort({ createdAt: -1 })
      .select("_id pickupAddress dropAddress fare createdAt");

    return NextResponse.json({
      bookings,
    });

  } catch (error) {
    console.error("Pending Bookings Error:", error);

    return NextResponse.json(
      { message: "Server Error" },
      { status: 500 }
    );
  }
}