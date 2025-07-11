import { Input } from "@heroui/react";
import React, { useState } from "react";

type ProductImageProps = {
  setImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setTouched: React.Dispatch<React.SetStateAction<boolean>>;
  isValid: boolean;
};

function ProductImagePreview({ src }: { src: string }) {
  return (
    <div>
      <img src={src} alt="Preview" />
    </div>
  );
}

export default function ProductImage({
  setImage,
  setTouched,
  isValid,
}: ProductImageProps) {
  const [imageUrl, setImageUrl] = useState<string>("");
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setImageUrl(URL.createObjectURL(file));
    setImage(event);
  };

  if (imageUrl.length > 0) {
    return <ProductImagePreview src={imageUrl} />;
  }

  return (
    <div
      className={`mt-2 flex justify-center rounded-lg border border-dashed ${isValid ? "border-red-500" : "border-gray-900/25"} px-6 grow  py-10`}
    >
      <div className="text-center">
        <svg
          className="mx-auto size-12 text-gray-300"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            fillRule="evenodd"
            d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
            clipRule="evenodd"
          />
        </svg>
        <div className="mt-4 flex text-sm/6 text-gray-600">
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
          >
            <span>Upload a file</span>
            <Input
              id="file-upload"
              name="file-upload"
              type="file"
              className="sr-only"
              accept="image/png, image/jpeg, image/gif"
              onChange={handleImageChange}
              isRequired
              onBlur={() => setTouched(true)}
            />
          </label>
          <p className="pl-1">or drag and drop</p>
        </div>
        <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
      </div>
    </div>
  );
}
