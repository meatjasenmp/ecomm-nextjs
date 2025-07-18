import { Textarea } from "@heroui/react";
import { useFormContext } from "react-hook-form";

import InputContainer from "@/components/admin/product-form/input-container";
import ErrorDisplay from "@/components/admin/product-form/error-display";

export default function ProductDescription() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors.description?.message as string;

  return (
    <InputContainer>
      <Textarea
        isRequired
        description="Enter a concise description of the product."
        errorMessage={() => <ErrorDisplay error={error || ""} />}
        id="product-description"
        isInvalid={!!error}
        label="Description"
        variant="underlined"
        {...register("description", {
          required: "Description is required",
          minLength: {
            value: 10,
            message: "Description must be at least 10 characters long.",
          },
        })}
      />
    </InputContainer>
  );
}
