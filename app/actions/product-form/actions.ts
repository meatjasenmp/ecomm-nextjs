"use server";

import { z } from "zod/v4";

import { Category } from "@/app/api/categories/types";
import { ProductSchema, Product } from "@/app/api/products/types";
import { Image } from "@/app/api/images/types";
import { getInternalApiUrl, apiRequest } from "@/lib/api-utils";

export async function submitProductForm(formData: {
  title: string;
  description: string;
  shortDescription: string;
  categories: Category[];
  images: File[] | Image[];
  price: number;
  discount?: number;
}) {
  try {
    const validatedData = ProductSchema.parse(formData);
    const product: Product = {
      title: validatedData.title,
      description: validatedData.description,
      shortDescription: validatedData.shortDescription,
      categories: validatedData.categories,
      images: validatedData.images,
      price: validatedData.price,
      discount: validatedData.discount || 0,
      isPublished: true,
    };
    await apiRequest(getInternalApiUrl("/products"), "POST", product);
    return { success: true, message: "Product created successfully" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation error",
        errors: error.issues,
      };
    }
    return { success: false, message: `Error creating product: ${error}` };
  }
}
