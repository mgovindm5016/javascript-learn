import {chromium,test,webkit} from '@playwright/test';

test('Launching Browser',async()=>{

    const browser= await chromium.launch();//  launch({channel:'chrome'},{headless:false}); -script is preference to launch browser in headed mode

    const context=await browser.newContext();

    const page=await context.newPage();
   
    await page.goto('https://platform.testleaf.com/#/');

    let url=page.url();
    console.log("url is :"+ url);
    
})