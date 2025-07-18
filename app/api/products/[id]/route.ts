import { NextRequest, NextResponse } from "next/server";

import { apiRequest, getExternalApiUrl } from "@/lib/api-utils";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const data = await apiRequest(getExternalApiUrl(`/product/${id}`));
    return NextResponse.json(data);
  } catch (error) {
    console.error("Product fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const data = await apiRequest(
      getExternalApiUrl(`/update-product/${id}`),
      "PATCH",
      body,
    );
    return NextResponse.json(data);
  } catch (error) {
    console.error("Product update error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const data = await apiRequest(
      getExternalApiUrl(`/delete-product/${id}`),
      "DELETE",
    );
    return NextResponse.json(data);
  } catch (error) {
    console.error("Product delete error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
