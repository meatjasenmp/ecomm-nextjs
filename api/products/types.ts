import { z } from "zod/v4";

import { CategorySchema } from "../categories/types";
import { ImageSchema } from "../images/types";

const BaseProductSchema = z.object({
  _id: z.string().optional(),
  title: z.string().min(5, "Title must be at least 5 characters long"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long"),
  shortDescription: z.string().optional(),
  categories: z
    .array(CategorySchema)
    .min(1, "At least one category is required"),
  price: z.number().min(1, "Price must be greater than 0"),
  discount: z.number().min(0, "Discount cannot be negative").optional(),
  isPublished: z.boolean().default(true),
});

export const ProductCreateSchema = BaseProductSchema.extend({
  images: z.array(z.instanceof(File)).min(1, "At least one image is required"),
});

export const ProductSchema = BaseProductSchema.extend({
  images: z.array(ImageSchema).min(1, "At least one image is required"),
});

export type Product = z.infer<typeof ProductSchema>;
export type ProductCreate = z.infer<typeof ProductCreateSchema>;
