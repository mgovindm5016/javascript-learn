import { expect, test } from "@playwright/test";

test(`Default selected Radio Button Test`, async ({ page }) => {
  await page.goto(`https://leafground.com/radio.xhtml`);

    // Using CSS selector to find the selected radio button
    const defaultSelected = page.locator('.ui-radiobutton .ui-state-active');
    await expect(defaultSelected.first()).toBeVisible();

});

test(`Test on unselectable radio button`,async({page})=>{
    await page.goto(`https://leafground.com/radio.xhtml`);
    const cityRadioButton=page.locator(`//h5[text()='UnSelectable']/following::div[1]/div/div[1]/div/div[2]/div[1]`);
    await cityRadioButton.click();
    
    // Validating the label text next to the radio button
    const cityLabel = page.locator(`//h5[text()='UnSelectable']/following::div[1]/div/div[1]/div/div[2]/label`);
    const cityName = await cityLabel.textContent();
    console.log(`Selected city name :`, cityName);
});


test(`Test on your most favourite browser`, async({page})=>{
    await page.goto(`https://leafground.com/radio.xhtml`);
    const selectedBrowser=page.locator(`(//h5[text()='Your most favorite browser']/following::label[text()='Chrome']/preceding-sibling::div)[1]`);
    await selectedBrowser.click();
    
    // Validating the label text next to the radio button
    const browserLabel = page.locator(`(//h5[text()='Your most favorite browser']/following::label[text()='Chrome'])[1]`);
    const browserName = await browserLabel.textContent();
    console.log(`Selected favourite browser :`, browserName);

})


test(`Test the Selected age gropu`, async({page})=>{
    await page.goto(`https://leafground.com/radio.xhtml`);
    
    // First, we will identify and log the default selected age group
    const defaultSelectedAgeGroup = page.locator(`//h5[text()='Select the age group (only if not selected)']/following::div[contains(@class,'ui-state-active')]`).first();
    await expect(defaultSelectedAgeGroup).toBeVisible();
    
    // and then Get the label of the default selected age group
    const defaultLabel = page.locator(`//h5[text()='Select the age group (only if not selected)']/following::div[contains(@class,'ui-state-active')]/following::label`).first();
    const defaultAgeGroup = await defaultLabel.textContent();
    console.log(`Default selected age group: ${defaultAgeGroup}`);

    // now select a new age group (select the second radio button)
    const newAgeGroup = page.locator(`//h5[text()='Select the age group (only if not selected)']/following::div[contains(@class,'ui-radiobutton-box')]`).nth(0);
    await newAgeGroup.click();

    // and then Get and log the newly selected age group label
    const newLabel = page.locator(`//h5[text()='Select the age group (only if not selected)']/following::div[contains(@class,'ui-state-active')]/following::label`).first();
    const newSelectedAgeGroup = await newLabel.textContent();
    console.log(`Newly selected age group: ${newSelectedAgeGroup}`);

})