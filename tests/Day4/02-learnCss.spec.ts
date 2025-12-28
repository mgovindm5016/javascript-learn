import {test,chromium}  from "@playwright/test"


test('learn css', async()=>{
    const browser= await chromium.launch();
    const context= await browser.newContext();
    const page=await context.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.locator(`#username`).fill('democsr');
    await page.locator(`#password`).fill('crmsa');
    await page.locator(`.decorativeSubmit`).click();

})