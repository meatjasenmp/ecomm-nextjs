import { z } from "zod/v4";

import { parseCategories } from "../categories/utilities";
import { Category } from "../categories/types";
import { Image } from "../images/types";
import { refineImageFiles } from "../images/utilities";

export const ProductSchema = z.object({
  _id: z.string().optional(),
  title: z.string().min(5),
  description: z.string().min(10),
  shortDescription: z.string(),
  categories: z
    .custom<Category>()
    .array()
    .min(1)
    .transform((categories) => parseCategories(categories)),
  images: z
    .custom<Image | File>()
    .array()
    .refine((images) => refineImageFiles([...images])),
  price: z.number().gt(0).min(0),
  discount: z.number().min(0).optional(),
  isPublished: z.boolean(),
});

export type Product = z.infer<typeof ProductSchema>;
