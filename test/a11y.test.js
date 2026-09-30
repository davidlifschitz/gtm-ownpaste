import { it, expect } from "vitest";
import { loadPage } from "./page.js";
it("textarea has a label", () => {
  const { $ } = loadPage();
  expect([...$("src").labels].map((l) => l.textContent).join(" ")).toMatch(/paste/i);
});
it("warnings and stats are announced", () => {
  const { $ } = loadPage();
  expect($("warn").getAttribute("role")).toBe("status");
  expect($("stats").getAttribute("aria-live")).toBe("polite");
});
