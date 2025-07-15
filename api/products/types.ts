import { z } from "zod/v4";

import { Category } from "../categories/types";

// export const ProductSchema = z.object({
//   _id: z.string().optional(),
//   title: z.string().min(5),
//   description: z.string().min(10),
//   shortDescription: z.string(),
//   categories: z
//     .custom<Category>()
//     .array()
//     .min(1)
//     .transform((categories) => parseCategories(categories)),
//   images: z
//     .custom<Image | File>()
//     .array()
//     .refine((images) => refineImageFiles([...images])),
//   price: z.number().gt(0).min(0),
//   discount: z.number().min(0).optional(),
//   isPublished: z.boolean(),
// });

export const ProductSchema = z.object({
  _id: z.string().optional(),
  title: z.string().min(5, "Title must be at least 5 characters long"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long"),
  shortDescription: z.string().optional(),
  categories: z.custom<Category>().array().min(1),
  images: z.array(z.instanceof(File)).min(1, "At least one image is required"),
  price: z.number().min(1, "Price must be greater than 0"),
  discount: z.number().min(0, "Discount cannot be negative").optional(),
  isPublished: z.boolean().default(true),
});

export type Product = z.infer<typeof ProductSchema>;
