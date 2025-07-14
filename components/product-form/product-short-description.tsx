import { Textarea } from "@heroui/react";
import { useState } from "react";

import InputContainer from "@/components/product-form/input-container";

export default function ProductShortDescription() {
  const [value, setValue] = useState<string>("");

  return (
    <InputContainer>
      <Textarea
        description="Optional short description of the product."
        id="product-short-description"
        label="Short Description"
        name="short-description"
        value={value}
        variant="underlined"
        onChange={(e) => setValue(e.target.value)}
      />
    </InputContainer>
  );
}
