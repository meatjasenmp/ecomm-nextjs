import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const response = await fetch(`${process.env.API_URL}/upload-images`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to upload images" },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: `Internal server error: ${error}` },
      { status: 500 },
    );
  }
}
