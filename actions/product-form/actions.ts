"use server";

import { createProductRequest } from "@/api/products/requests";
import { getProductImages } from "@/api/images/utilities";
import { ProductSchema, Product } from "@/api/products/types";
import { ErrorProperties } from "@/actions/product-form/types";
import { ZodError, ZodSafeParseResult } from "zod/v4";
import z from "zod/v4";

function parseFormData(form: FormData): ZodSafeParseResult<Product> {
  return ProductSchema.safeParse({
    title: form.get("title"),
    description: form.get("description"),
    shortDescription: form.get("short-description"),
    categories: form.getAll("categories"),
    images: [form.get("images")],
    price: Number(form.get("price")),
    discount: Number(form.get("discount")),
    isPublished: true,
  });
}

async function createProduct(
  product: Product,
): Promise<void | { message: string }> {
  try {
    await createProductRequest(product);
  } catch (error) {
    return { message: "Error creating product" };
  }
}

function getErrors(error: ZodError<Product>): ErrorProperties {
  const errors = z.treeifyError(error);
  return errors.properties;
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
  console.info("Product Images:", product.images);
  await createProduct(product);
  return { message: "Product created successfully" };
}
