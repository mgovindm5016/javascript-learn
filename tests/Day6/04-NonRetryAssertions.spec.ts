
//Non retry assertions
/*
    When using non-retry assertions, if the assertion fails, the test will fail immediately without retrying.
    Take the locator and get the value of the locator (i.e., textContent, innerText, etc.) and then perform 
    the assertion on that value.
*/
import {test,expect} from "@playwright/test";
import RandomDataGenerator from "../utils/randomDataGenerator";

test(`Non retry assertions example`,async ({page})=>{


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

        const displayedCompanyName = await page.locator('#viewLead_companyName_sp').innerText();
        console.log(`Expected Company: ${sharedLeadData.companyName}`);
        console.log(`Displayed Company: ${displayedCompanyName}`);

        //non retry assertion
        expect(displayedCompanyName).toContain(sharedLeadData.companyName);



})