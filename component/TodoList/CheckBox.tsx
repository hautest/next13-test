"use client";

import { updateTodo } from "@/api/todo";

interface CheckBoxProps {
  checked: boolean;
  id: number;
}

export const CheckBox = ({ checked, id }: CheckBoxProps) => {
  return (
    <input
      type="checkbox"
      onChange={() => updateTodo({ id, completed: !checked })}
      checked={checked}
    />
  );
};
