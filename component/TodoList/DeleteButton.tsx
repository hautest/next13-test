"use client";

import { deleteTodo } from "@/api/todo";

interface DeleteButtonProps {
  id: number;
}

export const DeleteButton = ({ id }: DeleteButtonProps) => {
  return (
    <button
      className="border-2 border-black rounded"
      onClick={() => deleteTodo(id)}
    >
      삭제
    </button>
  );
};
