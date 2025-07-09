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
      type={type || "button"}
      color="default"
      variant="ghost"
      disabled={disabled}
    >
      {children}
    </Btn>
  );
}
