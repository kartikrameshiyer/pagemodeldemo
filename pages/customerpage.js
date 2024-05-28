import { Selector,t } from "testcafe";

class CustomerPage {
    constructor() {
        this.orderslink = Selector('a').withText('Orders');
        this.noorderslabel = Selector('div.no-data').withText('No orders');
    }

}

export default new CustomerPage();