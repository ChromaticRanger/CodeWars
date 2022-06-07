
//
// Tests for combinations.js
//

const chai = require("chai");
const expect = require('chai').expect
const { combinations } = require('../JavaScript/000-combinations')

describe("Create Combinations", () => {
  it("should return a 2 dimensional array containing all combinations of the input", () => {
    expect(combinations(['a'])).to.have.members([ [], [ 'a' ] ]);
  });
});


/*
    expect(
      combinations(['a','b','c']).to.have.members(
        [], 
        ['a'], 
        ['b'], 
        ['c'], 
        ['a', 'b'], 
        ['a', 'c'], 
        ['a', 'b', 'c']
      )
    )
  */
