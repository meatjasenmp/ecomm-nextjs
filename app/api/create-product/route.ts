import { NextRequest, NextResponse } from "next/server";

import { apiRequest } from "@/lib/api-utils";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const response = await apiRequest("/create-product", "POST", body);

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to create product" },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Product creation error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
