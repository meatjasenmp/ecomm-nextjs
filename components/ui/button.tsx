import React from "react";
import { Button as Btn } from "@heroui/react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  disabled?: boolean;
}

export default function Button({ type, children, disabled }: ButtonProps) {
  return (
    <Btn
      color="default"
      disabled={disabled}
      type={type || "button"}
      variant="ghost"
    >
      {children}
    </Btn>
  );
}
