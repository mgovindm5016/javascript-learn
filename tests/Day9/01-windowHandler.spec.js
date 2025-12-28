import { test } from "@playwright/test";
import { log } from "console";


test(`window handle in flipcart by sequence`, async({context,page})=>{
    

    await page.goto(`https://www.flipkart.com/`);
    const searchBar= page.locator(`//input[@title='Search for Products, Brands and More']`);
    await searchBar.fill(`mobiles`);
    await searchBar.press(`Enter`);
    //getting title of parent window
    await page.waitForTimeout(3000)

    
    const newPage= context.waitForEvent(`page`); //pending action //step 1-listner

    await page.locator(`//div[contains(text(),'POCO C71 (Desert Gold, 64 GB)')]`).click(); //click event step 2

    const childPage=await newPage; //step 3: resolving promise ,The page is captured by this time,//now promise is resoved ones playwright

        console.log(`Parent page title is:` + await page.title());
        console.log(`Child page titke is :` + await childPage.title()); //getting title of child page

    //if want to come back to parent page from current child page

    await page.bringToFront();

    await page.locator(`//span[contains(text(),'Electronics')]`).click();

     await page.waitForTimeout(3000)

    //again going back to child page use same method with child refernce

    await childPage.bringToFront(); 

     await page.waitForTimeout(4000)

    await childPage.locator(`//a[text()='128 GB']`).click()


    await page.waitForTimeout(4000)

})


test(`Window handler concurrently`,async({context,page})=>{
    await page.goto(`https://www.flipkart.com/`)
    const searchBax= page.locator(`//input[@title='Search for Products, Brands and More']`);
    searchBax.fill(`mobiles`)
    searchBax.press(`Enter`)
    
    await page.waitForTimeout(4000)
            console.log(`Parent page title is:` + await page.title());


    const [childPage]=await Promise.all([context.waitForEvent(`page`),page.locator(`//div[contains(text(),'POCO C71 (Desert Gold, 64 GB)')]`).click()])
        //Array destructuring to get the reference of the child page
        console.log(`Child page title is :` + await childPage.title()); //getting title of child page

        //click on ram size to 6 GB from 4 GB in child page 
    await childPage.locator(`//a[text()='6 GB']`).click()

    const PhoneNameWith6GB=await childPage.locator(`//span[contains(@class,'LMizgS')]`).textContent();
    console.log(`Phone name of 6 gb is :`+ PhoneNameWith6GB);



    //Going back to parent page from current child page
    await page.bringToFront();
    await page.locator(`//span[contains(text(),'Electronics')]`).click();
    await page.waitForTimeout(4000)

    //again for going back to child page ,use same method with child refernce

    await childPage.bringToFront(); 
    await childPage.locator(`//a[text()='128 GB']`).click()
    //get 128 gb price

    const phonePrice=await childPage.locator(`//div[contains(@class,'hZ3P6w bnqy')]`).textContent();
    console.log(`Phone price is :`+ phonePrice);

    await childPage.waitForTimeout(4000)

})


test.only(`Multiple window handling`,async({context,page})=>{
    await page.goto(`https://www.flipkart.com/`)
    const searchBax= page.locator(`//input[@title='Search for Products, Brands and More']`);
    searchBax.fill(`mobiles`)
    searchBax.press(`Enter`)
    
    await page.waitForTimeout(4000)
            console.log(`Parent page title is:` + await page.title());  
    //clicking on multiple links in the parent page which will open multiple child pages
    const links= page.locator(`//div[contains(text(),'POCO C71 (Desert Gold, 64 GB)')]`);
    const count= await links.count();
    const [childPage]=await Promise.all([context.waitForEvent(`page`),links.nth(i).click()])

    for(let i=0;i<count;i++){
        console.log(`Child page ${i} title is :` + await childPage.title()); //getting title of child page
        await childPage.waitForTimeout(2000)
    }

})

