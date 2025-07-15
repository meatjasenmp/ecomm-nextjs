import { Image } from "@/api/images/types";

export async function uploadImagesRequest(images: File[]) {
  const formData = new FormData();
  images.forEach((image) => formData.set("images", image));
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/upload-images`,
    {
      method: "POST",
      body: formData,
    },
  );
  return (await response.json()) as Image[];
}
