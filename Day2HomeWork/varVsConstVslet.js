const browserName = "Chrome";

function getBrowserName() {
    if(browserName==="Chrome"){
        var localBrowserName="Firefox";
        console.log("Inside block :", localBrowserName);
    }
    console.log("Outside block :", browserName); 
}

getBrowserName();