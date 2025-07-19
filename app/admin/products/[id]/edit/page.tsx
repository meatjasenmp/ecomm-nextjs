import { notFound } from "next/navigation";

import EditProductForm from "@/components/admin/product-form/edit-product-form";
import { Category } from "@/app/api/categories/types";
import { Product } from "@/app/api/products/types";
import { getInternalApiUrl, apiRequest } from "@/lib/api-utils";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  try {
    const [product, categories] = await Promise.all([
      (await apiRequest(
        getInternalApiUrl(`/products/${id}`),
      )) as Promise<Product>,
      (await apiRequest(getInternalApiUrl("/categories"))) as Promise<
        Category[]
      >,
    ]);

    return <EditProductForm categories={categories} product={product} />;
  } catch {
    notFound();
  }
}
