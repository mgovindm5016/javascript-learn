import { test } from "@playwright/test";
import { logADefectInJira } from "./after-hooks-jira-tickets";



test(`Test to record tracing a specific bug - GRaj12`,async ({page}) => {
    await page.goto(`https://login.salesforce.com/?locale=in`);

   // await page.getByRole("textbox",{name:"Username"}).fill("ravindran.ramdas@testleaf.com")
    await page.getByLabel("Username").fill("ravindran.ramdas@testleaf.com")

   await page.getByRole("textbox",{name:"Password"}).fill("RaviSalesforce#1234"); // accessibility
    await page.getByRole("button",{name:"Log In"}).click()

    await page.getByTitle("App Launcher",{exact:true}).click(); // attribute

    await page.getByText("View All",{exact:true}).click(); // attribute

    await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Service") //attribute
    await page.waitForTimeout(3000)
})

test.afterAll(  async({},testinfo)=>{

//console.log(testinfo.status); // passed, fails , timeout

await logADefectInJira(testinfo)

})