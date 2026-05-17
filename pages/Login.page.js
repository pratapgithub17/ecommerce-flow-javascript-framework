
class LoginPage {


   constructor(page){

          this.page= page;
          this.userName= page.locator("//input[@type='email']");
          this.password= page.locator("//input[@type='password']");
          this.loginButton= page.locator("//input[@name='login']");
          this.blinkMe= page.locator('label.blink_me');
          this.pagecontent= page.locator('.card-body b');
   }


   async redirectTo(loginPageUrl){

               await this.page.goto(loginPageUrl);
     

   }

   async validLogin(emailId,password){

            await this.userName.fill(emailId);
            await this.password.fill(password);
            await this.loginButton.click();

   }


    async waitForLoadDashbaord (){

         await this.pagecontent.first().waitFor(); 


    }
   async inValidLogin(inVaildEmail, inValidPassword){

            await this.userName.fill(inVaildEmail);
            await this.password.fill(inValidPassword);
            await this.loginButton.click();



   }


}

module.exports={LoginPage};