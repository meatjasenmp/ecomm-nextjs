import React from "react";

import ProductImage from "@/components/product-form/product-images/product-image";
import InputContainer from "@/components/product-form/input-container";

export default function ProductImages() {
  return (
    <InputContainer>
      <p className="text-small text-foreground-500">
        Product Images: Upload at least one image
      </p>
      <div className="flex gap-1">
        <ProductImage />
        <ProductImage />
        <ProductImage />
      </div>
    </InputContainer>
  );
}
