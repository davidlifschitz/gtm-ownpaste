import { it, expect } from "vitest";
import { loadPage } from "./page.js";
it("textarea does not silently truncate long pastes", () => {
  expect(loadPage().$("src").hasAttribute("maxlength")).toBe(false);
});
it("warns instead of shortening past the cap", () => {
  const p = loadPage();
  p.run("The deploy failed. ".repeat(5000));
  expect(p.$("warn").textContent).toMatch(/80 KB/);
});
