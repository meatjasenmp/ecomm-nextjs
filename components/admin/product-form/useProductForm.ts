import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import {
  SubmissionState,
  UseProductFormOptions,
} from "@/components/admin/product-form/types";
import {
  createProductForm,
  updateProductForm,
} from "@/app/actions/product-form/actions";
import { getDefaultValues } from "@/components/admin/product-form/form-utils";
import { useProductImages } from "@/components/admin/product-form/product-images/useProductImages";
import { ProductFormSchema, ProductFormData } from "@/app/api/products/types";

export function useProductForm({ mode, initialData }: UseProductFormOptions) {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [submissionMessage, setSubmissionMessage] = useState<string>("");
  const { processImages } = useProductImages();
  const router = useRouter();

  const methods = useForm<ProductFormData>({
    mode: "onChange",
    resolver: zodResolver(ProductFormSchema),
    defaultValues: getDefaultValues(mode, initialData),
  });

  const setSuccess = (message: string) => {
    setSubmissionState("success");
    setSubmissionMessage(message);
  };

  const setError = (message: string) => {
    setSubmissionState("error");
    setSubmissionMessage(message);
  };

  const handleImageUploadError = () => {
    setError("Failed to upload images. Please try again.");
  };

  const handleActionResult = (result: any) => {
    if (result.success) return setSuccess(result.message);
    setError(result.message);
  };

  const processFormData = async (data: ProductFormData) => {
    return {
      ...data,
      images: await processImages(data.images || []),
    };
  };

  const createProduct = async (data: ProductFormData) => {
    let formData;
    try {
      formData = await processFormData(data);
    } catch {
      return handleImageUploadError();
    }

    const result = await createProductForm(formData);
    if (result.success) {
      setSuccess(result.message);
      router.push(`/admin/products/${result.data._id}/edit`);
    } else {
      setError(result.message);
    }
  };

  const updateProduct = async (data: ProductFormData) => {
    if (!initialData?._id) return setError("Product ID is required for update");

    let formData;
    try {
      formData = await processFormData(data);
    } catch {
      return handleImageUploadError();
    }

    const result = await updateProductForm(initialData!._id!, formData);
    handleActionResult(result);
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
