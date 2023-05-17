import { Todo } from "@prisma/client";
import { DeleteButton } from "./DeleteButton";
import getQueryClient from "@/utils/getQueryClient";

const getTodos = async () => {
  const res = await fetch("http://localhost:3000/api/todo", {
    cache: "no-store",
  });

  return res.json() as Promise<Todo[]>;
};

export const List = async () => {
  const data = await getQueryClient().fetchQuery(["todos"], getTodos);

  return (
    <ul>
      {data?.map((todo) => (
        <li key={todo.id}>
          {todo.content}
          <DeleteButton />
        </li>
      ))}
    </ul>
  );
};
