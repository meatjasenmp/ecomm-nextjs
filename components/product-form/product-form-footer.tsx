import { useFormContext } from "react-hook-form";

import Button from "@/components/ui/button";
import { SubmissionState } from "@/components/product-form/types";

interface ProductFormFooterProps {
  submissionState?: SubmissionState;
}

export default function ProductFormFooter({
  submissionState = "idle",
}: ProductFormFooterProps) {
  const {
    formState: { isValid },
  } = useFormContext();

  const isSubmitting = submissionState === "submitting";
  const isDisabled = !isValid || isSubmitting;

  return (
    <footer className="mt-6 w-full">
      <Button disabled={isDisabled} type="submit">
        {isSubmitting ? "Saving..." : "Save"}
      </Button>
    </footer>
  );
}
