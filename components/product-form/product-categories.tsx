"use client";

import { useMemo, useState } from "react";
import { Selection, Select, SelectItem } from "@heroui/react";
import InputContainer from "@/components/product-form/input-container";
import { CategoriesProps } from "@/app/admin/products/create/page";

// TODO: Only getting the keys here, will have to convert to the full category object in api requests
export default function ProductCategories({ categories }: CategoriesProps) {
  const [selected, setSelected] = useState<Selection>(new Set([]));
  const [touched, setTouched] = useState<boolean>(false);
  // @ts-ignore
  const isValid = useMemo(() => selected.size > 0, [selected]);

  return (
    <InputContainer>
      <Select
        placeholder="Select categories"
        description="Select one or more categories for the product."
        errorMessage={
          isValid || !touched ? undefined : "Select at least one category."
        }
        isInvalid={!(isValid || !touched)}
        selectionMode="multiple"
        variant="underlined"
        selectedKeys={selected}
        onSelectionChange={setSelected}
        onClose={() => setTouched(true)}
      >
        {categories.map((cat) => (
          <SelectItem key={cat._id}>{cat.name}</SelectItem>
        ))}
      </Select>
    </InputContainer>
  );
}
