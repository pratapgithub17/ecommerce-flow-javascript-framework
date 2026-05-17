import{expect} from "@playwright/test";

class OrderSummaryPage{


  constructor(page){

              this.page=page;
              this.pageHeadingText=page.getByText(' order summary ');
              this.orderIdLocator=page.locator("//div/div[@class='col-text -main']");
              this.emailIdTextLocator= page.locator("//div/p[@class='text']").getByText('pratap.sdet',{exact:false}).first();
              this.countryTextLocator= page.locator("//div/p[@class='text']").getByText('India',{exact:false}).first();
              this.productNameLocator=page.locator("//div[@class='title']");
  }

   async verifyOrderSummaryText(){

            await expect(this.pageHeadingText).toBeVisible();
           
   }

  async verifyOrderId(OrderId){

            await expect(this.orderIdLocator).toHaveText(OrderId);


  }


  async VerifyOrderDetails(emailId,countryInput,productName){

             expect( await this.emailIdTextLocator).toHaveText(emailId);
            expect( await this.countryTextLocator).toContainText(countryInput);           
            expect( await this.productNameLocator).toHaveText(productName);


  }
}

module.exports={OrderSummaryPage};