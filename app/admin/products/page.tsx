import { Product } from "@/app/api/products/types";
import { getInternalApiUrl, apiRequest } from "@/lib/api-utils";
import ProductList from "@/components/admin/product-list";

export default async function ProductsPage() {
  const products = (await apiRequest(
    getInternalApiUrl("/products"),
  )) as Product[];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <a
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          href="/admin/products/create"
        >
          Create Product
        </a>
      </div>
      <ProductList products={products} />
    </div>
  );
}
