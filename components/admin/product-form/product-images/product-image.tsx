import { Input } from "@heroui/react";
import React, { useState } from "react";

import ProductImagePreview from "./product-image-preview";
import { ImageValidationError, validateImage } from "./helpers";

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
  const [error, setError] = useState<ImageValidationError | null>(null);
  const currentImage = images[index];

  const getImageUrl = () => {
    if (currentImage instanceof File) return URL.createObjectURL(currentImage);
    if (currentImage && "url" in currentImage) return currentImage.url;
    return "";
  };

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;

    setError(null);
    const validationError = await validateImage(selectedFile);
    if (!validationError) {
      const newImages = [...images];
      newImages[index] = selectedFile;
      onImagesChange(newImages.filter(Boolean));
    } else setError(validationError);
  };

  const handleRemove = () => {
    const newImages = [...images];
    newImages.splice(index, 1);
    onImagesChange(newImages);
    setError(null);
  };

  const imageUrl = getImageUrl();
  const borderColor = error ? "border-red-500" : "border-gray-900/25";

  return (
    <div className="w-1/3">
      <div
        className={`mt-2 flex relative justify-center rounded-lg border border-dashed ${borderColor} px-6 py-10`}
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
