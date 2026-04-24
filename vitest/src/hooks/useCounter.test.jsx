import React from "react";
import {
  render,
  renderHook,
  screen,
  waitFor,
  act,
} from "@testing-library/react";
import { useCounter } from "./useCounter";
import { describe, it, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});

describe("useCounter", () => {
  it("Initial Value is 5", () => {
    const { result } = renderHook(() => {
      return useCounter(5);
    });
    expect(result.current.count).toBe(5);
  });
  it("Increment", () => {
    const { result } = renderHook(() => {
      return useCounter(0);
    });
    expect(result.current.count).toBe(0);
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });
  it("decrement", () => {
    const { result } = renderHook(() => {
      return useCounter(0);
    });
    expect(result.current.count).toBe(0);
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(-1);
  });
});
