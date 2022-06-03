
const chai = require("chai");
const assert = chai.assert;
const { openOrSenior } = require('../JavaScript/02-ClassifyMember')
chai.config.truncateThreshold=0;

describe("Classify Members", () => {
  it("should return a list of classifications for each member", () => {
    assert.deepEqual(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]), [ 'Open', 'Open', 'Senior', 'Open', 'Open', 'Senior' ])
    assert.deepEqual(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior'])
    assert.deepEqual(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]), ['Open', 'Open', 'Open', 'Open'])
    assert.deepEqual(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]), ['Senior', 'Open', 'Open', 'Open'])
  });
});