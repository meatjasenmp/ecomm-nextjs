import { Input, Image as Img } from "@heroui/react";
import React, { useState } from "react";

import { ImageValidationError, validateImage } from "./helpers";

type ProductImageProps = {
  setImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setTouched: React.Dispatch<React.SetStateAction<boolean>>;
  isValid: boolean;
};

function ProductImagePreview({ src }: { src: string }) {
  return <Img alt="Preview" className="w-1/3" src={src} />;
}

export default function ProductImage({
  setImage,
  setTouched,
  isValid,
}: ProductImageProps) {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [validationError, setValidationError] =
    useState<ImageValidationError | null>(null);

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setValidationError(null);
    const error = await validateImage(file);
    if (error) {
      setValidationError(error);
      setImageUrl("");
      return;
    }
    setImageUrl(URL.createObjectURL(file));
    setImage(event);
  };

  if (imageUrl.length > 0) {
    return <ProductImagePreview src={imageUrl} />;
  }

  return (
    <div className="w-1/3">
      <div
        className={`mt-2 flex justify-center rounded-lg border border-dashed ${isValid || validationError ? "border-red-500" : "border-gray-900/25"} px-6  py-10`}
      >
        <Input
          isRequired
          accept="image/png, image/jpeg, image/gif"
          id="file-upload"
          name="file-upload"
          type="file"
          onBlur={() => setTouched(true)}
          onChange={handleImageChange}
        />
      </div>
      {validationError && (
        <p className="mt-2 text-tiny text-red-600">{validationError.message}</p>
      )}
    </div>
  );
}
