import { Image } from "@/api/images/types";

export async function uploadImagesRequest(images: File[]) {
  const formData = new FormData();
  images.forEach((image) => formData.append("images", image));
  const response = await fetch("/api/upload-images", {
    method: "POST",
    body: formData,
  });
  return (await response.json()) as Image[];
}
