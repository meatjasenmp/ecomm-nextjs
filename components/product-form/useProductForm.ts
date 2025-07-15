import { useForm } from "react-hook-form";

import { ProductFormData } from "@/components/product-form/types";
import { submitProductForm } from "@/app/actions/product-form/actions";
import { getInternalApiUrl } from "@/lib/api-utils";
import { Image } from "@/app/api/images/types";

export function useProductForm() {
  const methods = useForm<ProductFormData>({
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
      shortDescription: "",
      categories: [],
      images: [],
      price: 0,
      discount: 0,
    },
  });

  const handleFormErrors = (result: any) => {
    if (!result.success && "errors" in result && result.errors) {
      result.errors.forEach((error: { path: string[]; message: string }) => {
        const fieldName = error.path[0] as keyof ProductFormData;
        methods.setError(fieldName, {
          type: "server",
          message: error.message,
        });
      });
    }
  };

  const handleImages = async (images: File[]): Promise<Image[]> => {
    const formData = new FormData();
    images.forEach((image) => formData.append("images", image));
    const uploadResponse = await fetch(getInternalApiUrl("/images"), {
      method: "POST",
      body: formData,
    });

    if (!uploadResponse.ok) {
      throw new Error(`Failed to upload images: ${uploadResponse.status}`);
    }

    return (await uploadResponse.json()) as Promise<Image[]>;
  };

  // TODO: Need to figure out why I'm not receiving server errors
  const onSubmit = async (data: ProductFormData) => {
    const result = await submitProductForm({
      ...data,
      images: await handleImages(data.images as File[]),
    });

    handleFormErrors(result);
  };

  return {
    methods,
    onSubmit,
  };
}
