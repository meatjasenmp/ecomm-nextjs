"use server";

import { ZodError, ZodSafeParseResult } from "zod/v4";
import z from "zod/v4";

import { createProductRequest } from "@/api/products/requests";
import { getProductImages } from "@/api/images/utilities";
import { ProductSchema, Product } from "@/api/products/types";
import { ErrorProperties } from "@/actions/product-form/types";

function parseFormData(form: FormData): ZodSafeParseResult<Product> {
  return ProductSchema.safeParse({
    title: form.get("product-title"),
    description: form.get("product-description"),
    shortDescription: form.get("short-description"),
    categories: form.getAll("product-categories"),
    images: [form.getAll("product-image")],
    price: Number(form.get("product-price")),
    discount: Number(form.get("product-discount")),
    isPublished: true,
  });
}

async function createProduct(
  product: Product,
): Promise<void | { message: string }> {
  try {
    await createProductRequest(product);
  } catch (error) {
    return { message: `Error creating product: ${error}` };
  }
}

function getErrors(error: ZodError<Product>): ErrorProperties {
  return z.treeifyError(error).properties;
}

export async function addProduct(
  prevState: { message: string },
  form: FormData,
) {
  const { success, error, data } = parseFormData(form);
  if (!success) {
    return { message: "Invalid Product", error: getErrors(error) };
  }
  const product = data as Product;
  product.images = await getProductImages(form.getAll("images") as File[]);
  await createProduct(product);
  return { message: "Product created successfully" };
}
