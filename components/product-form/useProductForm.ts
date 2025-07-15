import { useForm } from "react-hook-form";

import { ProductFormData } from "@/components/product-form/types";
import { submitProductForm } from "@/actions/product-form/actions";

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

  const onSubmit = async (data: ProductFormData) => {
    const result = await submitProductForm(data);
    if (!result.success) {
      if ("errors" in result && result.errors) {
        result.errors.forEach((error) => {
          const fieldName = error.path[0] as keyof ProductFormData;
          methods.setError(fieldName, {
            type: "server",
            message: error.message,
          });
        });
      }
    }
  };

  return {
    methods,
    onSubmit,
  };
}
