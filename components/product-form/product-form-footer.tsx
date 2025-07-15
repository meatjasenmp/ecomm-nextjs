import { useFormContext } from "react-hook-form";

import Button from "@/components/ui/button";

export default function ProductFormFooter() {
  const {
    formState: { isValid },
  } = useFormContext();

  return (
    <footer className="mt-6 w-full">
      <Button disabled={!isValid} type="submit">
        Save
      </Button>
    </footer>
  );
}
