import { Product } from "./types";

import { getApiUrl } from "@/api/utils/url";

const headers = {
  "Content-Type": "application/json",
};

export async function fetchProducts() {
  const response = await fetch(getApiUrl("/products"), {
    cache: "no-store",
  });
  return (await response.json()) as Product[];
}

export async function createProductRequest(body: Product) {
  const response = await fetch(getApiUrl("/create-product"), {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
  return (await response.json()) as Product;
}

export async function getProductRequest(id: string) {
  try {
    const response = await fetch(getApiUrl(`/product/${id}`));
    return (await response.json()) as Product;
  } catch (error) {
    return error;
  }
}
