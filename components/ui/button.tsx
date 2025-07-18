"use client";

import React from "react";
import { Button as Btn } from "@heroui/react";
import { useRouter } from "next/navigation";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  variant?: "solid" | "light" | "flat" | "ghost";
  iconOnly?: boolean;
  href?: string;
}

export default function Button({
  type,
  children,
  disabled,
  onClick,
  iconOnly,
  variant,
  href,
}: ButtonProps) {
  const router = useRouter();

  const handlePress = () => {
    if (href) return router.push(href);
    if (onClick) onClick();
  };

  return (
    <Btn
      color="default"
      isDisabled={disabled}
      isIconOnly={iconOnly}
      type={type || "button"}
      variant={variant || "ghost"}
      onPress={handlePress}
    >
      {children}
    </Btn>
  );
}
