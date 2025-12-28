import {test,expect} from '@playwright/test';
import RandomDataGenerator from '../utils/randomDataGenerator';
const sharedleadData = RandomDataGenerator.generateRandomLead();

test(`Selector Test`, async ({page}) => {
        await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator(`//input[@id='username']`).fill('demosalesmanager');
    await page.locator(`//input[@id='password']`).fill('crmsfa');
    await page.locator(` //input[@class='decorativeSubmit']`).click();
    await page.locator(`//a[contains(text(),'CRM/SFA')]`).click();
    await page.locator(`//a[text()='Leads']`).click();
    await page.locator(`//a[text()='Create Lead']`).click();
    await page.locator(`//input[@id='createLeadForm_companyName']`).fill(sharedleadData.companyName);
    await page.locator(`//input[@id='createLeadForm_firstName']`).fill(sharedleadData.firstName);
    await page.locator(`//input[@id='createLeadForm_lastName']`).fill(sharedleadData.lastName);

    //select source by value
    await page.selectOption(`//select[@id='createLeadForm_dataSourceId']`, { value: 'LEAD_EXISTCUST' });

    //getting count of options in the source dropdown by css selector
    const dropdownOptions = await page.locator(`#createLeadForm_dataSourceId>option`);
    const optionsCount = await dropdownOptions.count();

    console.log(`Total Options in Source Dropdown: ${optionsCount}`);

    //select marketing campaign by index
    await page.selectOption(`//select[@id='createLeadForm_marketingCampaignId']`, { index: 3 });

    //select industry by label
    await page.selectOption(`//select[@id='createLeadForm_industryEnumId']`, { label: 'Health Care' });

    //Select the currency by value
    await page.selectOption(`//select[@id='createLeadForm_currencyUomId']`, { value: 'BSD' });

    //print the selected options
    const selectedCurrency = await page.locator(`//select[@id='createLeadForm_currencyUomId']`).inputValue();
    console.log(`Selected Currency Value: ${selectedCurrency}`);

    //select country by label
    await page.selectOption(`//select[@id='createLeadForm_generalCountryGeoId']`, { label: 'India' });
    //print the selected country
    const selectedCountry = await page.locator(`//select[@id='createLeadForm_generalCountryGeoId']`).inputValue();
    console.log(`Selected Country Value: ${selectedCountry}`);

    await page.locator(`//input[@name='submitButton']`).click();

      // Verify Company Name
        const displayedCompanyName = await page.locator('//span[@id="viewLead_companyName_sp"]').textContent();
        console.log(`Expected Company: ${sharedleadData.companyName}`);
        console.log(`Displayed Company: ${displayedCompanyName}`);
        expect(displayedCompanyName).toContain(sharedleadData.companyName);


})