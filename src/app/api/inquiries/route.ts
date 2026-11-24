import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    // In production with Supabase connected, inserts into 'inquiries' table
    return NextResponse.json(
      {
        success: true,
        message: "Inquiry received with gratitude.",
        data: { name, email, phone, service, message, receivedAt: new Date().toISOString() },
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error processing inquiry." },
      { status: 500 }
    );
  }
}
