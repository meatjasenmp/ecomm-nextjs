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

  const setError = (message: string) => {
    setSubmissionState("error");
    setSubmissionMessage(message);
  };

  const handleImageUploadError = (error: unknown) => {
    setError(
      error instanceof Error
        ? error.message
        : "Failed to upload images. Please try again.",
    );
  };

  const setSuccess = (message: string, shouldReset: boolean) => {
    setSubmissionState("success");
    setSubmissionMessage(message);
    if (shouldReset) methods.reset();
  };

  const handleActionResult = (result: any, shouldReset: boolean) => {
    if (result.success) return setSuccess(result.message, shouldReset);
    setError(result.message);
  };

  const processFormData = async (data: ProductFormData) => {
    return {
      ...data,
      images: await processImages(data.images),
    };
  };

  const createProduct = async (data: ProductFormData) => {
    try {
      const formData = await processFormData(data);
      const result = await createProductForm(formData);
      handleActionResult(result, true);
    } catch (error) {
      handleImageUploadError(error);
    }
  };

  const updateProduct = async (data: ProductFormData) => {
    if (!initialData?._id) return setError("Product ID is required for update");

    try {
      const formData = await processFormData(data);
      const result = await updateProductForm(initialData!._id!, formData);
      handleActionResult(result, false);
    } catch (error) {
      handleImageUploadError(error);
    }
  };

  const onSubmit = async (data: ProductFormData) => {
    setSubmissionState("submitting");
    setSubmissionMessage("");
    if (mode === "edit") return updateProduct(data);
    await createProduct(data);
  };

  return {
    methods,
    onSubmit,
    submissionState,
    submissionMessage,
  };
}
