import { z } from "zod/v4";

export const ImageSchema = z.object({
  name: z.string(),
  key: z.string(),
  url: z.string(),
  isPrimary: z.boolean(),
  _id: z.string(),
  createdAt: z.string(),
});

export type Image = z.infer<typeof ImageSchema>;
