import{expect} from "@playwright/test";

class PlaceOrderPage{


    constructor(page){

                this.page=page;
                this.CountryLocator= page.getByPlaceholder("Select Country");
                this.countryDropdown= page.locator('.ta-results');
                this.placeOrderButton= page.getByText("Place Order");
                this.readyToShipText= page.getByText("Ready to Ship");
                this.thankYouText= page.getByText(" Thankyou for the order. ");
                this.orderIdLocator= page.locator("//td//label[@class='ng-star-inserted']");
                this.orderHistoryLink=page.getByText('Orders History Page');

    }

    async redirectToPlaceOrder(productID){

       await  this.page.goto("https://rahulshettyacademy.com/client/#/dashboard/order?prop=%5B%22"+productID+"%22%5D");


    }

   async selectCountry(countryInput){
                await expect(this.CountryLocator).toBeVisible();
               await this.CountryLocator.type('India', {delay:150});              
               await expect(this.countryDropdown).toBeVisible();
               await this.countryDropdown.filter({hasText:countryInput}).click();  

   }

   async placeOrder(){

              await expect(this.placeOrderButton).toBeVisible();
              await this.placeOrderButton.click();


   }

   async verifyOrder(productName){

            await expect(this.readyToShipText).toBeVisible();
            await expect(this.thankYouText).toBeVisible();
            await expect(this.page.getByText(productName)).toBeVisible();


   }

   async getOrderId(){

            const  OrderIdText=  await this.orderIdLocator.textContent();
            const OrderId = OrderIdText.split(' | ')[1];
            return OrderId;

   }


   async redirectToOrderHistory(){

               await this.orderHistoryLink.click();


   }

   

}

module.exports={PlaceOrderPage};