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

  const onSubmit = async (data: ProductFormData) => {
    setSubmissionState("submitting");
    setSubmissionMessage("");

    const formDataWithImages = {
      ...data,
      images: await processImages(data.images),
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
