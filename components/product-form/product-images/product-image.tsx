import { Input } from "@heroui/react";
import React, { useState } from "react";

import ProductImagePreview from "./product-image-preview";
import { ImageValidationError, validateImage } from "./helpers";

import ErrorDisplay from "@/components/product-form/error-display";

export default function ProductImage() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [error, setError] = useState<ImageValidationError | null>(null);

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;
    setError(null);
    const error = await validateImage(selectedFile);
    if (!error) return setImageUrl(URL.createObjectURL(selectedFile));
    setError(error);
    setImageUrl("");
  };

  const handleRemove = () => {
    setImageUrl("");
    setError(null);
  };

  return (
    <div className="w-1/3">
      <div
        className={`mt-2 flex relative justify-center rounded-lg border border-dashed ${error ? "border-red-500" : "border-gray-900/25"} px-6  py-10`}
      >
        {imageUrl.length > 0 && (
          <ProductImagePreview src={imageUrl} onRemove={handleRemove} />
        )}
        {imageUrl.length === 0 && (
          <Input
            isRequired
            accept="image/png, image/jpeg, image/gif"
            id="product-image"
            name="product-image"
            type="file"
            onChange={handleImageChange}
          />
        )}
      </div>
      {error && <ErrorDisplay error={error.message} />}
    </div>
  );
}
