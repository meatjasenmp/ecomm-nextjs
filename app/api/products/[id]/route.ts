import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params;
    const apiUrl = process.env.API_URL || "http://localhost:8080";

    const response = await fetch(`${apiUrl}/product/${id}`);

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch product" },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Product fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
