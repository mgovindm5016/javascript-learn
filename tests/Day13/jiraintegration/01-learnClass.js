var Browser = /** @class */ (function () {
    function Browser() {
        this.browserInfo = "Chrome"; // Public access modifier// Properties / information used inside the method block
        this.browserVersion = 111;
    }
    Browser.prototype.launchBrowser = function () {
        console.log("Launching Chrome");
    };
    Browser.prototype.loadingPage = function () {
        console.log("Loading to Login page");
    };
    return Browser;
}());
var browser = new Browser();
browser.launchBrowser();
browser.loadingPage();
console.log(browser.browserInfo);
console.log(browser.browserVersion);
