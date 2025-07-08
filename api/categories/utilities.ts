import { Category } from "./types";

export function parseCategories(categories: Category[]): Category[] {
  return categories.map((category) => {
    try {
      return JSON.parse(category as unknown as string) as Category;
    } catch (error) {
      console.error("Error parsing category:", error);
      return { _id: "", name: "", description: "" };
    }
  });
}
