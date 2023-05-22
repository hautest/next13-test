import { Todo } from "@prisma/client";
import { CheckBox } from "./CheckBox";
import { DeleteButton } from "./DeleteButton";
import { EditButton } from "./EditButton";

interface TodoItmeProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItmeProps) => {
  return (
    <li>
      <CheckBox checked={todo.completed} id={todo.id} />
      {todo.content}
      <EditButton todo={todo} />
      <DeleteButton id={todo.id} />
    </li>
  );
};
