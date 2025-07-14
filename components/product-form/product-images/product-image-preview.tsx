import { Image as Img } from "@heroui/image";
import { CloseIcon } from "@heroui/shared-icons";
import React from "react";

import Button from "@/components/ui/button";

export default function ProductImagePreview({
  src,
  onRemove,
}: {
  src: string;
  onRemove: () => void;
}) {
  return (
    <div className="h-40">
      <Img alt="Preview" className="w-full rounded-lg h-full" src={src} />
      <div className="absolute top-2 right-2 z-10">
        <Button iconOnly={true} variant="solid" onClick={onRemove}>
          <CloseIcon />
        </Button>
      </div>
    </div>
  );
}
