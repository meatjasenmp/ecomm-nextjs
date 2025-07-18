import { useFormContext } from "react-hook-form";

import Button from "@/components/ui/button";
import {
  SubmissionState,
  FormMode,
} from "@/components/admin/product-form/types";

type ProductFormFooterProps = {
  submissionState?: SubmissionState;
  mode?: FormMode;
};

export default function ProductFormFooter({
  submissionState = "idle",
  mode = "create",
}: ProductFormFooterProps) {
  const {
    formState: { isValid },
  } = useFormContext();

  const isSubmitting = submissionState === "submitting";
  const isDisabled = !isValid || isSubmitting;

  const getButtonText = () => {
    if (isSubmitting) {
      return mode === "create" ? "Creating..." : "Updating...";
    }
    return mode === "create" ? "Create Product" : "Update Product";
  };

  return (
    <footer className="mt-6 w-full">
      <Button disabled={isDisabled} type="submit">
        {getButtonText()}
      </Button>
    </footer>
  );
}
