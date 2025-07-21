import { z } from "zod/v4";

import { CategorySchema } from "../categories/types";
import { ImageSchema } from "../images/types";

const BaseProductSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters long"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long"),
  shortDescription: z
    .string()
    .min(10, "Short description must be at least 10 characters")
    .max(300, "Short description must be 25 characters or less"),
  categories: z
    .array(CategorySchema)
    .min(1, "At least one category is required"),
  price: z.number().min(1, "Price must be greater than 0"),
  discount: z.number().min(0, "Discount cannot be negative").optional(),
});

export const ProductSchema = BaseProductSchema.extend({
  _id: z.string(),
  images: z.array(ImageSchema).default([]),
  isPublished: z.boolean().default(true),
});

export const ProductFormSchema = BaseProductSchema.extend({
  _id: z.string().optional(),
  images: z
    .union([z.array(z.instanceof(File)), z.array(ImageSchema)])
    .optional(),
  isPublished: z.boolean(),
});

export type Product = z.infer<typeof ProductSchema>;
export type ProductFormData = z.infer<typeof ProductFormSchema>;
