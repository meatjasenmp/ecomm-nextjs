"use client";

import { Select, SelectItem } from "@heroui/select";
import InputContainer from "@/components/product-form/input-container";

const categories = [
  { key: "nike", label: "Nike" },
  { key: "adidas", label: "Adidas" },
  { key: "puma", label: "Puma" },
  { key: "reebok", label: "Reebok" },
];

export default function ProductCategories() {
  return (
    <InputContainer>
      <Select
        placeholder="Select categories"
        selectionMode="multiple"
        variant="underlined"
      >
        {categories.map((cat) => (
          <SelectItem key={cat.key}>{cat.label}</SelectItem>
        ))}
      </Select>
    </InputContainer>
  );
}
