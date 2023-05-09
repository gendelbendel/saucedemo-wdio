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
  });
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
  });
});
