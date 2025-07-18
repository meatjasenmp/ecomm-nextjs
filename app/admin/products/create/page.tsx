import CreateProductForm from "@/components/admin/product-form/create-product-form";
import { Category } from "@/app/api/categories/types";
import { getInternalApiUrl, apiRequest } from "@/lib/api-utils";

export type CategoriesProps = {
  categories: Category[];
};

export default async function Page() {
  const categories = (await apiRequest(
    getInternalApiUrl("/categories"),
  )) as Category[];

  return <CreateProductForm categories={categories} />;
}
