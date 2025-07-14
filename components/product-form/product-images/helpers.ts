export type ImageValidationError = {
  message: string;
  type: "size" | "dimensions" | "format";
};

export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const MAX_WIDTH = 2000;
export const MAX_HEIGHT = 2000;
export const MIN_WIDTH = 100;
export const MIN_HEIGHT = 100;
export const ALLOWED_FILE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
];

export const validateImage = (
  file: File,
): Promise<ImageValidationError | null> => {
  return new Promise((resolve) => {
    // Check file type
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      resolve({
        message: "Only JPG, PNG, and GIF files are allowed",
        type: "format",
      });

      return;
    }

    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      resolve({
        message: `File size must be less than ${MAX_FILE_SIZE / 1024 / 1024}MB`,
        type: "size",
      });

      return;
    }

    // Check image dimensions
    const img = new Image() as HTMLImageElement;

    img.onload = () => {
      const { width, height } = img;
      if (width > MAX_WIDTH || height > MAX_HEIGHT) {
        resolve({
          message: `Image dimensions must be less than ${MAX_WIDTH}x${MAX_HEIGHT}px`,
          type: "dimensions",
        });
        return;
      }

      if (width < MIN_WIDTH || height < MIN_HEIGHT) {
        resolve({
          message: `Image dimensions must be at least ${MIN_WIDTH}x${MIN_HEIGHT}px`,
          type: "dimensions",
        });
        return;
      }
      resolve(null);
    };

    img.onerror = () => {
      resolve({
        message: "Invalid image format",
        type: "format",
      });
    };

    img.src = URL.createObjectURL(file);
  });
};
