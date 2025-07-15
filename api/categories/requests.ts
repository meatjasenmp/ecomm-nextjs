import { Category } from "@/api/categories/types";

export async function fetchCategories() {
  const baseUrl =
    typeof window === "undefined"
      ? process.env.API_URL || "http://localhost:8080"
      : "";

  const url =
    typeof window === "undefined" ? `${baseUrl}/categories` : "/api/categories";

  const response = await fetch(url, {
    cache: "no-store",
  });
  return (await response.json()) as Category[];
}
