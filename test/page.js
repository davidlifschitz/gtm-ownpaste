import { readFileSync } from "node:fs";
import { JSDOM } from "jsdom";
const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
export function loadPage() {
  const dom = new JSDOM(html, { runScripts: "dangerously", pretendToBeVisual: true });
  const $ = (id) => dom.window.document.getElementById(id);
  const run = (text) => { $("src").value = text; $("run").click(); return $("out").textContent; };
  return { dom, window: dom.window, $, run };
}
