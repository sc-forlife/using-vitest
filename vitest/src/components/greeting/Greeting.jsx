import { useState } from "react";

export default function greeting({ name = "" }) {
  return <h1>hello {name ? name : "World"}</h1>;
}
