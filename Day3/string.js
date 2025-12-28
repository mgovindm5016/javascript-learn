/*

String Declartion in JavaScript

There are 3 ways to declare a string in JavaScript: 
1. Using double quotes ""
2. Using single quotes ''
3. Using backticks `` (template literals)
*/

/*
String literals

A string literal is a sequence of characters enclosed in quotes.
Object literals are used to store multiple values in a single variable.
*/

//String literals examples (Uses Stack to store the values)

let string1 = "Hello, World!"; // Using double quotes
let string2 = 'Hello, World!'; // Using single quotes
let string3 = `Hello, World!`; // Using backticks (template literals)   

console.log(string1);
console.log(string2);
console.log(string3);   

let companyName ="TechCorp";
let newCompanyName="TechCorp";

console.log(companyName === newCompanyName); // true


//object literals examples (Uses Heap to store the values)

let stringObj1 = new String("Hello, World!"); // Using String object
let stringObj2 = new String("Hello, World!"); // Using String object    

console.log(stringObj1);
console.log(stringObj2);    
console.log(stringObj1 === stringObj2); // false