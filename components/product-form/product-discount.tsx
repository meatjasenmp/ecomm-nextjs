import { Input } from "@heroui/react";

import InputContainer from "@/components/product-form/input-container";

export default function ProductDiscount() {
  return (
    <InputContainer>
      <Input
        id="product-discount"
        label="Product Discount"
        type="number"
        variant="underlined"
      />
    </InputContainer>
  );
}
