"use client";

import ProductListItem from "@/components/admin/product-list-item";
import { Product } from "@/app/api/products/types";

type ProductListProps = {
  products: Product[];
};

export default function ProductList({ products }: ProductListProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>No products found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <ProductListItem key={product._id} product={product} />
      ))}
    </div>
  );
}
