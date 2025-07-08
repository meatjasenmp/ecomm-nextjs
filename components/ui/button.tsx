import React from "react";
import { Button as Btn } from "@heroui/button";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}

export default function Button({ type, children }: ButtonProps) {
  return (
    <Btn type={type || "button"} color="default" variant="ghost">
      {children}
    </Btn>
  );
}
