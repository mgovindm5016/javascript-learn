import {chromium, test} from '@playwright/test';

test('Launch the browser',async()=>{
    const browser= await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://platform.testleaf.com/#/")
    let urlOfPage=page.url();
    console.log("URLof page is :",urlOfPage);
    
})