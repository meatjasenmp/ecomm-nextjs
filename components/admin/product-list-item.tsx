"use client";

import { Product } from "@/app/api/products/types";
import { Image as ImageType } from "@/app/api/images/types";
import DeleteProductButton from "@/components/admin/delete-product-button";
import Button from "@/components/ui/button";
import Image from "@/components/ui/image";

type ProductListItemProps = {
  product: Product;
};

export default function ProductListItem({ product }: ProductListItemProps) {
  return (
    <div className="group relative border rounded-lg p-4 bg-white shadow-sm">
      <Image
        alt={product.title}
        className="w-full h-48 object-cover rounded-md mb-4"
        height={300}
        src={(product.images[0] as ImageType).url}
        width={300}
      />
      <div className="mt-4 flex justify-between flex-col">
        <div>
          <h3 className="text-sm text-gray-700">{product.title}</h3>
          <p className="text-gray-600 mb-2 text-tiny">
            {product.shortDescription}
          </p>
          <p className="text-sm font-bold text-gray-500">
            ${product.price.toFixed(2)}
          </p>
          {product.discount && product.discount > 0 && (
            <p className="text-sm text-gray-900">-{product.discount}% off</p>
          )}
        </div>
        <div className="flex gap-2 mt-4">
          <Button href={`/admin/products/${product._id}/edit`} variant="solid">
            Edit
          </Button>
          <DeleteProductButton productId={product._id!} />
        </div>
      </div>
    </div>
  );
}
