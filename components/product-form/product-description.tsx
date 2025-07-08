import { Textarea } from "@heroui/input";
import InputContainer from "@/components/product-form/input-container";

export default function ProductDescription() {
  return (
    <InputContainer>
      <Textarea name="description" label="Description" variant="underlined" />
    </InputContainer>
  );
}
