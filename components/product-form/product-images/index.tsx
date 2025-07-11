import React, { useMemo, useState } from "react";
import ProductImage from "@/components/product-form/product-images/product-image";
import InputContainer from "@/components/product-form/input-container";
import ErrorDisplay from "@/components/product-form/error-display";

// TODO: Next steps: Validation for image sizes, and display selected images.
export default function ProductImages() {
  const [images, setImages] = useState<File[]>([]);
  const [touched, setTouched] = useState<boolean>(false);
  const isValid = useMemo(() => images.length > 0, [images]);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) setImages([...images, ...Array.from(files)]);
  };

  return (
    <InputContainer>
      <p className="text-small text-foreground-500">
        Product Images: Upload at least one image
      </p>
      {!(isValid || !touched) && (
        <ErrorDisplay error="No images were selected." />
      )}
      <div className="flex gap-1">
        <ProductImage
          setImage={handleImageChange}
          isValid={!(isValid || !touched)}
          setTouched={setTouched}
        />
        <ProductImage
          setImage={handleImageChange}
          isValid={!(isValid || !touched)}
          setTouched={setTouched}
        />
        <ProductImage
          setImage={handleImageChange}
          isValid={!(isValid || !touched)}
          setTouched={setTouched}
        />
      </div>
    </InputContainer>
  );
}
