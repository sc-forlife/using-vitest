import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import UserProfile from "./UserProfile";
import { describe, it, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});

describe("UserProfile", () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("fetches and displays the user data", async () => {
    global.fetch.mockResolvedValueOnce({
      json: async () => ({ id: 4, name: "John", email: "John@gmail.com" }),
    });
    render(<UserProfile id={4} />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /john/i }),
      ).toBeInTheDocument();
      expect(screen.getByText(/John@gmail.com/i)).toBeInTheDocument();
    });
  });
});
