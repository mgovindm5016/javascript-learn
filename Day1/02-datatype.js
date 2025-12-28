/*Types of datatypes in javascript

1. Primitive datatypes
  - String
  - Number
  -boolean
  - null
  - undefined

 2. Non-primitive datatypes
  - Object
  - Array
  - Function
*/

//number

var phoneNumber=9994282003
console.log("Phone number:",phoneNumber)
console.log("Type of phoneNumber:",typeof phoneNumber); //to check what type of datatype


var rateOfInterest=3.5
console.log("rateOfInterest:" ,rateOfInterest);
console.log("Type of rateOfInterest:",typeof rateOfInterest); //to check what type of datatype

//string
var customerName="John Doe" //String with double quotes
console.log("Customer Name with double quotes:",customerName);
console.log("Type of customerName:",typeof customerName); //to check what type of datatype

var customerName2='A' //String with single quotes
console.log("Customer Name2 with single quotes:",customerName2);
console.log("Type of customerName2:",typeof customerName2); //to check what type of datatype

var customerName3=`Alice` //String with backtick quotes
console.log("Customer Name3 with backtick quotes:",customerName3);
console.log("Type of customerName3:",typeof customerName3); //to check what type of datatype

//bigint
var bigNumber=1234567890123456789012345678901234567890n
console.log("Big Number:",bigNumber);
console.log("Type of bigNumber:",typeof bigNumber); //to check what type of datatype

//boolean
var isAccountActive=true
console.log("Is Account Active:",isAccountActive);
console.log("Type of isAccountActive:",typeof isAccountActive); //to check what type of datatype


//undefined
var accountNumber; //variable declared but not initialized
console.log("Account Number:",accountNumber);
console.log("Type of accountNumber:",typeof accountNumber); //to check what type of datatype


//null
var middleName=null  //is left empty intentionally by the customer
console.log("middleName:",middleName);
console.log("Type of middleName:",typeof middleName); //to check what type of datatype