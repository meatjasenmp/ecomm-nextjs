import { Textarea } from "@heroui/react";
import { useFormContext } from "react-hook-form";

import InputContainer from "@/components/product-form/input-container";
import ErrorDisplay from "@/components/product-form/error-display";

export default function ProductShortDescription() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors.shortDescription?.message as string;

  return (
    <InputContainer>
      <Textarea
        isRequired
        description="Required short description of the product (10-25 characters)."
        errorMessage={() => <ErrorDisplay error={error || ""} />}
        id="product-short-description"
        isInvalid={!!error}
        label="Short Description"
        variant="underlined"
        {...register("shortDescription", {
          required: "Short description is required",
          minLength: {
            value: 10,
            message: "Short description must be at least 10 characters",
          },
          maxLength: {
            value: 25,
            message: "Short description must be 25 characters or less",
          },
        })}
      />
    </InputContainer>
  );
}
