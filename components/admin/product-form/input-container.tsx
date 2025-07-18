import React from "react";

export default function InputContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mt-2 w-full">{children}</div>;
}
