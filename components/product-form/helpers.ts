import { ErrorProperties } from "@/actions/product-form/types";

export function validateInput(
  errors: ErrorProperties | undefined,
  fieldName: string,
): boolean {
  return errors ? Object.keys(errors).includes(fieldName) : false;
}
