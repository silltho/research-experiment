import { assert, describe, it } from "vitest";
import { flickSwitch } from "./easy1.js";

describe("Sample tests", function () {
  it("Basic tests", function () {
    assert.deepEqual(flickSwitch(["codewars", "flick", "code", "wars"]), [
      true,
      false,
      false,
      false,
    ]);
    assert.deepEqual(
      flickSwitch(["flick", "chocolate", "adventure", "sunshine"]),
      [false, false, false, false]
    );
    assert.deepEqual(
      flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]),
      [true, true, false, false, true]
    );
    assert.deepEqual(
      flickSwitch(["flick", "flick", "flick", "flick", "flick"]),
      [false, true, false, true, false]
    );
    assert.deepEqual(flickSwitch(["john, smith, susan", "flick"]), [
      true,
      false,
    ]);
    assert.deepEqual(flickSwitch(["bicycle"]), [true]);
    assert.deepEqual(flickSwitch(["flick"]), [false]);
    assert.deepEqual(flickSwitch([]), []);
  });
});
