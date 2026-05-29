import { NextResponse } from "next/server";

import connectDB from "@/lib/db";
import User from "@/models/user.model";

export const dynamic = "force-dynamic";

export async function GET() {
  await connectDB();

  const vendors = await User.find({
    role: "vendor",
    videoKycStatus: { $in: ["pending", "in_progress"]},
  });

  const response = NextResponse.json(vendors);
  response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  return response;
}
