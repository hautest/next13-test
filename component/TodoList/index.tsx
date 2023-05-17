import { TodoForm } from "./TodoForm";
import { List } from "./List";

export const TodoList = () => {
  return (
    <>
      <TodoForm />
      {/* @ts-expect-error Async Server Component */}
      <List />
    </>
  );
};
