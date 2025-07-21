import { FormMode } from "@/components/admin/product-form/types";
import { Product, ProductFormData } from "@/app/api/products/types";

export function getDefaultValues(
  mode: FormMode,
  initialData?: Product,
): ProductFormData {
  if (mode === "edit" && initialData) {
    return {
      _id: initialData._id,
      title: initialData.title,
      description: initialData.description,
      shortDescription: initialData.shortDescription,
      categories: initialData.categories,
      images: initialData.images,
      price: initialData.price,
      discount: initialData.discount || 0,
      isPublished: initialData.isPublished,
    };
  }

  return {
    title: "",
    description: "",
    shortDescription: "",
    categories: [],
    images: [],
    price: 0,
    discount: 0,
    isPublished: true,
  };
}
