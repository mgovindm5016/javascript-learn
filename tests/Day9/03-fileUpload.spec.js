import { test } from "@playwright/test";
import path from "path";


//upload with input tag with type=file

test(`File Upload with input tag as type =file `,async({page})=>{
    await page.goto(`https://leafground.com/file.xhtml`)

    //uploading file by directly providing path to setInputFiles method
   const fileUpload= page.locator(`(//input[@type='file'])[1]`);

   //await fileUpload.setInputFiles(`tests/Data/TestLeaf Logo.png`)
   await fileUpload.setInputFiles(path.join(__dirname, '../Data/TestLeaf Logo.png'))

    await page.waitForTimeout(4000)

})

//upload multiple files

test(`File Upload with multiple files`,async({page})=>{
    await page.goto(`https://leafground.com/file.xhtml`)

    //uploading multiple files by directly providing path to setInputFiles method
   const multiFileUpload= page.locator(`(//input[@type='file'])[2]`);

   //await multiFileUpload.setInputFiles([`tests/Data/TestLeaf Logo.png`,`tests/Data/SamplePDF.pdf`])
   await multiFileUpload.setInputFiles([path.join(__dirname, '../Data/TestLeaf Logo.png'),path.join(__dirname, '../Data/TestLeaf Logo (1).png')])

   await page.waitForTimeout(4000)

})

//Upload file without input tag as type=file

test.only(`File Upload input tag without  type=file`,async({page})=>{
    await page.goto(`https://the-internet.herokuapp.com/upload`)

    //create listner for file chooser event
    const fileUploadPromise=page.waitForEvent(`filechooser`);  //used to get the file and upload into application after choosing file and clicking

    page.locator(`//div[@id="drag-drop-upload"]`).click();

    const fileUpload= await fileUploadPromise;

    await fileUpload.setFiles([path.join(__dirname, '../Data/TestLeaf Logo.png'),path.join(__dirname, '../Data/TestLeaf Logo (1).png')]);

    await page.waitForTimeout(4000)
})