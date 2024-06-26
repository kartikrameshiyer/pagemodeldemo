import { Selector,t } from "testcafe";

class ProductDetailsPage {

    constructor(){

        this.productPrice = Selector("span[id='price-value-4']").withText('$1,800.00'); 
        this.productQuantity = Selector("#product_enteredQuantity_4");
        this.addToCartBtn = Selector("button[id='add-to-cart-button-4']");
        this.sucessMessage = Selector("div.bar-notification.success");

    }

}

export default new ProductDetailsPage();