"use client";

import { Select, SelectItem } from "@heroui/select";
import InputContainer from "@/components/product-form/input-container";
import { InputValidation } from "@/components/product-form/types";

const categories = [
  { key: "nike", label: "Nike" },
  { key: "adidas", label: "Adidas" },
  { key: "puma", label: "Puma" },
  { key: "reebok", label: "Reebok" },
];

export default function ProductCategories({ isInvalid }: InputValidation) {
  return (
    <InputContainer>
      <Select
        placeholder="Select categories"
        selectionMode="multiple"
        variant="underlined"
        isInvalid={isInvalid}
      >
        {categories.map((cat) => (
          <SelectItem key={cat.key}>{cat.label}</SelectItem>
        ))}
      </Select>
    </InputContainer>
  );
}
