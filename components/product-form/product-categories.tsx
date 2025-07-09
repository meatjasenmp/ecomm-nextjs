"use client";

import { useState } from "react";
import { Selection, Select, SelectItem } from "@heroui/react";
import InputContainer from "@/components/product-form/input-container";
import { CategoriesProps } from "@/app/admin/products/create/page";

export default function ProductCategories({ categories }: CategoriesProps) {
  const [selected, setSelected] = useState<Selection>(new Set([]));

  return (
    <InputContainer>
      <Select
        placeholder="Select categories"
        selectionMode="multiple"
        variant="underlined"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        {categories.map((cat) => (
          <SelectItem key={cat._id}>{cat.name}</SelectItem>
        ))}
      </Select>
    </InputContainer>
  );
}
