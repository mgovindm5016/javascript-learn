import {test,expect} from '@playwright/test';
import RandomDataGenerator from '../utils/randomDataGenerator';

const sharedLeadData = RandomDataGenerator.generateRandomLead();

test(`Create lead by Xpath Locator`, async ({page}) => {

    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator(`//input[@id='username']`).fill('demosalesmanager');
    await page.locator(`//input[@id='password']`).fill('crmsfa');
    await page.locator(` //input[@class='decorativeSubmit']`).click();
    await page.locator(`//a[contains(text(),'CRM/SFA')]`).click();
    await page.locator(`//a[text()='Leads']`).click();
    await page.locator(`//a[text()='Create Lead']`).click();
    await page.locator(`//input[@id='createLeadForm_companyName']`).fill(sharedLeadData.companyName);
    await page.locator(`//input[@id='createLeadForm_firstName']`).fill(sharedLeadData.firstName);
    await page.locator(`//input[@id='createLeadForm_lastName']`).fill(sharedLeadData.lastName);
    await page.locator(`//input[@name='submitButton']`).click();
   // Verify Company Name
    const displayedCompanyName = await page.locator('//span[@id="viewLead_companyName_sp"]').textContent();
    console.log(`Expected Company: ${sharedLeadData.companyName}`);
    console.log(`Displayed Company: ${displayedCompanyName}`);
    expect(displayedCompanyName).toContain(sharedLeadData.companyName);

})
