"use client";

import { Form } from "@heroui/form";
import { validateInput } from "@/components/product-form/helpers";
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

export const initialFormState = {
  message: "",
  error: undefined,
};

export default function CreateProductForm() {
  const [state, formAction] = useActionState(addProduct, initialFormState);

  return (
    <section className="w-full max-w-4xl mx-auto p-10 border-1  border-gray-900/10 rounded">
      <ProductFormHeader header="Create Product" />
      <Form action={formAction}>
        <ProductTitle isInvalid={validateInput(state?.error, "title")} />
        <ProductDescription
          isInvalid={validateInput(state?.error, "description")}
        />
        <ProductShortDescription />
        <ProductCategories
          isInvalid={validateInput(state?.error, "categories")}
        />
        <ProductImages isInvalid={validateInput(state?.error, "images")} />
        <ProductPrice isInvalid={validateInput(state?.error, "price")} />
        <ProductDiscount />
        <ProductFormFooter state={state} />
      </Form>
    </section>
  );
}
