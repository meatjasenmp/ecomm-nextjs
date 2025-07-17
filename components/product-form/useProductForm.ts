import { useForm } from "react-hook-form";
import { useState } from "react";

import {
  ProductFormData,
  SubmissionState,
  UseProductFormOptions,
} from "@/components/product-form/types";
import { submitProductForm } from "@/app/actions/product-form/actions";
import { apiRequest, getInternalApiUrl } from "@/lib/api-utils";
import { Image } from "@/app/api/images/types";
import { getDefaultValues } from "@/components/product-form/form-utils";

export function useProductForm({ mode, initialData }: UseProductFormOptions) {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [submissionMessage, setSubmissionMessage] = useState<string>("");

  const methods = useForm<ProductFormData>({
    mode: "onChange",
    defaultValues: getDefaultValues(mode, initialData),
  });

  const handleImages = async (images: File[]): Promise<Image[]> => {
    const formData = new FormData();
    images.forEach((image) => formData.append("images", image));
    return (await apiRequest(
      getInternalApiUrl("/images"),
      "POST",
      formData,
    )) as Promise<Image[]>;
  };

  const onSubmit = async (data: ProductFormData) => {
    setSubmissionState("submitting");
    setSubmissionMessage("");

    const result = await submitProductForm({
      ...data,
      images: await handleImages(data.images as File[]),
    });

    if (result.success) {
      setSubmissionState("success");
      setSubmissionMessage(result.message);
      methods.reset();
    } else {
      setSubmissionState("error");
      setSubmissionMessage(result.message);
    }
  };

  return {
    methods,
    onSubmit,
    submissionState,
    submissionMessage,
  };
}
