import { Category } from "@/api/categories/types";
import { getApiUrl } from "@/api/utils/url";

export async function fetchCategories() {
  const response = await fetch(getApiUrl("/categories"), {
    cache: "no-store",
  });
  return (await response.json()) as Category[];
}
