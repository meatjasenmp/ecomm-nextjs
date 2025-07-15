"use client";

import { Selection, Select, SelectItem } from "@heroui/react";
import { useFormContext, Controller } from "react-hook-form";

import InputContainer from "@/components/product-form/input-container";
import { CategoriesProps } from "@/app/admin/products/create/page";
import ErrorDisplay from "@/components/product-form/error-display";
import { Category } from "@/api/categories/types";

export default function ProductCategories({ categories }: CategoriesProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const error = errors.categories?.message as string;

  return (
    <InputContainer>
      <Controller
        control={control}
        name="categories"
        render={({ field: { onChange, value } }) => {
          const selectedKeys = new Set<string>(
            value?.map((cat: Category) => cat._id) || [],
          );

          const handleSelectionChange = (keys: Selection) => {
            const selectedCategories = categories.filter((cat) =>
              Array.from(keys).includes(cat._id),
            );
            onChange(selectedCategories);
          };

          return (
            <Select
              isRequired
              description="Select one or more categories for the product."
              errorMessage={() => <ErrorDisplay error={error || ""} />}
              id="product-categories"
              isInvalid={!!error}
              placeholder="Select categories"
              selectedKeys={selectedKeys}
              selectionMode="multiple"
              variant="underlined"
              onSelectionChange={handleSelectionChange}
            >
              {categories.map((cat) => (
                <SelectItem key={cat._id}>{cat.name}</SelectItem>
              ))}
            </Select>
          );
        }}
        rules={{
          required: "At least one category is required",
          validate: (value) => {
            return value || value.length !== 0;
          },
        }}
      />
    </InputContainer>
  );
}
