import { useState } from "react";
import css from "./Counter.module.css";

export default function Counter() {
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber((n) => n + 1);
  }

  function reset() {
    setNumber(0);
  }
  return (
    <>
      <div className={css.buttons}>
        <h1>{number}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}
