import { Category } from "@/app/api/categories/types";
import { Product } from "@/app/api/products/types";
import { Image } from "@/app/api/images/types";

export type ProductFormData = {
  title: string;
  description: string;
  shortDescription: string;
  categories: Category[];
  images: File[] | Image[];
  price: number;
  discount?: number;
};

export type SubmissionState = "idle" | "submitting" | "success" | "error";

export type FormMode = "create" | "edit";

export type UseProductFormOptions = {
  mode: FormMode;
  initialData?: Product;
};
