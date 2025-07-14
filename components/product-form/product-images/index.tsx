import React, { useMemo, useState } from "react";

import ProductImage from "@/components/product-form/product-images/product-image";
import InputContainer from "@/components/product-form/input-container";
import ErrorDisplay from "@/components/product-form/error-display";

// TODO: Next steps: Validation for image sizes. Styling.
export default function ProductImages() {
  const [images, setImages] = useState<File[]>([]);
  const [touched, setTouched] = useState<boolean>(false);
  const isValid = useMemo(() => images.length > 0, [images]);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImages([...images, e.target.files?.[0]!]);
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
          isValid={!(isValid || !touched)}
          setImage={handleImageChange}
          setTouched={setTouched}
        />
        <ProductImage
          isValid={!(isValid || !touched)}
          setImage={handleImageChange}
          setTouched={setTouched}
        />
        <ProductImage
          isValid={!(isValid || !touched)}
          setImage={handleImageChange}
          setTouched={setTouched}
        />
      </div>
    </InputContainer>
  );
}
