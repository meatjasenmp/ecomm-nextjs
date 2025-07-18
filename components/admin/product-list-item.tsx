"use client";

import { Product } from "@/app/api/products/types";
import DeleteProductButton from "@/components/admin/delete-product-button";
import Button from "@/components/ui/button";

type ProductListItemProps = {
  product: Product;
};

export default function ProductListItem({ product }: ProductListItemProps) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
          <p className="text-gray-600 mb-2">{product.shortDescription}</p>
          <p className="text-xl font-bold text-green-600">
            ${product.price.toFixed(2)}
            {product.discount && product.discount > 0 && (
              <span className="text-sm text-red-500 ml-2">
                -{product.discount}% off
              </span>
            )}
          </p>
        </div>
        <div className="flex gap-2 ml-4">
          <Button href={`/admin/products/${product._id}/edit`} variant="solid">
            Edit
          </Button>
          <DeleteProductButton productId={product._id!} />
        </div>
      </div>
    </div>
  );
}
