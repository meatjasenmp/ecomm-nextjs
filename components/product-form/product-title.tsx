import { useMemo, useState } from "react";
import { Input } from "@heroui/react";
import InputContainer from "@/components/product-form/input-container";
import ErrorDisplay from "@/components/product-form/error-display";

export default function ProductTitle() {
  const [value, setValue] = useState<string>("");
  let error: string = "";
  const isValid = useMemo(() => value.length > 0 && value.length < 5, [value]);
  if (isValid) error = "Title must be at least 5 characters long.";

  return (
    <InputContainer>
      <Input
        isClearable
        isRequired
        className="w-full"
        errorMessage={() => <ErrorDisplay error={error} />}
        label="Product Title"
        type="text"
        variant="underlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        isInvalid={error.length > 0}
        onClear={() => setValue("")}
      />
    </InputContainer>
  );
}
