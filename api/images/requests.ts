import { Image } from "@/app/api/images/types";

export async function uploadImagesRequest(images: File[]) {
  const formData = new FormData();
  images.forEach((image) => formData.append("images", image));
  console.info("Form Data:", formData);
  const response = await fetch(`${process.env.API_URL}/upload-images`, {
    method: "POST",
    body: formData,
  });
  return (await response.json()) as Image[];
}
