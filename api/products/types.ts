import { z } from "zod/v4";
import { parseCategories } from "../categories/utilities";
import { Category } from "../categories/types";
import { Image } from "../images/types";
import { refineImageFiles } from "../images/utilities";

export const ProductSchema = z.object({
  _id: z.string().optional(),
  title: z.string().min(5, "A title is required"),
  description: z.string().min(10, "A description is required"),
  shortDescription: z.string().min(5, "A short description is required"),
  categories: z
    .custom<Category>()
    .array()
    .transform((categories) => parseCategories(categories)),
  images: z
    .custom<Image | File>()
    .array()
    .refine((images) => refineImageFiles([...images]), {
      message: "At least one image is required",
    }),
  price: z
    .number()
    .gt(0, "A Product price is required")
    .min(0, "Price must be a positive number"),
  discount: z.number().min(0, "Price must be a positive number").optional(),
  isPublished: z.boolean(),
});

export type Product = z.infer<typeof ProductSchema>;
