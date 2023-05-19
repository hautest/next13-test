import { Todo } from "@prisma/client";
import { DeleteButton } from "./DeleteButton";
import getQueryClient from "@/utils/getQueryClient";
import { CheckBox } from "./CheckBox";

const getTodos = async () => {
  const res = await fetch("http://localhost:3000/api/todo", {
    cache: "no-store",
  });

  return res.json() as Promise<Todo[]>;
};

export const List = async () => {
  const data = await getQueryClient().fetchQuery(["todos"], getTodos);

  return (
    <main>
      <ul>
        {data?.map((todo) => (
          <li key={todo.id}>
            <CheckBox checked={todo.completed} id={todo.id} />
            {todo.content}
            <DeleteButton id={todo.id} />
          </li>
        ))}
      </ul>
    </main>
  );
};
