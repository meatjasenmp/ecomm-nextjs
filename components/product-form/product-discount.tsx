import { useMemo, useState } from "react";
import { Input } from "@heroui/react";

import InputContainer from "@/components/product-form/input-container";
import ErrorDisplay from "@/components/product-form/error-display";

export default function ProductDiscount() {
  const [value, setValue] = useState<string>("");

  const error: string = useMemo(() => {
    if (value === "") return "";
    const numValue = Number(value);
    if (numValue <= 0) return "Discount must be greater than 0.";
    if (!Number.isInteger(numValue)) return "Discount must be a whole number.";
    return "";
  }, [value]);

  return (
    <InputContainer>
      <Input
        className="w-full"
        errorMessage={() => <ErrorDisplay error={error} />}
        id="product-discount"
        isInvalid={error.length > 0}
        label="Product Discount"
        type="number"
        value={value}
        variant="underlined"
        onChange={(e) => setValue(e.target.value)}
      />
    </InputContainer>
  );
}
