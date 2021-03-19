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

    /**
     * Finds and returns an element object based on it's child div.inventory_item_name
     * @param {string} itemName Text value of div.inventory_item_name to find
     */
    findItemByItemName(itemName) {
        return $(`a=${itemName}`)
            .parentElement()
            .parentElement()
            .parentElement();
    }

    /**
     * Adds an item to the cart from the inventory page by the item's name
     * @param {string} itemName Text value of div.inventory_item_name to use
     */
    addItemToCart(itemName) {
        this.findItemByItemName(itemName)
            .$('.btn_primary.btn_inventory')
            .click();
    }
}

module.exports = new InventoryPage();
