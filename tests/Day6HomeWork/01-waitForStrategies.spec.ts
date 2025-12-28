
import {expect, test} from "@playwright/test";

test(`Perform action for visiablity Element`, async ({page})=>{

    await page.goto("https://leafground.com/waits.xhtml");

    //await page.click('button:has-text("Click")'); - we can use this too combines locator + action in one step Internally does:
    await page.locator(`(//span[text()='Click']/preceding::button)[1]`).click();

    const visibleElement=await page.waitForSelector(`//span[text()='I am here']`,{
        state : 'visible',
        timeout : 10000
    });

    expect(visibleElement).not.toBeNull();

    const isVisible=await visibleElement.isVisible();
    await expect(isVisible).toBe(true);

    console.log("Element became visible successfully ");
    console.log('Element text:', await visibleElement.textContent());

})

test(`Perform action for Invisiablity Element`, async({page})=>{
    await page.goto(`https://leafground.com/waits.xhtml`);

    await page.locator(`//h5[text()='Wait for Invisibility (1 - 10 Sec)']/following::button[1]/span`).click();
    console.log("Waiting for element disappear");
    

   const inVisisbleElement= await page.waitForSelector(`//span[text()='I am about to hide']`,{
        state : "hidden",
        timeout : 10000
    });
    
    const elementExists= await page.locator(`//span[text()='I am about to hide']`).isVisible();
    await expect(elementExists).toBe(false);

    console.log(`Element disappeared successfully`);
    
})


test('Perform action on text change element', async({page})=>{
    await page.goto(`https://leafground.com/waits.xhtml`);

    //before click , get the available text

    const initialTxt=await page.locator(`//h5[text()='Wait for Text Change (1 - 10 Sec)']/following::button[2]/span`).textContent();
    console.log(`Currently Visible text :` , initialTxt);
    
    await page.locator(`//h5[text()='Wait for Text Change (1 - 10 Sec)']/following::button[1]/span`).click();

    // Wait for text to change - Simplest way using Playwright's built-in wait
    const textElement = page.locator(`//h5[text()='Wait for Text Change (1 - 10 Sec)']/following::button[2]/span`);
    await expect(textElement).not.toHaveText(initialTxt as string, { timeout: 10000 });

    const newText=await page.locator(`//h5[text()='Wait for Text Change (1 - 10 Sec)']/following::button[2]/span`).textContent();
    console.log(`Text after click :` , newText);

    console.log(`Text changed from "${initialTxt}" to "${newText}"`);

    await expect(newText).not.toBe(initialTxt);
    
})
