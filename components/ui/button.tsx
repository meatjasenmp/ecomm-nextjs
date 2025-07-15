import React from "react";
import { Button as Btn } from "@heroui/react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  variant?: "solid" | "light" | "flat" | "ghost";
  iconOnly?: boolean;
}

export default function Button({
  type,
  children,
  disabled,
  onClick,
  iconOnly,
  variant,
}: ButtonProps) {
  return (
    <Btn
      color="default"
      isDisabled={disabled}
      isIconOnly={iconOnly}
      type={type || "button"}
      variant={variant || "ghost"}
      onPress={onClick}
    >
      {children}
    </Btn>
  );
}
