

class Browser{

browserInfo : string  = "Chrome" // Public access modifier// Properties / information used inside the method block
browserVersion :number = 111

launchBrowser(){
    console.log("Launching Chrome");    
}

loadingPage(){
    console.log("Loading to Login page");    
}
}

let browser = new Browser()
browser.launchBrowser()
browser.loadingPage()
console.log(browser.browserInfo)
console.log(browser.browserVersion)