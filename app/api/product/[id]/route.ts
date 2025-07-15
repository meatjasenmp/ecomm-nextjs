import { NextRequest, NextResponse } from "next/server";

import { apiRequest, getExternalApiUrl } from "@/lib/api-utils";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const data = await apiRequest(getExternalApiUrl(`/product/${params.id}`));
    return NextResponse.json(data);
  } catch (error) {
    console.error("Product fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
