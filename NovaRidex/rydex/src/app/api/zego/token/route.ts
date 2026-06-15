import { NextResponse } from "next/server";
import { auth } from "@/auth";
import crypto from "crypto";

function generateToken04(
  appID: number,
  userID: string,
  serverSecret: string,
  effectiveTimeInSeconds: number,
  payload = ""
) {
  const version = "04";
  const nonce = Math.floor(Math.random() * 2147483647);
  const createTime = Math.floor(Date.now() / 1000);
  const expireTime = createTime + effectiveTimeInSeconds;

  const jsonObject = {
    app_id: appID,
    user_id: userID,
    nonce,
    ctime: createTime,
    expire: expireTime,
    payload,
  };

  const jsonStr = JSON.stringify(jsonObject);

  const hash = crypto
    .createHmac("sha256", serverSecret)
    .update(jsonStr)
    .digest();

  const token = Buffer.concat([
    Buffer.from(version),
    hash,
    Buffer.from(jsonStr),
  ]).toString("base64");

  return token;
}

export async function POST(req: Request) {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  const { roomId } = await req.json();

  const appID = Number(process.env.ZEGO_APP_ID || process.env.NEXT_PUBLIC_ZEGO_APP_ID);
  const serverSecret = process.env.ZEGO_SERVER_SECRET || process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET;

  if (!roomId) {
    return NextResponse.json(
      { message: "RoomId missing" },
      { status: 400 }
    );
  }

  if (!appID || !serverSecret) {
    return NextResponse.json(
      { message: "Zego configurations missing" },
      { status: 500 }
    );
  }

  const payloadObject = {
    room_id: roomId,
    privilege: {
      "1": 1, // Login Privilege: 1-allow, 0-forbid
      "2": 1, // Publishing Privilege: 1-allow, 0-forbid
    },
    stream_id_list: null,
  };
  const payload = JSON.stringify(payloadObject);

  const token = generateToken04(
    appID,
    session.user.id,
    serverSecret,
    3600,
    payload
  );

  return NextResponse.json({
    token,
    appID,
  });
}
