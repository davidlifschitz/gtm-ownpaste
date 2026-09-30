import { it, expect } from "vitest";
import { loadPage } from "./page.js";
it("swaps buzzwords for plain words instead of deleting them", () => {
  const p = loadPage();
  expect(p.run("We leverage caching to delve into logs.")).toBe("We use caching to look into logs.");
  expect(p.run("They leveraged it and leverages more.")).toBe("They used it and uses more.");
  expect(p.run("This is a game-changer for us.")).toBe("This is a big deal for us.");
  expect(p.run("It will unlock the full potential of the team.")).toBe("It will help the team.");
});
it("softens filler adjectives", () => {
  expect(loadPage().run("A robust and seamless cutting-edge flow.")).toBe("A solid and smooth modern flow.");
});
