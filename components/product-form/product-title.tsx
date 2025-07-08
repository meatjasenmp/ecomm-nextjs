import { Input } from "@heroui/input";
import InputContainer from "@/components/product-form/input-container";
import { InputValidation } from "@/components/product-form/types";

export default function ProductTitle({ isInvalid }: InputValidation) {
  return (
    <InputContainer>
      <Input
        className="w-full"
        label="Product Title"
        type="text"
        variant="underlined"
        isInvalid={isInvalid}
      />
    </InputContainer>
  );
}
