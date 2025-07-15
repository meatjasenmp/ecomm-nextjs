"use server";

import { z } from "zod/v4";

import { Category } from "@/api/categories/types";
import { ProductCreateSchema, ProductCreate } from "@/api/products/types";
import { createProductRequest } from "@/api/products/requests";

export async function submitProductForm(formData: {
  title: string;
  description: string;
  shortDescription: string;
  categories: Category[];
  images: File[];
  price: number;
  discount?: number;
}) {
  console.info("Form Data:", formData);
  try {
    const validatedData = ProductCreateSchema.parse(formData);
    const product: ProductCreate = {
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
