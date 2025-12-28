import {test,chromium,expect} from '@playwright/test';
const RandomDataGenerator = require('../utils/randomDataGenerator.js');

// Generate shared data that will be used across both tests
const sharedLeadData = RandomDataGenerator.generateRandomLead();

test('Create and Verify Lead',async()=>{
    const browser=await chromium.launch({channel:'msedge'});
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator('#username').fill('demosalesmanager');
    await page.locator('#password').fill('crmsfa');
    await page.locator('.decorativeSubmit').click();
    await page.locator('text=CRM/SFA').click();
    await page.locator('a[href="/crmsfa/control/leadsMain"]').click();
    await page.locator('a[href="/crmsfa/control/createLeadForm"]').click();

    // Use the shared data for creating the lead
    console.log('Using Shared Lead Data:', sharedLeadData);

    await page.locator('#createLeadForm_companyName').fill(sharedLeadData.companyName);
    await page.locator('#createLeadForm_firstName').fill(sharedLeadData.firstName);
    await page.locator('#createLeadForm_lastName').fill(sharedLeadData.lastName);
    await page.locator('#createLeadForm_personalTitle').fill(sharedLeadData.personalTitle);
    await page.locator('#createLeadForm_generalProfTitle').fill(sharedLeadData.jobTitle);
    await page.locator('#createLeadForm_annualRevenue').fill(sharedLeadData.annualRevenue.toString());
    await page.locator('#createLeadForm_departmentName').fill(sharedLeadData.department);
    await page.locator('#createLeadForm_primaryPhoneNumber').fill(sharedLeadData.phoneNumber);
    await page.locator('.smallSubmit').click();
   
    // Verify the created lead details
    console.log('\n=== Verifying Lead Details ===');
    
    // Verify Company Name
    const displayedCompanyName = await page.locator('#viewLead_companyName_sp').textContent();
    console.log(`Expected Company: ${sharedLeadData.companyName}`);
    console.log(`Displayed Company: ${displayedCompanyName}`);
    expect(displayedCompanyName).toContain(sharedLeadData.companyName);
    
    // Verify First Name
    const displayedFirstName = await page.locator('#viewLead_firstName_sp').textContent();
    console.log(`Expected First Name: ${sharedLeadData.firstName}`);
    console.log(`Displayed First Name: ${displayedFirstName}`);
    expect(displayedFirstName).toBe(sharedLeadData.firstName);
    
    // Verify Last Name
    const displayedLastName = await page.locator('#viewLead_lastName_sp').textContent();
    console.log(`Expected Last Name: ${sharedLeadData.lastName}`);
    console.log(`Displayed Last Name: ${displayedLastName}`);
    expect(displayedLastName).toBe(sharedLeadData.lastName);
  
    // Verify the page title contains the lead name
    const pageTitle = await page.title();
    console.log(`Page Title: ${pageTitle}`);
    expect(pageTitle).toContain('View Lead');
        
    await browser.close();
})
    
test('edit lead test',async()=>{
    const browser=await chromium.launch({channel:'msedge'});
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator('#username').fill('demosalesmanager');
    await page.locator('#password').fill('crmsfa');
    await page.locator('.decorativeSubmit').click();
    await page.locator('text=CRM/SFA').click();
    await page.locator('a[href="/crmsfa/control/leadsMain"]').click();
    //Find Leads

    await page.locator('a[href="/crmsfa/control/findLeads"]').click();

    //Enter first name
    await page.locator('input[name="firstName"]').last().fill(sharedLeadData.firstName);    
    await page.locator('button:has-text("Find Leads")').click();

    //click on first resulting lead
    await page.locator('a[href^="/crmsfa/control/viewLead?partyId="]').first().click();
    
    //click edit
    await page.locator('a:has-text("Edit")').click();

    //change company name - updating the original company name
    const newCompanyName="Updated "+sharedLeadData.companyName;
    await page.locator('#updateLeadForm_companyName').fill(newCompanyName);

    //change annual revenue - updating the original revenue
    const newAnnualRevenue=10 * sharedLeadData.annualRevenue;
    await page.locator('#updateLeadForm_annualRevenue').fill(newAnnualRevenue.toString());

    //edit department - updating the original department
    await page.locator('#updateLeadForm_departmentName').fill('Updated '+sharedLeadData.department);
    //edit description
    await page.locator('#updateLeadForm_description').fill('This is an updated description.');

    await page.locator('input[value="Update"]').click();
    //verify the changes
    const updatedCompanyNameDisplayed=await page.locator('#viewLead_companyName_sp').textContent();
    console.log(`Verifying updated company name. Expected to contain: ${newCompanyName}, Displayed: ${updatedCompanyNameDisplayed}`);
    expect(updatedCompanyNameDisplayed).toContain(newCompanyName);  

    //title verification
    const updatedPageTitle=await page.title();
    console.log(`Verifying page title after update: ${updatedPageTitle}`);
    expect(updatedPageTitle).toContain('View Lead');
    
    await browser.close();
})
