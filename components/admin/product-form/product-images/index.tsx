import React from "react";
import { useFormContext, Controller } from "react-hook-form";

import ProductImage from "@/components/admin/product-form/product-images/product-image";
import InputContainer from "@/components/admin/product-form/input-container";
import ErrorDisplay from "@/components/admin/product-form/error-display";

export default function ProductImages() {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const imagesError = errors.images?.message as string;

  return (
    <InputContainer>
      <p className="text-small text-foreground-500">
        Product Images: Upload images (optional)
      </p>
      <Controller
        control={control}
        name="images"
        render={({ field: { value, onChange } }) => (
          <div>
            <div className="flex gap-1">
              <ProductImage
                images={value || []}
                index={0}
                onImagesChange={onChange}
              />
              <ProductImage
                images={value || []}
                index={1}
                onImagesChange={onChange}
              />
              <ProductImage
                images={value || []}
                index={2}
                onImagesChange={onChange}
              />
            </div>
            {imagesError && <ErrorDisplay error={imagesError} />}
          </div>
        )}
      />
    </InputContainer>
  );
}
