import {test,expect} from '@playwright/test';
import RandomDataGenerator from '../utils/randomDataGenerator';
const sharedleadData = RandomDataGenerator.generateRandomLead();

test(`Selector Test`, async ({page}) => {

    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator(`//input[@id='username']`).fill('demosalesmanager');
    await page.locator(`//input[@id='password']`).fill('crmsfa');
    await page.locator(` //input[@class='decorativeSubmit']`).click();
    await page.locator(`//a[contains(text(),'CRM/SFA')]`).click();
    await page.locator(`//a[text()='Leads']`).click();
    await page.locator(`//a[text()='Create Lead']`).click();
  
    await page.waitForTimeout(2000);

    //Print dropdown source by value
    const dropdownOptions = await page.locator(`#createLeadForm_dataSourceId>option`);
    const optionsCount = await dropdownOptions.count();

    console.log(`Total Options in Source Dropdown: ${optionsCount}`);

    //print all dropdown options

    for(let i=0; i<optionsCount; i++){
        const optionText = await dropdownOptions.nth(i).innerText();
        console.log(`Option ${i}: ${optionText}`);
    }

});