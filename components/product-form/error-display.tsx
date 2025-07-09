import { v4 as uuidv4 } from "uuid";

export default function ErrorDisplay({ errors }: { errors: string[] }) {
  return (
    <div className="rounded-md bg-red-50 p-4">
      <ul role="list">
        {errors.map((e) => {
          return <li key={uuidv4()}>{e}</li>;
        })}
      </ul>
    </div>
  );
}
