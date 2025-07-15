import { Input } from "@heroui/react";
import { useFormContext } from "react-hook-form";

import InputContainer from "@/components/product-form/input-container";
import ErrorDisplay from "@/components/product-form/error-display";

export default function ProductDiscount() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors.discount?.message as string;

  return (
    <InputContainer>
      <Input
        className="w-full"
        errorMessage={() => <ErrorDisplay error={error || ""} />}
        id="product-discount"
        isInvalid={!!error}
        label="Product Discount"
        type="number"
        variant="underlined"
        {...register("discount", {
          valueAsNumber: true,
          min: {
            value: 0,
            message: "Discount must be greater than 0.",
          },
          validate: (value) => {
            if (value !== undefined && !Number.isInteger(value)) {
              return "Discount must be a whole number.";
            }
            return true;
          },
        })}
      />
    </InputContainer>
  );
}
