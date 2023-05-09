const { expect } = require('chai');

const util = require('../../../lib/util');

describe('util.js', () => {
  context('isSortedHiToLow()', () => {
    it('returns false when list is ascending', () => {
      const list = [123, 456];
      const result = util.isSortedHiToLow(list);
      expect(result).to.equal(false);
    });
    it('returns true when list is descending', () => {
      const list = [456, 123];
      const result = util.isSortedHiToLow(list);
      expect(result).to.equal(true);
    });
    it('returns true when list is descending: saucedemo results', () => {
      // Obtained via console.log on the `items` variable (in test/specs/e2e/inventory.e2e.js, Line 43)
      // Corresponds to the value returned from the "Price (high to low)" test
      const list = [49.99, 29.99, 15.99, 15.99, 9.99, 7.99];
      const result = util.isSortedHiToLow(list);
      expect(result).to.equal(true);
    });
  });
  //[ 49.99, 29.99, 15.99, 15.99, 9.99, 7.99 ]
  context('isSortedLowToHi()', () => {
    it('returns true when list is ascending', () => {
      const list = [123, 456];
      const result = util.isSortedLowToHi(list);
      expect(result).to.equal(true);
    });
    it('returns false when list is descending', () => {
      const list = [456, 123];
      const result = util.isSortedLowToHi(list);
      expect(result).to.equal(false);
    });
    it('returns true when list is ascending: saucedemo results', () => {
      // Obtained via console.log on the `items` variable (in test/specs/e2e/inventory.e2e.js, Line 43)
      // Corresponds to the value returned from the "Price (low to high)" test
      const list = [7.99, 9.99, 15.99, 15.99, 29.99, 49.99];
      const result = util.isSortedLowToHi(list);
      expect(result).to.equal(true);
    });
  });
});
