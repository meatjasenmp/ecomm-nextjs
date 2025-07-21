import { z } from "zod/v4";

export const CategorySchema = z.object({
  _id: z.string().min(1, "Category ID is required"),
  name: z.string().min(1, "Category name is required"),
  description: z.string().min(1, "Category description is required"),
});

export type Category = z.infer<typeof CategorySchema>;
