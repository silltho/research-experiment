import { assert, describe, it } from "vitest";
import { multipleOf3Or5 } from "./medium1.js";

function test(n, expected) {
  it(`n=${n}`, () => {
    let actual = multipleOf3Or5(n);
    assert.strictEqual(actual, expected);
  });
}

describe("basic tests", function () {
  test(10, 23);
});
