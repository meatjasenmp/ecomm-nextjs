import React, { useState } from "react";

import { ImageValidationError, validateImage } from "./helpers";

import { Image } from "@/app/api/images/types";

type UseProductImageProps = {
  index: number;
  images: (File | Image)[];
  onImagesChange: (images: (File | Image)[]) => void;
};

export function useProductImage({
  index,
  images,
  onImagesChange,
}: UseProductImageProps) {
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

  return {
    error,
    imageUrl: getImageUrl(),
    handleImageChange,
    handleRemove,
  };
}
