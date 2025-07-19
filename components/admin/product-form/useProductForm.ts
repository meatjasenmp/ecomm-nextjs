import { useForm } from "react-hook-form";
import { useState } from "react";

import {
  ProductFormData,
  SubmissionState,
  UseProductFormOptions,
} from "@/components/admin/product-form/types";
import {
  createProductForm,
  updateProductForm,
} from "@/app/actions/product-form/actions";
import { getDefaultValues } from "@/components/admin/product-form/form-utils";
import { useProductImages } from "@/components/admin/product-form/product-images/useProductImages";

export function useProductForm({ mode, initialData }: UseProductFormOptions) {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [submissionMessage, setSubmissionMessage] = useState<string>("");
  const { processImages } = useProductImages();

  const methods = useForm<ProductFormData>({
    mode: "onChange",
    defaultValues: getDefaultValues(mode, initialData),
  });

  const handleSubmissionError = (error: unknown) => {
    setSubmissionState("error");
    setSubmissionMessage(
      error instanceof Error
        ? error.message
        : "An unexpected error occurred. Please try again.",
    );
  };

  const handleSubmissionSuccess = (message: string, shouldReset: boolean) => {
    setSubmissionState("success");
    setSubmissionMessage(message);
    if (shouldReset) methods.reset();
  };

  const createProduct = async (data: ProductFormData) => {
    try {
      const formData = {
        ...data,
        images: await processImages(data.images),
      };

      const result = await createProductForm(formData);
      if (result.success) {
        handleSubmissionSuccess(result.message, true);
      } else {
        setSubmissionState("error");
        setSubmissionMessage(result.message);
      }
    } catch (error) {
      handleSubmissionError(error); // Only catches image upload errors from processImages
    }
  };

  const updateProduct = async (data: ProductFormData) => {
    if (!initialData?._id) {
      setSubmissionState("error");
      setSubmissionMessage("Product ID is required for update");
      return;
    }

    try {
      const formData = {
        ...data,
        images: await processImages(data.images),
      };

      const result = await updateProductForm(initialData._id, formData);
      if (result.success) {
        handleSubmissionSuccess(result.message, false);
      } else {
        setSubmissionState("error");
        setSubmissionMessage(result.message);
      }
    } catch (error) {
      handleSubmissionError(error); // Only catches image upload errors from processImages
    }
  };

  const onSubmit = async (data: ProductFormData) => {
    setSubmissionState("submitting");
    setSubmissionMessage("");
    if (mode === "edit") return await updateProduct(data);
    await createProduct(data);
  };

  return {
    methods,
    onSubmit,
    submissionState,
    submissionMessage,
  };
}
