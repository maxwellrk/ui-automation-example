const HomePage = require('../pageobjects/home.page');
const CartPage = require('../pageobjects/cart.page');
const CheckoutPage = require('../pageobjects/checkout.page');
const InventoryPage = require('../pageobjects/inventory.page');

describe('Primary Workflow', () => {
    it('Cart Page - Adds correct items in cart', () => {
        HomePage.open();
        HomePage.login('standard_user', 'secret_sauce');
        InventoryPage.selectSortByDropdownByText('Price (low to high)');
        InventoryPage.addItemToCart('Sauce Labs Backpack');
        InventoryPage.addItemToCart('Sauce Labs Bike Light');
        InventoryPage.addItemToCart('Test.allTheThings() T-Shirt (Red)');
        InventoryPage.shoppingCartLink.click();
        expect(CartPage.findItemByItemName('Sauce Labs Backpack')).toExist();
        expect(CartPage.findItemByItemName('Sauce Labs Bike Light')).toExist();
        expect(
            CartPage.findItemByItemName('Test.allTheThings() T-Shirt (Red)')
        ).toExist();
    });
    it('Checkout Page - Adds correct items in checkout', () => {});
    it('Checkout Page - Calculates the items total accuratley', () => {});
});
