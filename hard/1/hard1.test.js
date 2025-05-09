import { assert, describe, it } from "vitest";
import { triangle } from "./hard1.js";

describe("Insane Coloured Triangles", () => {
  let doTest = (tests) =>
    tests.map(([input, output]) => assert.strictEqual(triangle(input), output));

  let basicCases = [
    ["B", "B"],
    ["GB", "R"],
    ["RRR", "R"],
    ["RGBG", "B"],
    ["RBRGBRB", "G"],
    ["RBRGBRBGGRRRBGBBBGG", "G"],
  ];
  it("Basic Test", () => doTest(basicCases));
});
