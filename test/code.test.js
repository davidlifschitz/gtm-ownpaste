import { it, expect } from "vitest";
import { loadPage } from "./page.js";
it("leaves fenced code blocks untouched", () => {
  const code = "```\ndef f():\n    # robust — keep\n    return 1\n```";
  expect(loadPage().run("Run this:\n\n" + code)).toBe("Run this:\n\n" + code);
});
it("keeps code even with blank lines inside", () => {
  const code = "```js\nconst a = 1;\n\nconst b = 2;\n```";
  expect(loadPage().run("Sure, here you go.\n\n" + code + "\n\nHope this helps!")).toBe(code);
});
