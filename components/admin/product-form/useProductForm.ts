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
import { apiRequest, getInternalApiUrl } from "@/lib/api-utils";
import { Image } from "@/app/api/images/types";
import { getDefaultValues } from "@/components/admin/product-form/form-utils";

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

    const hasNewImages = data.images.some((img) => img instanceof File);
    const processedImages = hasNewImages
      ? await handleImages(data.images as File[])
      : data.images;

    const formDataWithImages = {
      ...data,
      images: processedImages,
    };

    const result =
      mode === "edit" && initialData?._id
        ? await updateProductForm(initialData._id, formDataWithImages)
        : await createProductForm(formDataWithImages);

    if (result.success) {
      setSubmissionState("success");
      setSubmissionMessage(result.message);
      if (mode === "create") {
        methods.reset();
      }
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
