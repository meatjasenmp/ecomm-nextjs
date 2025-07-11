import { Input } from "@heroui/react";
import InputContainer from "@/components/product-form/input-container";

export default function ProductPrice() {
  return (
    <InputContainer>
      <Input label="Product Price" type="number" variant="underlined" />
    </InputContainer>
  );
}
