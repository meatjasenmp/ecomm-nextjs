import { Input, Image } from "@heroui/react";
import React, { useState } from "react";

type ProductImageProps = {
  setImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setTouched: React.Dispatch<React.SetStateAction<boolean>>;
  isValid: boolean;
};

function ProductImagePreview({ src }: { src: string }) {
  return <Image className="w-1/3" src={src} alt="Preview" />;
}

export default function ProductImage({
  setImage,
  setTouched,
  isValid,
}: ProductImageProps) {
  const [imageUrl, setImageUrl] = useState<string>("");
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setImageUrl(URL.createObjectURL(file));
    setImage(event);
  };

  if (imageUrl.length > 0) {
    return <ProductImagePreview src={imageUrl} />;
  }

  return (
    <div
      className={`mt-2 flex justify-center rounded-lg border border-dashed w-1/3 ${isValid ? "border-red-500" : "border-gray-900/25"} px-6  py-10`}
    >
      <Input
        id="file-upload"
        name="file-upload"
        type="file"
        accept="image/png, image/jpeg, image/gif"
        onChange={handleImageChange}
        isRequired
        onBlur={() => setTouched(true)}
      />
    </div>
  );
}
