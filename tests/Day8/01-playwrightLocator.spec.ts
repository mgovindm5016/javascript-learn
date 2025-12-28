import { test } from "@playwright/test";


test.skip(`Using playwright locator` , async({page})=>{

await page.goto(`https://login.salesforce.com/`)
//getBylabel
await page.getByLabel("Username").fill("dilipkumar.rajendran@testleaf.com");
await page.getByRole("textbox",{name:"Password"}).fill("TestLeaf@2025");
await page.getByRole("button",{name:"Log In"}).click();
await page.waitForTimeout(4000);

//getByTitle
await page.getByTitle("App Launcher",{exact:true}).click(); //attribute based locator
//getByText

//await page.getByText("View All",{exact:true}).click({timeout: 2000}); // attribute
await page.getByRole("button",{name:"View All Applications"}).click();

//getByPlaceHolder
await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Service") //attribute based locator

})

test.skip(`Using playwright locator by getByTestid` , async({page})=>{

await page.goto(`https://www.facebook.com/`)

await page.getByTestId("royal-email").fill("dilipkumar.rajendran@testleaf.com")
await page.getByTestId("royal-pass").fill("Govind@5016");
await page.waitForTimeout(4000);

})

test(`Using playwright locator by getByAlttext`, async({page})=>{
    await page.goto(`https://playwright.dev/`);
    await page.getByAltText("Playwright logo",{exact: true}).click(); //clicking on logo playwright
    await page.waitForTimeout(5000)
})




