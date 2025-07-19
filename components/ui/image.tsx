import React from "react";
import { Image as Img } from "@heroui/react";
import NextImage from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  radius?: "none" | "sm" | "md" | "lg" | "full";
  loading?: "lazy" | "eager";
  fallbackSrc?: string;
  isBlurred?: boolean;
  isZoomed?: boolean;
  shadow?: "none" | "sm" | "md" | "lg";
}

export default function Image({
  src,
  alt,
  width,
  height,
  className,
  radius = "md",
  loading = "eager",
  fallbackSrc,
  isBlurred = false,
  isZoomed = false,
  shadow = "none",
}: ImageProps) {
  return (
    <Img
      alt={alt}
      as={NextImage}
      className={className}
      fallbackSrc={fallbackSrc}
      height={height}
      isBlurred={isBlurred}
      isZoomed={isZoomed}
      loading={loading}
      radius={radius}
      shadow={shadow}
      src={src}
      style={{ height: "auto", objectFit: "cover" }}
      width={width}
    />
  );
}
