import {test} from '@playwright/test';
const RandomDataGenerator = require('../utils/randomDataGenerator.js');

test('Random Data Generator Demo', async () => {
    console.log('\n=== Random Data Generator Demo ===');
    
    // Generate individual random values
    console.log('Random First Name:', RandomDataGenerator.getRandomFirstName());
    console.log('Random Last Name:', RandomDataGenerator.getRandomLastName());
    console.log('Random Company Name:', RandomDataGenerator.getRandomCompanyName());
    console.log('Random Department:', RandomDataGenerator.getRandomDepartment());
    console.log('Random Job Title:', RandomDataGenerator.getRandomJobTitle());
    console.log('Random Phone Number:', RandomDataGenerator.getRandomPhoneNumber());
    console.log('Random Annual Revenue:', RandomDataGenerator.getRandomAnnualRevenue());
    
    // Generate multiple complete lead objects
    console.log('\n=== Generated Lead Data (5 examples) ===');
    for (let i = 1; i <= 5; i++) {
        const lead = RandomDataGenerator.generateRandomLead();
        console.log(`\nLead ${i}:`);
        console.log(`  Name: ${lead.firstName} ${lead.lastName}`);
        console.log(`  Company: ${lead.companyName}`);
        console.log(`  Job Title: ${lead.jobTitle}`);
        console.log(`  Department: ${lead.department}`);
        console.log(`  Phone: ${lead.phoneNumber}`);
        console.log(`  Annual Revenue: $${lead.annualRevenue.toLocaleString()}`);
        console.log(`  Email: ${lead.email}`);
        console.log(`  Personal Title: ${lead.personalTitle}`);
    }
});

test('Generate Random Data for Form Testing', async () => {
    // Example of how to use in a real test scenario
    const testData = [];
    
    // Generate 3 different test cases
    for (let i = 0; i < 3; i++) {
        testData.push(RandomDataGenerator.generateRandomLead());
    }
    
    console.log('\n=== Test Data for Multiple Test Cases ===');
    testData.forEach((data, index) => {
        console.log(`\nTest Case ${index + 1}:`);
        console.log(`Company: ${data.companyName}`);
        console.log(`Contact: ${data.firstName} ${data.lastName}`);
        console.log(`Position: ${data.jobTitle} in ${data.department}`);
    });
});