"use server";

import { revalidatePath } from "next/cache";

export const createTodo = async (content: string) => {
  await fetch("http://localhost:3000/api/todo", {
    method: "POST",
    body: JSON.stringify({ content }),
  });
  revalidatePath("/");
};

export const deleteTodo = async (id: number) => {
  await fetch(`http://localhost:3000/api/todo/${id}`, {
    method: "DELETE",
  });
  revalidatePath("/");
};

export const deleteAllTodo = async () => {
  await fetch(`http://localhost:3000/api/todo`, {
    method: "DELETE",
  });
  revalidatePath("/");
};
