import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ message: "This is a pre-written answer. Please add your own AI library or API. The API route is /api/chat" });
}
