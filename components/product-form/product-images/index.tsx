import ProductImage from "@/components/product-form/product-images/product-image";
import InputContainer from "@/components/product-form/input-container";
import { InputValidation } from "@/components/product-form/types";

export default function ProductImages({ isInvalid }: InputValidation) {
  return (
    <InputContainer>
      <label
        htmlFor="productImage"
        className={`text-small ${isInvalid ? "text-red-600" : "text-foreground-500"}`}
      >
        Product Images
      </label>
      <div className="flex flex-wrap gap-4">
        <ProductImage />
        <ProductImage />
        <ProductImage />
      </div>
    </InputContainer>
  );
}
