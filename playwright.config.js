import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';


 
 const envName = process.env.TEST_ENV || 'qa';  // setup environment
 dotenv.config({path: `env/.env.${envName}`});   //   env folder path setup

 // Print Envirment current running
console.log('Environment:', envName);
console.log('BASE_URL:', process.env.BASE_URL);

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */

   reporter: [['html'],
       
],
  
    use: {

        baseURL: process.env.BASE_URL,
        headless: false,    
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure'
      },

  /* Configure projects for major browsers */
  projects: [

    { name: 'setup', testMatch: /.*\.setup\.js/ },
    {
      name: 'chromium',
      
      use: {
            
            ...devices['Desktop Chrome'],
            storageState:'playwright/.auth/UserSession.json'

            },
            dependencies: ['setup'],

    },

  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },

});

