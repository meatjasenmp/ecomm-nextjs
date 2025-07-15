"use server";

import { z } from "zod/v4";

import { Category } from "@/api/categories/types";
import { ProductSchema, Product } from "@/api/products/types";
import { createProductRequest } from "@/api/products/requests";
import { Image } from "@/api/images/types";

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
    await createProductRequest(product);
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
