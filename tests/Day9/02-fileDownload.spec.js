import { test } from "@playwright/test";
import path from "path";


test(`File Download handling`,async({page})=>{
    await page.goto(`https://leafground.com/file.xhtml`)
   const downloadPromise = page.waitForEvent(`download`); //listner for download event

   await page.getByText('Download',{exact:true}).click(); //triggering download

    const fileDownload = await downloadPromise; //resolving the download promise

    //saving download file to specific location

    await fileDownload.saveAs(`tests/Data/${fileDownload.suggestedFilename()}`);

    await page.waitForTimeout(4000)

});

//file to save abloute path
/*Start from the folder where this test file is located (`__dirname`)
* Move **two levels up** to reach the main project folder
* Go inside the **`Data`** folder
* Add the **original file name** automatically suggested by the browser.

*/

test.only(`File Download with absolute path`,async({page})=>{  
    
    await page.goto(`https://leafground.com/file.xhtml`)
   const downloadPromise = page.waitForEvent(`download`); //listner for download event

   await page.getByText('Download',{exact:true}).click(); //triggering download

    const fileDownload = await downloadPromise; //resolving the download promise

    //saving download file to specific location with absolute path

    await fileDownload.saveAs(path.join(__dirname, '../Data', fileDownload.suggestedFilename()));

    await page.waitForTimeout(4000)

})