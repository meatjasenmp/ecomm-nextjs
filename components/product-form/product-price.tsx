import { Input } from "@heroui/react";

import InputContainer from "@/components/product-form/input-container";

export default function ProductPrice() {
  return (
    <InputContainer>
      <Input
        id="product-price"
        label="Product Price"
        type="number"
        variant="underlined"
      />
    </InputContainer>
  );
}
