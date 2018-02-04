const chai = require("chai");
const assert = chai.assert;
let double = require("../app.js").double;

describe("double", function() {
  it("should double the number passed as an argument", function() {
    assert.equal(double(2), 4);
    assert.equal(double(16), 32);
  });
  it("should display an error message if arg is not a number", function() {
    assert.equal(double("hello"), "argument must be of type number");
  });
});
