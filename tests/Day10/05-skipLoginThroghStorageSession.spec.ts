import { test } from "@playwright/test";

test.use({storageState:"tests/Data/Login_storageSeeion.json"});

test(`Skip Login Through Storage Session and Launch from home page`,async({page})=>{
        await page.goto('http://leaftaps.com/opentaps/control/main');
        //no need to write login steps

        await page.locator('text=CRM/SFA').click();

        await page.waitForTimeout(3000);
})