import { NextResponse } from "next/server";
import { mockProducts } from "./data";

export async function GET() {
  return NextResponse.json({
    success: true,
    count: mockProducts.length,
    products: mockProducts,
  });
}
