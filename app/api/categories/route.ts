import { NextResponse } from "next/server";

import { getExternalApiUrl, apiRequest } from "@/lib/api-utils";

export async function GET() {
  try {
    const data = await apiRequest(getExternalApiUrl("/categories"));
    return NextResponse.json(data);
  } catch (error) {
    console.error("Categories fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
