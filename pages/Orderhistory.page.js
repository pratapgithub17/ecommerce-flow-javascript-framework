import{expect} from "@playwright/test";

class OrderHistoryPage {


  constructor(page){
                 this.page=page;
                 this.headingText=page.getByText('Your Orders');
                 this.productRow=page.locator('tbody tr');


  }

   async VerifyOrderHistory(){

            await expect(this.headingText).toBeVisible();

   }

   async clickViewProduct(OrderId){

      await this.productRow.filter({hasText:OrderId}).locator("//td/button[@class='btn btn-primary']").click();
    

    
   }


}

module.exports={OrderHistoryPage};