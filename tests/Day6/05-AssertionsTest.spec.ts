import { expect, test } from "@playwright/test";

test(`ToBeDisabled Assertions test`, async ({ page }) => {
    await page.goto("https://leafground.com/input.xhtml");

    const disabledLocator = await page.locator(`//h5[text()='Verify if text box is disabled']/following::input[1]`);

    await expect(disabledLocator).toBeDisabled()

})

test(`ToBeEditable Assertions test`, async ({ page }) => {
    await page.goto("https://leafground.com/input.xhtml");

    const enabledLocator = await page.locator(`//h5[text()='Type your name']/following::input[1]`);
    await expect(enabledLocator).toBeEditable()

    await enabledLocator.fill("Playwright Test");

});


test('SoftAssertions Test', async ({ page }) => {
    await page.goto('https://leafground.com/input.xhtml');
    const softLocatorAssertions=await page.locator(`//h5[text()='Append Country to this City.']/following::input[1]`);
    await expect.soft(softLocatorAssertions).toBeDisabled(); //it will fail and not stop execution

    await softLocatorAssertions.fill('India');
});