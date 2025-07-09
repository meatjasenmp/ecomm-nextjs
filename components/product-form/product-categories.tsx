"use client";

import { Select, SelectItem } from "@heroui/select";
import InputContainer from "@/components/product-form/input-container";
import { CategoriesProps } from "@/app/admin/products/create/page";

export default function ProductCategories({ categories }: CategoriesProps) {
  return (
    <InputContainer>
      <Select
        placeholder="Select categories"
        selectionMode="multiple"
        variant="underlined"
      >
        {categories.map((cat) => (
          <SelectItem key={cat._id}>{cat.name}</SelectItem>
        ))}
      </Select>
    </InputContainer>
  );
}
