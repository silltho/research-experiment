import { assert, describe, it } from "vitest";
import { multipleOf3Or5 } from "./medium1.js";

function test(n, expected) {
  it(`n=${n}`, () => {
    let actual = multipleOf3Or5(n);
    assert.strictEqual(actual, expected);
  });
}

describe("basic tests", function () {
  test(-1, 0);
  test(0, 0);
  test(1, 0);
  test(3, 0);
  test(5, 3);
  test(10, 23);
  test(20, 78);
  test(30, 195);
  test(100, 2318);
  test(1000, 233168);
});
