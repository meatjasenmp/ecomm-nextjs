import { Category } from "@/app/api/categories/types";

export async function fetchCategories() {
  const response = await fetch(`${process.env.API_URL}/categories`, {
    cache: "no-store",
  });
  return (await response.json()) as Category[];
}
