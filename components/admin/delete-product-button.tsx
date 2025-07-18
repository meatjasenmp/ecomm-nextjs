"use client";

import React, { useState } from "react";

import { apiRequest, getInternalApiUrl } from "@/lib/api-utils";
import Button from "@/components/ui/button";

type DeleteProductButtonProps = {
  productId: string;
  onSuccess?: () => void;
  variant?: "solid" | "light" | "flat" | "ghost";
  children?: React.ReactNode;
};

export default function DeleteProductButton({
  productId,
  onSuccess,
  variant = "solid",
  children = "Delete",
}: DeleteProductButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this product?")) {
      return;
    }

    setIsDeleting(true);

    try {
      await apiRequest(getInternalApiUrl(`/products/${productId}`), "DELETE");

      if (onSuccess) {
        onSuccess();
      } else {
        // Default behavior: reload the page
        window.location.reload();
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Error deleting product");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Button disabled={isDeleting} variant={variant} onClick={handleDelete}>
      {isDeleting ? "Deleting..." : children}
    </Button>
  );
}
