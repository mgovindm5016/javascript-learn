import {chromium, test,webkit} from '@playwright/test';

test('Navigate To RedBus and Flipcart',async ()=>{

    // Navigate to Flipcart
    const browser=await webkit.launch();
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://www.flipkart.com/');

    const flipcartTitle=await page.title();
    console.log("Flipcart Title is :"+ flipcartTitle);

    const flipcartUrl=await page.url();
    console.log("Flipcart URL is :"+ flipcartUrl);


    // Navigate to RedBus

    const redbrowser=await chromium.launch({channel:"msedge"});
    const redcontext=await redbrowser.newContext();
    const redpage=await redcontext.newPage();
    await redpage.goto('https://www.redbus.in/');

    const redbusTitle=await redpage.title();
    console.log("RedBus Title is :"+ redbusTitle);

    const redbusUrl=await redpage.url();
    console.log("RedBus URL is :"+ redbusUrl);
})
    