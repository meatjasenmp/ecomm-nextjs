"use client";

import { Form } from "@heroui/form";
import { useActionState } from "react";

import { addProduct } from "@/actions/product-form/actions";
import ProductFormHeader from "@/components/product-form/product-form-header";
import ProductTitle from "@/components/product-form/product-title";
import ProductDescription from "@/components/product-form/product-description";
import ProductShortDescription from "@/components/product-form/product-short-description";
import ProductCategories from "@/components/product-form/product-categories";
import ProductImages from "@/components/product-form/product-images";
import ProductPrice from "@/components/product-form/product-price";
import ProductDiscount from "@/components/product-form/product-discount";
import ProductFormFooter from "@/components/product-form/product-form-footer";
import { CategoriesProps } from "@/app/admin/products/create/page";

export const initialFormState = {
  message: "",
};

export default function CreateProductForm({ categories }: CategoriesProps) {
  const [_, formAction] = useActionState(addProduct, initialFormState);

  return (
    <section className="w-full max-w-4xl mx-auto p-10 border-1  border-gray-900/10 rounded">
      <ProductFormHeader header="Create Product" />
      <Form action={formAction}>
        <ProductTitle />
        <ProductDescription />
        <ProductShortDescription />
        <ProductCategories categories={categories} />
        <ProductImages />
        <ProductPrice />
        <ProductDiscount />
        <ProductFormFooter />
      </Form>
    </section>
  );
}
