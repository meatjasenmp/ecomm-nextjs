"use client";

import { FormProvider } from "react-hook-form";

import { useProductForm } from "@/components/product-form/useProductForm";
import ProductFormHeader from "@/components/product-form/product-form-header";
import ProductTitle from "@/components/product-form/product-title";
import ProductDescription from "@/components/product-form/product-description";
import ProductShortDescription from "@/components/product-form/product-short-description";
import ProductCategories from "@/components/product-form/product-categories";
import ProductImages from "@/components/product-form/product-images";
import ProductPrice from "@/components/product-form/product-price";
import ProductDiscount from "@/components/product-form/product-discount";
import ProductFormFooter from "@/components/product-form/product-form-footer";
import FormSubmissionStatus from "@/components/product-form/form-submission-status";
import { CategoriesProps } from "@/app/admin/products/create/page";

export default function CreateProductForm({ categories }: CategoriesProps) {
  const { methods, onSubmit, submissionState, submissionMessage } =
    useProductForm();

  return (
    <FormProvider {...methods}>
      <section className="w-full max-w-4xl mx-auto p-10 border-1  border-gray-900/10 rounded">
        <ProductFormHeader header="Create Product" />
        <FormSubmissionStatus
          submissionMessage={submissionMessage}
          submissionState={submissionState}
        />
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <ProductTitle />
          <ProductDescription />
          <ProductShortDescription />
          <ProductCategories categories={categories} />
          <ProductImages />
          <ProductPrice />
          <ProductDiscount />
          <ProductFormFooter submissionState={submissionState} />
        </form>
      </section>
    </FormProvider>
  );
}
