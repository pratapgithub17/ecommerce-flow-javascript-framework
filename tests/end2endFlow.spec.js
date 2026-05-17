import{test, expect} from "@playwright/test";
const {OrderFlow}=require ('../flows/OrderFlow');
const logger= require ('../utils/Logger');
const data = JSON.parse(JSON.stringify(require('../test-data/OrderFlowTestData.json')));               


test.describe('CheckOut Flow Suite', () => {

let orderFlow =OrderFlow;

 test.beforeAll(async () => {

      logger.info('Test Suite Execution Started');

   });


test.beforeEach(async ({page}) => {

 logger.info('Launching Application');

 orderFlow = new OrderFlow(page);

await page.goto('/client/#/auth/login');
await expect(page).toHaveURL(`${process.env.BASE_URL}/client/#/dashboard/dash`);


 logger.info('Login successful');

})


test ('Verify Complete Checkout Flow', async () =>  {

 // Order Flow                       
   logger.info('Product Checkout Flow Started');

 await orderFlow.addProductToCart(data.productName);
   logger.info('Product added to Cart');

await orderFlow.checkout();
  logger.info('Product Checkout Done');

 await orderFlow.placeOrder(data.countryInput,data.productName );
  logger.info('Placeorder Successful');

 await orderFlow.OrderHistory();
  logger.info('Order History Verified Successful');

 await orderFlow.OrderSummary(data.emailId,data.countryInput,data.productName );
  logger.info('Order Summary Verified Successful');
   
  logger.info('Product Checkout Flow Completed');
})

test.afterEach(async ({ page }, testInfo) => {

      if (testInfo.status !== testInfo.expectedStatus) {

         logger.error(`Test Failed: ${testInfo.title}`);

         await page.screenshot({path:`screenshots/${testInfo.title}.png`, fullPage: true});

        }

         logger.info('Test execution completed');
   });

   test.afterAll(async () => {

      logger.info('Test Suite Execution completed');
   });

})
