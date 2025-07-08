import { Textarea } from "@heroui/input";
import InputContainer from "@/components/product-form/input-container";

export default function ProductShortDescription() {
  return (
    <InputContainer>
      <Textarea
        name="short-description"
        label="Short Description"
        variant="underlined"
      />
    </InputContainer>
  );
}
