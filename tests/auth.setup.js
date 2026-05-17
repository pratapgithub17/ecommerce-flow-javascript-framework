import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/Login.page';
import dotenv from 'dotenv';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/UserSession.json');

setup ('Aunthenticate', async ({browser}) =>  {

        const context =await browser.newContext();
        const page =await context.newPage();

// Login in Applications
       const loginPage = new LoginPage(page);
       await page.goto('/client/#/auth/login');
       await loginPage.validLogin(process.env.EMAIL, process.env.PASSWORD);
       await loginPage.waitForLoadDashbaord();

       await context.storageState({path: authFile});

   
})  
