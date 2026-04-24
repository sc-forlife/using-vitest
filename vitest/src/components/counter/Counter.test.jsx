import React from "react";
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import "@testing-library/user-event";
import userEvent from "@testing-library/user-event";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});

describe("Counter", () => {
  it("increment counter on button click", async () => {
    render(<Counter />);
    const buttonIncrement = screen.getByRole("button", { name: /Increment/i });

    const counterValue = screen.getByTestId("counter-value");

    expect(counterValue.textContent).toEqual("0");

    await userEvent.click(buttonIncrement);

    expect(counterValue.textContent).toEqual("1");

    await userEvent.click(buttonIncrement);

    expect(counterValue.textContent).toEqual("2");
  });

  it("decrements Counter to -1", async () => {
    render(<Counter />);
    const buttonDecrement = screen.getByRole("button", { name: /Decrement/i });

    const counterValue = screen.getByTestId("counter-value");

    await userEvent.click(buttonDecrement);

    expect(counterValue.textContent).toEqual("-1");
  });
});
