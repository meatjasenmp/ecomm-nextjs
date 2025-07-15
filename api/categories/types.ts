import { z } from "zod/v4";

export const CategorySchema = z.object({
  _id: z.string(),
  name: z.string(),
  description: z.string(),
});

export type Category = z.infer<typeof CategorySchema>;
