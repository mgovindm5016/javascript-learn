/* Named function Create a function named `userProfile` 
that takes a `name` as a parameter and logs “Hello, */

function userProfile(name){
    console.log("Named Function :" ,name);
}
userProfile("Hello,<Name>!");

/*Arrow function -Create an arrow function named `double` that takes a number as a parameter and returns
double its value.*/
const double = (num) => num * 2;
console.log("Arrow Function : Double of 5 is", double(5));

/*Anonymous Function- Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"`
after 2 seconds.*/

let setTimeoutAnaamous= function(){
    console.log("This is an anonymous function using setTimeout");
}
setTimeout(setTimeoutAnaamous, 2000);


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






