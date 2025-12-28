
/* Auto retry assertions example test
When locators are used with assertions, Playwright Test automatically retries the assertion until it passes or times out.

Take the locator and check the value of the locator

*/

import {test,expect} from "@playwright/test";
import RandomDataGenerator from "../utils/randomDataGenerator";

test(`auto retry assertions example`,async ({page})=>{


       await page.goto('http://leaftaps.com/opentaps/control/main');
       await page.locator('#username').fill('demosalesmanager');
       await page.locator('#password').fill('crmsfa');
       await page.locator('.decorativeSubmit').click();
       await page.locator('text=CRM/SFA').click();
       await page.locator('a[href="/crmsfa/control/leadsMain"]').click();
       await page.locator('a[href="/crmsfa/control/createLeadForm"]').click();

       const sharedLeadData = RandomDataGenerator.generateRandomLead();
       
       // Use the shared data for creating the lead
       console.log('Using Shared Lead Data:', sharedLeadData);
   
       await page.locator('#createLeadForm_companyName').fill(sharedLeadData.companyName);
       await page.locator('#createLeadForm_firstName').fill(sharedLeadData.firstName);
       await page.locator('#createLeadForm_lastName').fill(sharedLeadData.lastName);
       await page.locator('#createLeadForm_personalTitle').fill(sharedLeadData.personalTitle);
       await page.locator('#createLeadForm_generalProfTitle').fill(sharedLeadData.jobTitle);
       await page.locator('#createLeadForm_annualRevenue').fill(sharedLeadData.annualRevenue.toString());
       await page.locator('#createLeadForm_departmentName').fill(sharedLeadData.department);
       await page.locator('#createLeadForm_primaryPhoneNumber').fill(sharedLeadData.phoneNumber);
       await page.locator('.smallSubmit').click();

        const companyNameLocator = await page.locator('#viewLead_companyName_sp');
        
        //auto retry assertion
        expect(companyNameLocator).toContainText(sharedLeadData.companyName); //taking locator and checking text directly



})