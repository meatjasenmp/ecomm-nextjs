import { apiRequest, getInternalApiUrl } from "@/lib/api-utils";
import { Image } from "@/app/api/images/types";

export function useProductImages() {
  const uploadImages = async (images: File[]): Promise<Image[]> => {
    const formData = new FormData();
    images.forEach((image) => formData.append("images", image));
    return (await apiRequest(
      getInternalApiUrl("/images"),
      "POST",
      formData,
    )) as Promise<Image[]>;
  };

  const processImages = async (images: (File | Image)[]): Promise<Image[]> => {
    const filesToUpload = images.filter((img) => img instanceof File) as File[];
    if (filesToUpload.length === 0) return images as Image[];
    const uploadedImages = await uploadImages(filesToUpload);

    // Replace Files with their uploaded Images, maintaining order
    let uploadIndex = 0;
    return images.map((img) => {
      if (img instanceof File) return uploadedImages[uploadIndex++];
      return img;
    }) as Image[];
  };

  return { processImages };
}
