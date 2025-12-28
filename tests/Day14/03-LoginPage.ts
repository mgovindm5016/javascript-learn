import {chromium, Page} from "@playwright/test"


class LoginPage{


    lppage : Page // Global variable that hold the page instance "page"


    constructor(Tpage : Page){ // Tpage (Local variable) == page that is passed as a argument
       this.lppage = Tpage // this.lppage = Tpage (means lppage === page (instance))
    }


    async loadurl(url : string){
        await this.lppage.goto(url)  // await page.goto
    }


    async enterCredentials(username:string, password : string){
        await this.lppage.locator("#username").fill(username)
        await this.lppage.locator("#password").fill(password)
    }


    async clickLogin(){
        await this.lppage.locator("#Login").click()
    }


    async verifyTitle(){
        await this.lppage.waitForTimeout(3000)
        const title=await this.lppage.title()
            console.log(`The page title is : ${title}`)
        }


    async closeBrowser(){
        await this.lppage.close()
    }


}


async function doLogin(){


const browser = await chromium.launch({headless:false})
const context = await browser.newContext()
const page = await context.newPage()


const login = new LoginPage(page)


await login.loadurl(`https://login.salesforce.com/?locale=in`)
await login.enterCredentials("dilipkumar.rajendran@testleaf.com","TestLeaf@2025")   
await login.clickLogin()
await login.verifyTitle()
await login.closeBrowser()


}


doLogin()