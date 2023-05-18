"use client";
import { createTodo } from "@/api/todo";
import getQueryClient from "@/utils/getQueryClient";
import { useMutation } from "@tanstack/react-query";
import { FormEvent, useRef } from "react";

export const TodoForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { mutate } = useMutation(createTodo, {
    onSuccess: () => {
      if (!inputRef.current) return;
      inputRef.current.value = "";
      getQueryClient().refetchQueries(["todos"]);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputRef.current?.value) return;
    mutate(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} />
      <button>버튼</button>
    </form>
  );
};