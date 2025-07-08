import { Form } from "@heroui/form";
import ProductTitle from "@/components/product-form/product-title";

export default function CreateProductForm() {
  return (
    <section className="w-full max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <div>
        <h2 className="text-base/7 font-semibold text-gray-900">
          Create Product
        </h2>
      </div>
      <Form>
        <ProductTitle />
      </Form>
    </section>
  );
}
