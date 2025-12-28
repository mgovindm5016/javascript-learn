import {chromium,test} from '@playwright/test';

//nth tag selector
test('Tag Selector Locator Test', async ({page}) => {

    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator(`input`).nth(0).fill('demosalesmanager');
    await page.locator(`input`).nth(1).fill('crmsfa');
    await page.locator(`input`).nth(2).click();
});

//first and last tag selector

test(`Tag selector by First and Last`, async ({page}) => {

    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator(`input`).first().fill('demosalesmanager');
    await page.locator(`input`).nth(1).fill('crmsfa');
    await page.locator(`input`).last().click();
});


//decesant tag selector, Selects all elements that are descendants of a specified element
test(`Tag selector by Decesant`, async ({page}) => {

    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator(`div#usernameSpan input`).fill('demosalesmanager');
    await page.locator(`div#passwordSpan input`).fill('crmsfa');
    await page.locator(`div#loginSpan input`).click();
});

//ancestor tag selector , selects elements that are descendants of a specified ancestor element
test(`Tag selector by Ancestor`, async ({page}) => {

    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator(`form#loginForm input`).nth(0).fill('demosalesmanager');
    await page.locator(`form#loginForm input`).nth(1).fill('crmsfa');
    await page.locator(`form#loginForm input`).nth(2).click();
});

//sibling tag selector , Selects an element that is the immediate next sibling of another element
test(`Tag selector by Sibling`, async ({page}) => {

    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator(`label[for='username'] + input`).fill('demosalesmanager');
    await page.locator(`label[for='password'] + input`).fill('crmsfa');
    await page.locator(`label[for='password'] + input + input`).click();
});

//general sibling tag selector select all siblings that come after a specific element,not necessarily immediately
test(`Tag selector by General Sibling`, async ({page}) => {

    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator(`label[for='username'] ~ input`).fill('demosalesmanager');
    await page.locator(`label[for='password'] ~ input`).fill('crmsfa');
    await page.locator(`label[for='password'] ~ input`).nth(1).click();
});

// >tag selector
test(`Tag selector by >`, async ({page}) => {

    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator(`div#usernameSpan > input`).fill('demosalesmanager');
    await page.locator(`div#passwordSpan > input`).fill('crmsfa');
    await page.locator(`div#loginSpan > input`).click();
});