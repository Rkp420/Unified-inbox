import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();

  const from = formData.get("From");
  const body = formData.get("Body");
  const channel = String(from).startsWith("whatsapp:") ? "whatsapp" : "sms";

  console.log("📩 Incoming message:", { from, body, channel });

  // TODO: Save to DB (Message table via Prisma)

  return NextResponse.json({ success: true });
}
