class CartPage{


constructor(page){

             this.page=page;           
             this.buyNowButton= page.locator("//button[@class='btn btn-primary']").filter({hasText:"Buy Now"});
             this.cartUrl= "https://rahulshettyacademy.com/client/#/dashboard/cart";




}


async checkoutProduct (){
                    
            await this.buyNowButton.last().click();

}

async redirectToCartPage(){

           await this.page.goto(this.cartUrl);

}



}

module.exports={CartPage};