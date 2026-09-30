import { it, expect } from "vitest";
import { loadPage } from "./page.js";
it("cuts filler openers and closers", () => {
  const p = loadPage();
  expect(p.run("Great question! The deploy failed because the key expired.\n\nHope this helps!"))
    .toBe("The deploy failed because the key expired.");
});
it("turns em dashes into commas", () => {
  expect(loadPage().run("The fix—small—works.")).toBe("The fix, small, works.");
});
it("keeps en dash ranges as ranges", () => {
  expect(loadPage().run("Pages 10–20 cover it. Q3 runs Jul–Sep."))
    .toBe("Pages 10-20 cover it. Q3 runs Jul-Sep.");
});
it("warns on empty input", () => {
  const p = loadPage(); p.run("   ");
  expect(p.$("warn").textContent).toMatch(/Paste/);
});
