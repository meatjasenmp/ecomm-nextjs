import { Product } from "@/app/api/products/types";

export type SubmissionState = "idle" | "submitting" | "success" | "error";

export type FormMode = "create" | "edit";

export type UseProductFormOptions = {
  mode: FormMode;
  initialData?: Product;
};
