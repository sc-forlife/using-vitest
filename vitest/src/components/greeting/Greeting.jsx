import { useState } from "react";
import css from "./Greeting.module.css";

export default function greeting({ name = "" }) {
  return (
    <div className={css.greet}>
      <h1>hello {name ? name : "World"}</h1>
    </div>
  );
}
