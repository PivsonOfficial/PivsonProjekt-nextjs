import { create } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";

const AddTodo = () => {
  return (
    <Form action={create} className="w-1/2 m-auto">
      <div className="flex">
        <Input
          name="input"
          type="text"
          placeholder="Uz me to neba ngl"
        />

        <Button type="submit" text="ADD"/>

      </div>
    </Form>
  );
};

export default AddTodo;
