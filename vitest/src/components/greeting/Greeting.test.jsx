import React from "react";
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});

describe("Greeting Component", () => {
  it("renders a default greeting", () => {
    render(<Greeting />);
    expect(screen.getByText("hello world")).toBeInTheDocument();
  });
  it("renders greeting with a name", () => {
    render(<Greeting name="salem" />);
    const text = screen.getByText("hello salem");
    expect(text).toBeInTheDocument();
  });
});
