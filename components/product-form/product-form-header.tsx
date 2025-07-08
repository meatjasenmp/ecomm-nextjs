export default function ProductFormHeader({ header }: { header: string }) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold text-gray-900">{header}</h2>
    </div>
  );
}
