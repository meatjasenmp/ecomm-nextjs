import { SubmissionState } from "@/components/product-form/types";

interface FormSubmissionStatusProps {
  submissionState: SubmissionState;
  submissionMessage: string;
}

export default function FormSubmissionStatus({
  submissionState,
  submissionMessage,
}: FormSubmissionStatusProps) {
  if (submissionState === "idle") {
    return null;
  }

  return (
    <div className="mb-6">
      <p className="text-sm">
        Status: {submissionState}
        {submissionMessage && ` - ${submissionMessage}`}
      </p>
    </div>
  );
}
