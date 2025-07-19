"use server";

import { z } from "zod/v4";

import { Category } from "@/app/api/categories/types";
import { Image } from "@/app/api/images/types";
import { getInternalApiUrl, apiRequest } from "@/lib/api-utils";
import { getCategoryIds, getImageIds } from "@/app/actions/product-form/utils";

const CREATE_ERROR_MESSAGE = "Error creating product";
const UPDATE_ERROR_MESSAGE = "Error updating product";

export async function createProductForm(formData: {
  title: string;
  description: string;
  shortDescription: string;
  categories: Category[];
  images: File[] | Image[];
  price: number;
  discount?: number;
}) {
  try {
    const productPayload = {
      title: formData.title,
      description: formData.description,
      shortDescription: formData.shortDescription,
      categories: getCategoryIds(formData.categories),
      images: getImageIds(formData.images as Image[]),
      price: formData.price,
      discount: formData.discount || 0,
      isPublished: true,
    };

    await apiRequest(getInternalApiUrl("/products"), "POST", productPayload);
    return { success: true, message: "Product created successfully" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Product validation error:", error.issues);
      return {
        success: false,
        message: CREATE_ERROR_MESSAGE,
      };
    }
    return { success: false, message: `${CREATE_ERROR_MESSAGE}: ${error}` };
  }
}

export async function updateProductForm(
  productId: string,
  formData: {
    title: string;
    description: string;
    shortDescription: string;
    categories: Category[];
    images: File[] | Image[];
    price: number;
    discount?: number;
  },
) {
  try {
    const productPayload = {
      title: formData.title,
      description: formData.description,
      shortDescription: formData.shortDescription,
      categories: getCategoryIds(formData.categories),
      images: getImageIds(formData.images as Image[]),
      price: formData.price,
      discount: formData.discount || 0,
      isPublished: true,
    };

    await apiRequest(
      getInternalApiUrl(`/products/${productId}`),
      "PATCH",
      productPayload,
    );
    return { success: true, message: "Product updated successfully" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Product validation error:", error.issues);
      return {
        success: false,
        message: UPDATE_ERROR_MESSAGE,
      };
    }
    return { success: false, message: `${UPDATE_ERROR_MESSAGE}: ${error}` };
  }
}
