import { NextRequest, NextResponse } from "next/server";

import { apiRequest, getExternalApiUrl } from "@/lib/api-utils";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const data = await apiRequest(
      getExternalApiUrl("/upload-images"),
      "POST",
      formData,
    );
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: `Internal server error: ${error}` },
      { status: 500 },
    );
  }
}
