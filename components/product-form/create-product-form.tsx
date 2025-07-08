import { Form } from "@heroui/form";
import ProductFormHeader from "@/components/product-form/product-form-header";
import ProductTitle from "@/components/product-form/product-title";

export default function CreateProductForm() {
  return (
    <section className="w-full max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <ProductFormHeader header="Create New Product" />
      <Form>
        <ProductTitle />
      </Form>
    </section>
  );
}
