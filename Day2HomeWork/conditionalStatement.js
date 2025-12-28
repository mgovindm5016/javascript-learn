function launchBrowser(browserName) {
    if (browserName === "Chrome") {
        console.log("Launching Chrome browser");
    } else if (browserName === "Firefox") {
        console.log("Launching Firefox browser");
    } else if (browserName === "Safari") {
        console.log("Launching Safari browser");
    } else if (browserName === "Edge") {
        console.log("Launching Edge browser");
    } else {
        console.log("Invalid browser name");
}
}

launchBrowser("Safari"); // Output: Launching Safari browser
launchBrowser("Opera");  // Output: Invalid browser name

function runTests(env) {
    switch (env) {
        case "smoke,":
            console.log("Running Smoke Tests");
            break;
        case "regression":
            console.log("Running Regression Tests");
            break;
        case "sanity":
            console.log("Running Sanity Tests");
            break;
        default:
            console.log("Invalid test environment");
    }
}

runTests("regression"); // Output: Running Regression Tests
runTests("performance"); // Output: Invalid test environment