import { Input } from "@heroui/input";
import InputContainer from "@/components/product-form/input-container";
import { InputValidation } from "@/components/product-form/types";

export default function ProductPrice({ isInvalid }: InputValidation) {
  return (
    <InputContainer>
      <Input
        label="Product Price"
        type="number"
        variant="underlined"
        isInvalid={isInvalid}
      />
    </InputContainer>
  );
}
