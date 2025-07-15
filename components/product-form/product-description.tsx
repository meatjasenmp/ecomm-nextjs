import { useMemo, useState } from "react";
import { Textarea } from "@heroui/react";

import InputContainer from "@/components/product-form/input-container";
import ErrorDisplay from "@/components/product-form/error-display";

export default function ProductDescription() {
  const [value, setValue] = useState<string>("");
  let error: string = "";
  const isValid = useMemo(() => value.length > 0 && value.length < 10, [value]);
  if (isValid) error = "Description must be at least 10 characters long.";

  return (
    <InputContainer>
      <Textarea
        isRequired
        description="Enter a concise description of the product."
        errorMessage={() => <ErrorDisplay error={error} />}
        id="product-description"
        isInvalid={error.length > 0}
        label="Description"
        name="description"
        value={value}
        variant="underlined"
        onChange={(e) => setValue(e.target.value)}
      />
    </InputContainer>
  );
}
