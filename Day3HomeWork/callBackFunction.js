/*Call Back Function -Create a function named `getUserData` that takes a callback function as a parameter. Inside
`getUserData`, simulate fetching data with `setTimeout` and then call the callback function with
that should print “Call Back Function” after 3 seconds.
Call the `getUserData` function and log message using the callback function..*/

function getUserData(callback) {
    setTimeout(() => {
        console.log( "Call Back Function");
        callback();
    }, 3000);
}

function displayMessage() {
    console.log("Data fetched successfully:",);
}

getUserData(displayMessage);