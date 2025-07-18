import { Input } from "@heroui/react";
import { useFormContext } from "react-hook-form";

import InputContainer from "@/components/admin/product-form/input-container";
import ErrorDisplay from "@/components/admin/product-form/error-display";

export default function ProductTitle() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors.title?.message as string;

  return (
    <InputContainer>
      <Input
        isClearable
        isRequired
        className="w-full"
        errorMessage={() => <ErrorDisplay error={error || ""} />}
        id="product-title"
        isInvalid={!!error}
        label="Product Title"
        type="text"
        variant="underlined"
        {...register("title", {
          required: "Title is required",
          minLength: {
            value: 5,
            message: "Title must be at least 5 characters long.",
          },
        })}
      />
    </InputContainer>
  );
}
