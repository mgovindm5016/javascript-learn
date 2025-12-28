import { test } from "@playwright/test";

test(`Login Functionality`,async({page})=>{
        await page.goto('http://leaftaps.com/opentaps/control/main');
        await page.locator('#username').fill(`demoCSR2`);
        await page.locator('#password').fill(`crmsfa`);
        await page.locator('.decorativeSubmit').click();
        await page.locator('text=CRM/SFA').click();

        await page.context().storageState({path:"tests/Data/Login_storageSeeion.json"})

        await page.waitForTimeout(3000);
})