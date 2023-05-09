const { expect } = require('chai');

const util = require('../../../lib/util');

describe('util.js', () => {
  context('isSortedHiToLow()', () => {
    context('strings', () => {
      it('returns false when list is alphabetical ascending', () => {
        const list = ['abc', 'xyz'];
        const result = util.isSortedHiToLow(list);
        expect(result).to.equal(false);
      });
      it('returns true when list is alphabetical descending', () => {
        const list = ['xyz', 'abc'];
        const result = util.isSortedHiToLow(list);
        expect(result).to.equal(true);
      });
      it('returns true when list is alphabetical descending: saucedemo results', () => {
        // Obtained via console.log on the `items` variable (in test/specs/e2e/inventory.e2e.js, Line 43)
        // Corresponds to the value returned from the "Name (Z to A)" test
        const list = [
          'Test.allTheThings() T-Shirt (Red)',
          'Sauce Labs Onesie',
          'Sauce Labs Fleece Jacket',
          'Sauce Labs Bolt T-Shirt',
          'Sauce Labs Bike Light',
          'Sauce Labs Backpack',
        ];
        const result = util.isSortedHiToLow(list);
        expect(result).to.equal(true);
      });
    });
    context('ints', () => {
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
    context('floats', () => {
      it('returns false when list is ascending', () => {
        const list = [123.01, 456.99];
        const result = util.isSortedHiToLow(list);
        expect(result).to.equal(false);
      });
      it('returns true when list is descending', () => {
        const list = [456.99, 123.01];
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
  });
  context('isSortedLowToHi()', () => {
    context('strings', () => {
      it('returns true when list is alphabetical ascending', () => {
        const list = ['abc', 'xyz'];
        const result = util.isSortedLowToHi(list);
        expect(result).to.equal(true);
      });
      it('returns false when list is alphabetical descending', () => {
        const list = ['xyz', 'abc'];
        const result = util.isSortedLowToHi(list);
        expect(result).to.equal(false);
      });
      it('returns true when list is alphabetical ascending: saucedemo results', () => {
        // Obtained via console.log on the `items` variable (in test/specs/e2e/inventory.e2e.js, Line 43)
        // Corresponds to the value returned from the "Name (A to Z)" test
        const list = [
          'Sauce Labs Backpack',
          'Sauce Labs Bike Light',
          'Sauce Labs Bolt T-Shirt',
          'Sauce Labs Fleece Jacket',
          'Sauce Labs Onesie',
          'Test.allTheThings() T-Shirt (Red)',
        ];
        const result = util.isSortedLowToHi(list);
        expect(result).to.equal(true);
      });
    });
    context('ints', () => {
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
    context('floats', () => {
      it('returns true when list is ascending', () => {
        const list = [123.01, 456.99];
        const result = util.isSortedLowToHi(list);
        expect(result).to.equal(true);
      });
      it('returns false when list is descending', () => {
        const list = [456.99, 123.01];
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
});
