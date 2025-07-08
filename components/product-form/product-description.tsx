import { Textarea } from "@heroui/input";
import InputContainer from "@/components/product-form/input-container";
import { InputValidation } from "@/components/product-form/types";

export default function ProductDescription({ isInvalid }: InputValidation) {
  return (
    <InputContainer>
      <Textarea
        name="description"
        label="Description"
        variant="underlined"
        isInvalid={isInvalid}
      />
    </InputContainer>
  );
}
