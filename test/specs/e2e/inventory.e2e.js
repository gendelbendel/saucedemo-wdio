const LoginPage = require('../../pageobjects/login.page');
const InventoryPage = require('../../pageobjects/inventory.page');
const util = require('../../../lib/util');
const config = require('config');

describe('Inventory', () => {
  beforeEach(async () => {
    await LoginPage.open();

    await LoginPage.login(
      config.users.standard.user,
      config.users.standard.pass
    );
  });
  context('sorting', async () => {
    // To add a new sorting test, add new criteria here
    const tests = [
      {
        sortBy: 'Name (A to Z)',
        predicate: util.isSortedLowToHi,
        items: () => InventoryPage.inventoryItemsNames(),
      },
      {
        sortBy: 'Name (Z to A)',
        predicate: util.isSortedHiToLow,
        items: () => InventoryPage.inventoryItemsNames(),
      },
      {
        sortBy: 'Price (low to high)',
        predicate: util.isSortedLowToHi,
        items: () => InventoryPage.inventoryItemsPrices(),
      },
      {
        sortBy: 'Price (high to low)',
        predicate: util.isSortedHiToLow,
        items: () => InventoryPage.inventoryItemsPrices(),
      },
    ];
    tests.forEach((test) => {
      it(`should sort by "${test.sortBy}"`, async () => {
        await InventoryPage.sortBy(test.sortBy);

        const items = await test.items();

        await expect(test.predicate(items)).toBe(true);
      });
    });
  });
});
