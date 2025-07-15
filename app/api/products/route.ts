import { NextRequest, NextResponse } from "next/server";

import { getExternalApiUrl, apiRequest } from "@/lib/api-utils";

export async function GET() {
  try {
    const data = await apiRequest(getExternalApiUrl("/products"));
    return NextResponse.json(data);
  } catch (error) {
    console.error("Products fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = await apiRequest(
      getExternalApiUrl("/create-product"),
      "POST",
      body,
    );
    return NextResponse.json(data);
  } catch (error) {
    console.error("Product creation error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
