import {  test} from "@playwright/test";
import dotenv from "dotenv"

//dotenv.config({path:`tests/Data/qa.env`})
//dotenv.config({path:`tests/Data/prod.env`})

let fileName=process.env.envFile || `qa` // if i not provide filename in runtime it will take qa

// $env:envFile=`prod` used in terminal to switch between environment

//set environment dynamic
dotenv.config({path:`tests/Data/${fileName}.env`})

test(`learn to read data from env file`,async({page})=>{
   // console.log(process.env.BaseUrl);
    //console.log(process.env.LF_Username);
    //console.log(process.env.LF_Password);
    
     await page.goto(process.env.BaseUrl as string);
        await page.locator('#username').fill(process.env.LF_Username as string);
        await page.locator('#password').fill(process.env.LF_Password as string);
        await page.locator('.decorativeSubmit').click();
        await page.locator('text=CRM/SFA').click();
    
        await page.waitForTimeout(3000);

})