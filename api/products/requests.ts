import { Product } from "./types";

const headers = {
  "Content-Type": "application/json",
};

export async function fetchProducts() {
  const baseUrl =
    typeof window === "undefined"
      ? process.env.API_URL || "http://localhost:8080"
      : "";

  const url =
    typeof window === "undefined" ? `${baseUrl}/products` : "/api/products";

  const response = await fetch(url, {
    cache: "no-store",
  });
  return (await response.json()) as Product[];
}

export async function createProductRequest(body: Product) {
  const baseUrl =
    typeof window === "undefined"
      ? process.env.API_URL || "http://localhost:8080"
      : "";

  const url =
    typeof window === "undefined"
      ? `${baseUrl}/create-product`
      : "/api/products";

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
  return (await response.json()) as Product;
}

export async function getProductRequest(id: string) {
  try {
    const baseUrl =
      typeof window === "undefined"
        ? process.env.API_URL || "http://localhost:8080"
        : "";

    const url =
      typeof window === "undefined"
        ? `${baseUrl}/product/${id}`
        : `/api/products/${id}`;

    const response = await fetch(url);
    return (await response.json()) as Product;
  } catch (error) {
    return error;
  }
}
