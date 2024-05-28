import { Selector,t } from "testcafe";

class CartPage {
    constructor(){
        this.termsLabel = Selector('input#termsofservice')
        this.cartTotal = Selector('td.cart-total-right')    
        this.checkoutButton = Selector('button#checkout')
    }
}

export default new CartPage();