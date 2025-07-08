import { ErrorProperties } from "@/actions/product-form/types";
import { v4 as uuidv4 } from "uuid";

export default function ErrorDisplay({
  errors,
  message,
}: {
  errors: ErrorProperties;
  message: string;
}) {
  return (
    <div className="rounded-md bg-red-50 p-4 mb-8">
      <div className="flex">
        <div className="shrink-0">
          <svg
            className="size-5 text-red-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">
            {message}: There were {Object.values(errors!).length} errors with
            your submission
          </h3>
          <div className="mt-2 text-sm text-red-700">
            <ul role="list" className="list-disc space-y-1 pl-5">
              {Object.values(errors!).map((err) => {
                return <li key={uuidv4()}>{err.errors.join(", ")}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
