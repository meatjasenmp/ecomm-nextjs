import { useState } from "react";
import { Textarea } from "@heroui/input";
import InputContainer from "@/components/product-form/input-container";
import ErrorDisplay from "@/components/product-form/error-display";

export default function ProductDescription() {
  const [value, setValue] = useState<string>("");
  const errors: string[] = [];
  if (value.length > 0 && value.length < 10) {
    errors.push("The Product Description must be at least 10 characters long.");
  }

  return (
    <InputContainer>
      <Textarea
        name="description"
        label="Description"
        variant="underlined"
        errorMessage={() => <ErrorDisplay errors={errors} />}
        isRequired
        value={value}
        onChange={(e) => setValue(e.target.value)}
        isInvalid={errors.length > 0}
      />
    </InputContainer>
  );
}
