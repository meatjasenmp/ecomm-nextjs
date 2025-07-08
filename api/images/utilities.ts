import { uploadImagesRequest } from "./requests";
import { Image } from "./types";

export function refineImageFiles(images: (Image | File)[]): boolean {
  return images.every((image) => image instanceof File && image.size > 0);
}

export async function getProductImages(images: File[]): Promise<Image[]> {
  try {
    return await uploadImagesRequest(images);
  } catch (error) {
    console.error("Error uploading images:", error);
    return [];
  }
}
