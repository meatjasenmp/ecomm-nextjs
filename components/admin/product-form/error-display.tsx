export default function ErrorDisplay({ error }: { error: string }) {
  return <span className="text-tiny text-danger block mt-2">{error}</span>;
}
