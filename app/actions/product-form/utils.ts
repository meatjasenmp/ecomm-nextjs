import { Category } from "@/app/api/categories/types";
import { Image } from "@/app/api/images/types";

export const getCategoryIds = (categories: Category[]): string[] => {
  return categories.map((cat) => cat._id).filter(Boolean) as string[];
};

export const getImageIds = (images: Image[]): string[] => {
  if (!images || images.length === 0) return [];
  return images.map((img) => img._id).filter(Boolean) as string[];
};
