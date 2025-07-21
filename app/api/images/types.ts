import { z } from "zod/v4";

export const ImageSchema = z.object({
  name: z.string().min(1, "Image name is required"),
  key: z.string().min(1, "Image key is required"),
  url: z.url("Invalid URL format"),
  _id: z.string().min(1, "Image ID is required"),
  createdAt: z.string(),
});

export type Image = z.infer<typeof ImageSchema>;
