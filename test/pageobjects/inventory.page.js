const Page = require('./page');

/**
 * Inventory page selectors and methods
 */
class InventoryPage extends Page {
    /**
     * getter selectors for inventory page
     */
    get sortByDropdown() {
        return $('select.product_sort_container');
    }

    get arrayOfInventoryItems() {
        return $('div.inventory_item');
    }

    get shoppingCartLink() {
        return $('a.shopping_cart_link');
    }

    //Methods

    /**
     * Selects sortby dropdown option by text
     * @param {string} selectedOption dropdown option to select by visible text
     */
    selectSortByDropdownByText(selectedOption) {
        this.sortByDropdown.selectByVisibleText(selectedOption);
    }
}

module.exports = new InventoryPage();
