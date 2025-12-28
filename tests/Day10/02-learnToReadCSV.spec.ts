import {test} from '@playwright/test';
import {parse} from 'csv-parse/sync'; //this parse is used to convert from csv to json
import fs from 'fs'; //file system to read data from file

//read the csv file and convert to json objects

let records :any[] = parse(fs.readFileSync('tests/Data/testData.csv'),{
    columns:true,
    skip_empty_lines:true
});

//forOF loop
for(const credentials of records){

    test(`Login test with username: ${credentials.tcid}`,async({page})=>{
    
        await page.goto('http://leaftaps.com/opentaps/control/main');
        await page.locator('#username').fill(credentials.username);
        await page.locator('#password').fill(credentials.password);
        await page.locator('.decorativeSubmit').click();
        await page.locator('text=CRM/SFA').click();
    
        await page.waitForTimeout(3000);
    })
}
