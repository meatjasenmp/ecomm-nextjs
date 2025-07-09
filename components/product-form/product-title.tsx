import { useState } from "react";
import { Input } from "@heroui/react";
import InputContainer from "@/components/product-form/input-container";
import ErrorDisplay from "@/components/product-form/error-display";

export default function ProductTitle() {
  const [value, setValue] = useState<string>("");
  const errors: string[] = [];
  if (value.length > 0 && value.length < 5) {
    errors.push("The Product Title must be at least 10 characters long.");
  }

  return (
    <InputContainer>
      <Input
        isClearable
        isRequired
        className="w-full"
        errorMessage={() => <ErrorDisplay errors={errors} />}
        label="Product Title"
        type="text"
        variant="underlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        isInvalid={errors.length > 0}
        onClear={() => setValue("")}
      />
    </InputContainer>
  );
}
