import { Input } from "@heroui/react";
import { useFormContext } from "react-hook-form";

import InputContainer from "@/components/admin/product-form/input-container";
import ErrorDisplay from "@/components/admin/product-form/error-display";

export default function ProductPrice() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors.price?.message as string;

  return (
    <InputContainer>
      <Input
        isRequired
        className="w-full"
        errorMessage={() => <ErrorDisplay error={error || ""} />}
        id="product-price"
        isInvalid={!!error}
        label="Product Price"
        type="number"
        variant="underlined"
        {...register("price", {
          required: "Price is required",
          valueAsNumber: true,
          min: {
            value: 1,
            message: "Price must be greater than 0.",
          },
          validate: (value) => {
            if (!Number.isInteger(value)) {
              return "Price must be a whole number.";
            }
            return true;
          },
        })}
      />
    </InputContainer>
  );
}
