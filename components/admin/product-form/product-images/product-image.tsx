import { Input } from "@heroui/react";
import React from "react";

import ProductImagePreview from "./product-image-preview";
import { useProductImage } from "./use-product-image";

import ErrorDisplay from "@/components/admin/product-form/error-display";
import { Image } from "@/app/api/images/types";

type ProductImageProps = {
  index: number;
  images: (File | Image)[];
  onImagesChange: (images: (File | Image)[]) => void;
};

export default function ProductImage({
  index,
  images,
  onImagesChange,
}: ProductImageProps) {
  const { error, imageUrl, borderColor, handleImageChange, handleRemove } =
    useProductImage({ index, images, onImagesChange });

  return (
    <div className="w-1/3">
      <div
        className={`mt-2 h-full relative p-4 rounded-lg border border-dashed ${borderColor}`}
      >
        {imageUrl.length > 0 && (
          <ProductImagePreview src={imageUrl} onRemove={handleRemove} />
        )}
        {imageUrl.length === 0 && (
          <Input
            accept="image/png, image/jpeg, image/gif"
            id={`image-${index}`}
            name={`image-${index}`}
            type="file"
            onChange={handleImageChange}
          />
        )}
      </div>
      {error && <ErrorDisplay error={error.message} />}
    </div>
  );
}
