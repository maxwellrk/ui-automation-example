const Page = require('./page');

/**
 * Cart page selectors and methods
 */

class CartPage extends Page {
    /**
     * getter selectors for cart page
     */
    get continueShoppingButton() {
        return $('a=Continue Shopping');
    }

    get checkoutButton() {
        return $('a=CHECKOUT');
    }

    //Methods
    /**
     * Finds and returns an element object based on it's child div.inventory_item_name
     * @param {string} itemName Text value of div.inventory_item_name to find
     * will likely abstract this function into a new super class
     */
    findItemByItemName(itemName) {
        return $(`a=${itemName}`)
            .parentElement()
            .parentElement()
            .parentElement();
    }

    /**
     * Removes an item from the cart from the cart page by the item's name
     * @param {string} itemName Text value of div.inventory_item_name to use
     */
    removeItemFromCart(itemName) {
        this.findItemByItemName(itemName)
            .$('.btn_secondary.cart_button')
            .click();
    }
}

module.exports = new CartPage();
