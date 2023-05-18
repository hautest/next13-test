"use client";

import { deleteTodo } from "@/api/todo";

interface DeleteButtonProps {
  id: number;
}

export const DeleteButton = ({ id }: DeleteButtonProps) => {
  return <button onClick={() => deleteTodo(id)}>삭제</button>;
};
