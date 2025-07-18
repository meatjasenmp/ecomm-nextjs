import { Product } from "@/app/api/products/types";
import { getInternalApiUrl, apiRequest } from "@/lib/api-utils";
import ProductList from "@/components/admin/product-list";
import Button from "@/components/ui/button";

export default async function ProductsPage() {
  const products = (await apiRequest(
    getInternalApiUrl("/products"),
  )) as Product[];

  return (
    <div className="p-6 w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Products
        </h2>
        <Button href="/admin/products/create" variant="solid">
          Create Product
        </Button>
      </div>
      <ProductList products={products} />
    </div>
  );
}
