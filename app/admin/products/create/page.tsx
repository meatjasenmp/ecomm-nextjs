import CreateProductForm from "@/components/product-form/create-product-form";
import { fetchCategories } from "@/api/categories/requests";
import { Category } from "@/api/categories/types";

export type CategoriesProps = {
  categories: Category[];
};

export default async function Page() {
  const categories = await fetchCategories();
  return <CreateProductForm categories={categories} />;
}
