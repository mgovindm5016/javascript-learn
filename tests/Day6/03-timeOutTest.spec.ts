import {test} from "@playwright/test";

test(`Timeout test`,async ({page})=>{

    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    //use timeout option in locator level
    await page.locator(`//input[@id='username']`).fill('demosalesmanager',{timeout:5000});
    await page.locator(`//input[@id='password']`).fill('crmsfa',{timeout:5000});
    await page.locator(` //input[@class='decorativeSubmit']`).click({timeout:5000});
    await page.locator(`//a[contains(text(),'CRM/SFA')]`).click({timeout:5000});

    //use setTimeout in page level
    await page.setDefaultTimeout(6000); //sets default timeout for all the actions
    await page.locator(`//a[text()='Leads']`).click();
    await page.locator(`//a[text()='Create Lead']`).click();

    //test timeout
    test.setTimeout(10000); //sets timeout for entire test case

});