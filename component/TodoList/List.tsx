import { Todo } from "@prisma/client";
import getQueryClient from "@/utils/getQueryClient";
import { TodoItem } from "./TodoItem";

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
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </main>
  );
};
