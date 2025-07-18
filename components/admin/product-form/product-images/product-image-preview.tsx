import { CloseIcon } from "@heroui/shared-icons";
import React from "react";

import Image from "@/components/ui/image";
import Button from "@/components/ui/button";

export default function ProductImagePreview({
  src,
  onRemove,
}: {
  src: string;
  onRemove: () => void;
}) {
  return (
    <div className="w-full">
      <Image alt="Preview" height={0} src={src} width={266} />
      <div className="absolute top-2 right-2 z-10">
        <Button iconOnly={true} variant="solid" onClick={onRemove}>
          <CloseIcon />
        </Button>
      </div>
    </div>
  );
}
