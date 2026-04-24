import { useState } from "react";
import css from "./Counter.module.css";
import { useCounter } from "../../hooks/useCounter";

export default function Counter() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <>
      <div className={css.buttons}>
        <h1 data-testid="counter-value">{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
}
