"use client";

import { deleteAllTodo } from "@/api/todo";

export const DeleteAllButton = () => {
  return <button onClick={() => deleteAllTodo()}>전체삭제</button>;
};
