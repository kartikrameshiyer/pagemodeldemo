import { Selector,t } from "testcafe";

class HomePage {
    constructor() {
        this.subtitleheader = Selector('h2')
        .withText('Welcome to our store')
        this.registerLink = Selector('a')
        .withText('Register')
        this.logIn = Selector('a')
        .withText('Log in');
        this.shoppinglink = Selector('a')
        .withText('Register')
        this.currecyList = Selector('select#customerCurrency')
        this.accountLink = Selector('a')
        .withText('My account')
        this.logoutLink = Selector('a')
        .withText('Log out')
        this.CartLink = Selector('a').withText('Shopping cart')
        this.myAccountLink = Selector('a').withText('My account')
        this.addToCartBtnOnHmPg =  Selector('button.button-2.product-box-add-to-cart-button[type="button"][onclick*="addproducttocart_catalog"]')
        this.macbookLink = Selector('.button-2.product-box-add-to-cart-button');
        
    }
    get productSearch() {
        return Selector("input[id='small-searchterms']");
    }

    async searchProduct(productName) {
        await t.typeText(this.productSearch, productName)
        .wait(3000)
        .pressKey("enter")
        
    }
    async changeCurrency(currency) {
        await t
        .click(this.currecyList)
        .click(Selector('option', { text: currency }));
    
}
}
export default new HomePage();
