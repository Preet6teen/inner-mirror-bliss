import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for subscribing to our sacred newsletter.",
        email,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error processing newsletter subscription." },
      { status: 500 }
    );
  }
}
