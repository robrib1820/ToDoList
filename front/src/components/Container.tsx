import { Column } from "./Column";
import { Form } from "./Forms";

export const Container = () => {
  return (
    <div>
      <Form />
      Container Component
      <Column />
      <Column />
      <Column />
    </div>
  );
};
