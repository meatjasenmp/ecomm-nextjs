import { Textarea } from "@heroui/input";
import InputContainer from "@/components/product-form/input-container";
import { useState } from "react";

export default function ProductShortDescription() {
  const [value, setValue] = useState<string>("");

  return (
    <InputContainer>
      <Textarea
        name="short-description"
        label="Short Description"
        variant="underlined"
        description="Optional short description of the product."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </InputContainer>
  );
}
