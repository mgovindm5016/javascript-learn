import {expect, test} from '@playwright/test'

test(`Test for check box`,async ({page})=>{

    await page.goto(`https://leafground.com/checkbox.xhtml`);

    //1. select the basic check box
    
    const basicCheckbox = page.locator(`//h5[text()='Basic Checkbox']/following::div[1]/div/div[1]`);
    await basicCheckbox.click();
    
    // Assert checkbox is selected by checking for ui-state-active class
    await expect(basicCheckbox).toHaveClass(/ui-state-active/);

    //2. Select the Notification checkBox and verify notification message

    await page.locator(`//h5[text()='Notification']/following::div[1]/div/div[1]`).click();
    await expect(page.locator(`//span[text()='Checked']`)).toBeVisible({ timeout: 5000 });

    //3. Select the JavaScript checkbox
    await page.locator(`//label[contains(text(),'Javascript')]/preceding-sibling::div/div[2]`).click();
    
    //4. Tri state checkbox

    await page.locator(`//h5[text()='Tri State Checkbox']/following::div[1]/div/div[1]`).click();
    
    // Target the last notification (2nd one)
    await expect(page.locator(`.ui-growl-title`).last()).toHaveText('State has been changed.');
    await expect(page.locator(`.ui-growl-message p`).last()).toHaveText('State = 1');
    
    //5. Toggle switch

    await page.locator(`//h5[text()='Toggle Switch']/following::div[1]/div[2]`).click();
    await expect(page.locator(`//span[text()='Checked']`)).toBeVisible({ timeout: 5000 });

    //6. Verify checkbox is disabled

    await page.locator(`//h5[text()='Verify if check box is disabled']/following::div[1]`).isDisabled();

    //7. Select multiple check boxes
   

})


