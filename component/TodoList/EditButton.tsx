"use client";

import { updateTodo } from "@/api/todo";
import { Todo } from "@prisma/client";
import { FormEvent, useRef, useState } from "react";
import { Modal } from "../Modal";

interface EditButtonProps {
  todo: Todo;
}

export const EditButton = ({ todo }: EditButtonProps) => {
  const [open, setOpen] = useState(false);
  const handleEditModalOpen = async () => {
    setOpen((prev) => !prev);
  };
  const inputRef = useRef<HTMLInputElement>(null);
  const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const content = inputRef.current?.value;
    if (!content) return;
    await updateTodo({
      id: todo.id,
      content,
      completed: todo.completed,
    });
    setOpen(false);
  };

  return (
    <>
      <button
        className="border-2 border-black rounded"
        onClick={handleEditModalOpen}
      >
        수정
      </button>
      <Modal onClose={() => setOpen(false)} open={open}>
        <form onSubmit={handleUpdate}>
          <label>수정할 내용</label>
          <input
            ref={inputRef}
            defaultValue={todo.content}
            className="border-2 border-black rounded"
          />
          <button className="border-2 border-black rounded">수정</button>
        </form>
      </Modal>
    </>
  );
};
