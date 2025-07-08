import { z } from "zod";

export const CategorySchema = z.object({
  _id: z.string(),
  name: z.string(),
  description: z.string(),
});

export type Category = z.infer<typeof CategorySchema>;
