
import { test } from "@playwright/test";

test(`Test to handle alerts`, async ({ page }) => {


    await page.goto(`https://leafground.com/alert.xhtml`)

    await page.locator(`(//span[text()="Show"])[1]`).click() // Simple alert

    await page.waitForTimeout(3000)

    await page.locator(`(//span[text()="Show"])[2]`).click() // Confirm alert

    await page.waitForTimeout(3000)

    await page.locator(`(//span[text()="Show"])[5]`).click() // Confirm alert

    await page.waitForTimeout(3000)

})


test.only(`Test to handle alerts using page.on`, async ({ page }) => {


    await page.goto(`https://leafground.com/alert.xhtml`)

    page.on('dialog',async(alert)=>{ // dialog == alert // page.on we are taking control of the alert from playwright
        
        const alertMessage = alert.message()
        console.log(`The message inside the alert says ${alertMessage}`);

        const alertType = alert.type()
        console.log(`The alert ype is ${alertType}`);

        if(alertType==='confirm'){

            await alert.accept()

        }else if(alertType==='prompt'){

            await alert.accept("Testleaf")
            
        }else{
            await alert.dismiss()
        }       

      //  await alert.dismiss()
        

    })

    await page.locator(`(//span[text()="Show"])[1]`).click() // Simple alert

    await page.waitForTimeout(3000)

    await page.locator(`(//span[text()="Show"])[2]`).click() // Confirm alert

    await page.waitForTimeout(3000)

    await page.locator(`(//span[text()="Show"])[5]`).click() // Confirm alert

    await page.waitForTimeout(3000)

})

