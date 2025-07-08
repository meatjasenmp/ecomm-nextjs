import ProductImage from "@/components/product-form/product-images/product-image";
import InputContainer from "@/components/product-form/input-container";

export default function ProductImages() {
  return (
    <InputContainer>
      <label htmlFor="productImage" className="text-small text-foreground-500">
        {" "}
        Product Images{" "}
      </label>
      <div className="flex flex-wrap gap-4">
        <ProductImage />
        <ProductImage />
        <ProductImage />
      </div>
    </InputContainer>
  );
}
