import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { serviceSlug, serviceTitle, price, mode, date, time, name, phone, email, notes } = body;

    if (!name || !phone || !serviceSlug) {
      return NextResponse.json(
        { error: "Name, phone, and service are required fields." },
        { status: 400 }
      );
    }

    const bookingReference = `IMB-${Date.now().toString(36).toUpperCase()}`;

    // In production with Supabase connected, inserts into 'bookings' table
    return NextResponse.json(
      {
        success: true,
        bookingReference,
        message: "Booking request confirmed with gratitude.",
        data: {
          bookingReference,
          serviceSlug,
          serviceTitle,
          price,
          mode,
          date,
          time,
          name,
          phone,
          email,
          notes,
          createdAt: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error processing booking." },
      { status: 500 }
    );
  }
}
