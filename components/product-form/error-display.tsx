import { ErrorProperties } from "@/actions/product-form/types";
import { v4 as uuidv4 } from "uuid";

export function hasError(
  errors: ErrorProperties | undefined,
  fieldName: string,
): boolean {
  return errors ? Object.keys(errors).includes(fieldName) : false;
}

export default function ErrorDisplay({ errors }: { errors: ErrorProperties }) {
  return (
    <ul>
      {Object.values(errors!).map((err) => {
        return <li key={uuidv4()}>{err.errors.join(", ")}</li>;
      })}
    </ul>
  );
}
