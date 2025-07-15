import { Category } from "@/app/api/categories/types";

export type ProductFormData = {
  title: string;
  description: string;
  shortDescription: string;
  categories: Category[];
  images: File[];
  price: number;
  discount?: number;
};
