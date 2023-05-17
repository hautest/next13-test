"use client";

import { useState } from "react";

export const ClientComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((prev) => prev + 1)}>버튼 {count} </button>
  );
};
