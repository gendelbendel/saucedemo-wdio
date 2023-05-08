const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {
  /**
   * define selectors using getter methods
   */
  get secondaryTitle() {
    return $('#header_container > div.header_secondary_container > span');
  }

  get inventoryItemPrice() {
    return '.inventory_item_price';
  }

  get inventoryItemName() {
    return '.inventory_item_name';
  }

  get inventoryItems() {
    return $$('.inventory_item');
  }

  /**
   * @return {float[]} list of all inventory item prices
   */
  async inventoryItemsPrices() {
    const prices = await $$(this.inventoryItemPrice).map((item) =>
      item.getText()
    );
    return prices.map((price) => parseFloat(price.replace('$', '')));
  }

  /**
   * @return {string[]} list of all inventory item names
   */
  async inventoryItemsNames() {
    return $$(this.inventoryItemName).map((item) => item.getText());
  }

  get sortSelectContainer() {
    return $('.select_container');
  }

  get sortContainer() {
    return $('.product_sort_container');
  }

  get currentSortSelection() {
    return this.sortSelectContainer.$('.active_option');
  }

  /**
   * Sort the products by the given string.
   *
   * Will error out if `sortChoice` is invalid
   * @param {string} sortChoice the visible text of the select option to sort by
   */
  async sortBy(sortChoice) {
    return this.sortContainer.selectByVisibleText(sortChoice);
  }
}

module.exports = new InventoryPage();
