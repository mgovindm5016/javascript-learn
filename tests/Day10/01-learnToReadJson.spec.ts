import {test,chromium,expect} from '@playwright/test';
import credentials from '../Data/login.json';


test('Read data from json file',async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator('#username').fill(credentials[0].Username);
    await page.locator('#password').fill(credentials[0].Password);
    await page.locator('.decorativeSubmit').click();
    await page.locator('text=CRM/SFA').click();

    await page.waitForTimeout(3000);``

})

//dynamic fetching data using for each loop

credentials.forEach((data)=>{
    test(`Login with for each loop ${data.TcaseId}`,async({page})=>{

        await page.goto('http://leaftaps.com/opentaps/control/main');
        await page.locator('#username').fill(data.Username);
        await page.locator('#password').fill(data.Password);
        await page.locator('.decorativeSubmit').click();
        await page.locator('text=CRM/SFA').click();

        await page.waitForTimeout(3000);
    })
})

//dynamic fetching data using forOf loop

for (let data of credentials){

    test(`Login with forOF loop ${data.TcaseId}`,async({page})=>{

        await page.goto('http://leaftaps.com/opentaps/control/main');
        await page.locator('#username').fill(data.Username);
        await page.locator('#password').fill(data.Password);
        await page.locator('.decorativeSubmit').click();
        await page.locator('text=CRM/SFA').click();

        await page.waitForTimeout(3000);
    })
}   