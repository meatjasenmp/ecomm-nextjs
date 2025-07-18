"use client";

import Link from "next/link";

import { Product } from "@/app/api/products/types";

type ProductListItemProps = {
  product: Product;
};

export default function ProductListItem({ product }: ProductListItemProps) {
  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this product?")) {
      try {
        const response = await fetch(`/api/products/${product._id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          window.location.reload();
        } else {
          alert("Failed to delete product");
        }
      } catch (error) {
        console.error("Delete error:", error);
        alert("Error deleting product");
      }
    }
  };

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
          <Link
            className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
            href={`/admin/products/${product._id}/edit`}
          >
            Edit
          </Link>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
