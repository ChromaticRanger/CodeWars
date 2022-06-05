
const chai = require("chai");
const assert = chai.assert;
const { isTriangle } = require('../JavaScript/04-IsTriangle')
chai.config.truncateThreshold=0;

describe("Is Triangle", () => {
  it("should return true if a triangle can be made, false otherwise", () => {
    assert.strictEqual(isTriangle(1,2,2), true);
    assert.strictEqual(isTriangle(7,2,2), false);
    assert.strictEqual(isTriangle(3,3,3), true);
    assert.strictEqual(isTriangle(1,1,300), false);
  });
});