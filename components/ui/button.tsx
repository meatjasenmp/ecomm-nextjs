import React from "react";
import { Button as Btn } from "@heroui/react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  type,
  children,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <Btn
      color="default"
      disabled={disabled}
      type={type || "button"}
      variant="ghost"
      onPress={onClick}
    >
      {children}
    </Btn>
  );
}
