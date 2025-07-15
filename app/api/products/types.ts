import { z } from "zod/v4";

import { CategorySchema } from "../categories/types";
import { ImageSchema } from "../images/types";

export const ProductSchema = z.object({
  _id: z.string().optional(),
  title: z.string().min(5, "Title must be at least 5 characters long"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long"),
  shortDescription: z
    .string()
    .min(10, "Short description must be at least 10 characters")
    .max(25, "Short description must be 25 characters or less"),
  categories: z
    .array(CategorySchema)
    .min(1, "At least one category is required"),
  images: z
    .union([z.array(z.instanceof(File)), z.array(ImageSchema)])
    .refine((images) => images.length > 0, "At least one image is required"),
  price: z.number().min(1, "Price must be greater than 0"),
  discount: z.number().min(0, "Discount cannot be negative").optional(),
  isPublished: z.boolean().default(true),
});

export type Product = z.infer<typeof ProductSchema>;
