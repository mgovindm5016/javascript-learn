//using angukar brackets
var firstName = "Govindaraj Murugesan"; //Hard coding with exact datatype
var response = "Hello World"; //response from API
var myResponse = response; //type assertion using angular brackets
var myResponse1 = response; //type assertion using as keyword
console.log("Using angular brackets: " + myResponse.toUpperCase());
console.log("Using as keyword: " + myResponse1.toLowerCase());
//age
var myAge = 25;
var myexactAge = myAge;
console.log("my exact age lneth is :", myexactAge.length);
//here compiler will assume myexactAge as string so you wont get error while using string property
