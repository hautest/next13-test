"use server";

import { Todo } from "@prisma/client";
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

export const updateTodo = async ({
  id,
  content,
  completed,
}: {
  id: number;
  content?: string;
  completed?: boolean;
}) => {
  await fetch(`http://localhost:3000/api/todo/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      content,
      completed,
    }),
  });
  revalidatePath("/");
};

export const getTodos = async () => {
  const res = await fetch("http://localhost:3000/api/todo", {
    cache: "no-store",
  });

  return res.json() as Promise<Todo[]>;
};
