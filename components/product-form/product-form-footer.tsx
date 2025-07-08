import Button from "@/components/ui/button";
import ErrorDisplay from "@/components/product-form/error-display";

interface FooterProps {
  state: {
    message: string;
    error?: Record<string, { errors: string[] }>;
  };
}

export default function ProductFormFooter({ state }: FooterProps) {
  return (
    <footer className="mt-6 w-full">
      <h5>{state?.message}</h5>
      {state?.error && <ErrorDisplay errors={state.error} />}
      <Button type="submit">Save</Button>
    </footer>
  );
}
