"use client";

import { deleteAllTodo } from "@/api/todo";

export const DeleteAllButton = () => {
  return (
    <button
      className="border-2 border-black rounded"
      onClick={() => deleteAllTodo()}
    >
      전체삭제
    </button>
  );
};
