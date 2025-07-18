import { SubmissionState } from "@/components/admin/product-form/types";

type FormSubmissionStatusProps = {
  submissionState: SubmissionState;
  submissionMessage: string;
};

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
