import { Product } from "./types";

const headers = {
  "Content-Type": "application/json",
};

export async function fetchProducts() {
  const response = await fetch(process.env.API_URL!, {
    cache: "no-store",
  });
  return (await response.json()) as Product[];
}

export async function createProductRequest(body: Product) {
  const response = await fetch(`${process.env.API_URL}/create-product`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
  return (await response.json()) as Product;
}

export async function getProductRequest(id: string) {
  try {
    const response = await fetch(`${process.env.API_URL}/product/${id}`);
    return (await response.json()) as Product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}
