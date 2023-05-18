import { TodoForm } from "./TodoForm";
import { List } from "./List";
import { DeleteAllButton } from "./DeleteAllButton";

export const TodoList = () => {
  return (
    <>
      <div className="flex">
        <TodoForm />
        <DeleteAllButton />
      </div>
      {/* @ts-expect-error Async Server Component */}
      <List />
    </>
  );
};
