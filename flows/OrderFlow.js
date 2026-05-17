
const {LoginPage}=require ('../pages/Login.page');
const {DashboardPage}=require ('../pages/dashboard.page');
const {CartPage}=require ('../pages/cart.page');
const {PlaceOrderPage}=require ('../pages/placeOrder.page');
const {OrderHistoryPage}=require ('../pages/Orderhistory.page');
const {OrderSummaryPage}=require ('../pages/OrderSummary.page');

let orderId;
class OrderFlow {

     
    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.dashboardPage = new DashboardPage(page);
        this.cartPage = new CartPage(page);
        this.placeOrderPage = new PlaceOrderPage(page);
        this.orderSummary = new OrderSummaryPage(page);
        this.orderHistoryPage = new OrderHistoryPage(page);

    }

    async login(email, password, url){
        await this.loginPage.redirectTo(url);
        await this.loginPage.validLogin(email, password);
        await this.loginPage.waitForLoadDashbaord();
    }

    async addProductToCart(productName){
        await this.dashboardPage.AddToCartProduct(productName);
    }

    async checkout(){
        await this.dashboardPage.goToCartPage();
        await this.cartPage.checkoutProduct();
    }

    async placeOrder(country, productName){
        await this.placeOrderPage.selectCountry(country);
        await this.placeOrderPage.placeOrder();
        await this.placeOrderPage.verifyOrder(productName);
        this.orderID =await this.placeOrderPage.getOrderId();
        await this.placeOrderPage.redirectToOrderHistory();
    }

 async OrderHistory(){

       await this.orderHistoryPage.VerifyOrderHistory();
       await this.orderHistoryPage.clickViewProduct(this.orderID);

 }


   async OrderSummary(emailId,countryInput,productName){

       await this.orderSummary.verifyOrderSummaryText();
       await this.orderSummary.verifyOrderId(this.orderID);
       await this.orderSummary.VerifyOrderDetails(emailId,countryInput,productName);

   }


}

module.exports = { OrderFlow };
