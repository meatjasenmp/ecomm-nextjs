export default function ErrorDisplay({ error }: { error: string }) {
  return <span className="text-tiny text-danger block">{error}</span>;
}
