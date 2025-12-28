/*
1. Create an enum named `Environment` with four values representing different stages of a
software development process: `LOCAL`, `DEVELOPMENT`, `STAGING`,
`PRODUCTION`.
2. Write a function named `runTests` that accepts an argument of type `Environment`. The
function should print a message indicating the environment against which the tests are
running.
3. The function `runTests` should be specified to return `void`, highlighting that it does not
return any data.
4. Include example calls to `runTests` using different enum values to demonstrate
the function's functionality.


*/

enum Environment {
    LOCAL,
    DEVELOPMENT,
    STAGING,
    PRODUCTION
}

function runTests(env: Environment): void {
    console.log(`Running tests in the ${Environment[env]} environment.`);   
    return
}

// Example calls to runTests function
runTests(Environment.STAGING);       // Output: Running tests in the STAGING environment.
runTests(Environment.PRODUCTION);    // Output: Running tests in the PRODUCTION environment.

