"use client";

import { Form } from "@heroui/form";
import { useActionState } from "react";
import { addProduct } from "@/actions/product-form/actions";
import ErrorDisplay, {
  hasError,
} from "@/components/product-form/error-display";
import ProductFormHeader from "@/components/product-form/product-form-header";
import ProductTitle from "@/components/product-form/product-title";
import ProductDescription from "@/components/product-form/product-description";
import ProductShortDescription from "@/components/product-form/product-short-description";
import ProductCategories from "@/components/product-form/product-categories";
import ProductImages from "@/components/product-form/product-images";
import ProductPrice from "@/components/product-form/product-price";
import ProductDiscount from "@/components/product-form/product-discount";
import ProductFormFooter from "@/components/product-form/product-form-footer";

const initialState = {
  message: "",
  error: undefined,
};

export default function CreateProductForm() {
  const [state, formAction] = useActionState(addProduct, initialState);
  return (
    <section className="w-full max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <ProductFormHeader header="Create Product" />
      <Form action={formAction}>
        <ProductTitle />
        <ProductDescription />
        <ProductShortDescription />
        <ProductCategories />
        <ProductImages />
        <ProductPrice />
        <ProductDiscount />
        <ProductFormFooter state={state} />
      </Form>
    </section>
  );
}
