import { chromium,test } from "@playwright/test";


test('Page Fixture Demo', async ({page})=>{
    /*
        Page fixture is used to launch the browser and create a new page instance
        We can directly use the page instance in our test without launching the browser
        and creating a new page instance    
    */
    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator('#username').fill('demosalesmanager');
    await page.locator('#password').fill('crmsfa');
    await page.locator('.decorativeSubmit').click();
})