import React, { useMemo, useState } from "react";
import ProductImage from "@/components/product-form/product-images/product-image";
import InputContainer from "@/components/product-form/input-container";

export default function ProductImages() {
  const [images, setImages] = useState<File[]>([]);
  const isValid = useMemo(() => images.length > 0, [images]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) setImages([...images, ...Array.from(files)]);
  };

  return (
    <InputContainer>
      <label htmlFor="productImage" className="text-small text-foreground-500">
        Product Images: Upload at least one image
      </label>
      <div className="flex flex-wrap gap-4">
        <ProductImage setImage={handleImageChange} isValid={isValid} />
        <ProductImage setImage={handleImageChange} isValid={isValid} />
        <ProductImage setImage={handleImageChange} isValid={isValid} />
      </div>
    </InputContainer>
  );
}
