class DashboardPage{


constructor(page){

             this.page=page;
             this.productList= page.locator(".card-body b");
             this.allProduct= page.locator(".card-body"); 
             this.cartLink= page.locator("//button[@class='btn btn-custom']").filter({hasText:"Cart "});
             this.dashboardUrl='https://rahulshettyacademy.com/client/#/dashboard/dash';
}


async redirectToDashboard(){

          await this.page.goto(this.dashboardUrl);

}

async getProductList(){

            await this.productList.allTextContents();


}
async AddToCartProduct(productName)
{
        
         await this.allProduct.filter({ hasText: productName }).locator("button.btn.w-10.rounded").click();
       

}

async goToCartPage(){

           await this.cartLink.click();


}












}

module.exports={DashboardPage};