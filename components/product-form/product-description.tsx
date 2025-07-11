import { useMemo, useState } from "react";
import { Textarea } from "@heroui/react";
import InputContainer from "@/components/product-form/input-container";
import ErrorDisplay from "@/components/product-form/error-display";

export default function ProductDescription() {
  const [value, setValue] = useState<string>("");
  let error: string = "";
  const isValid = useMemo(() => value.length > 0 && value.length < 5, [value]);
  if (isValid) error = "Title must be at least 5 characters long.";

  return (
    <InputContainer>
      <Textarea
        name="description"
        label="Description"
        variant="underlined"
        errorMessage={() => <ErrorDisplay error={error} />}
        description="Enter a concise description of the product."
        isRequired
        value={value}
        onChange={(e) => setValue(e.target.value)}
        isInvalid={error.length > 0}
      />
    </InputContainer>
  );
}
