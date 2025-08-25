import { describe, expect, it } from "vitest";

describe("simple env test", () => {
  it("should be true", () => {
    expect(import.meta.env.MODE).toBe("vitest");
  });
});
