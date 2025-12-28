//using angukar brackets


let firstName: String = "Govindaraj Murugesan"; //Hard coding with exact datatype


let response :  any = "Hello World"; //response from API

let myResponse = <string>response; //type assertion using angular brackets

let myResponse1 = response as string; //type assertion using as keyword

console.log("Using angular brackets: "+ myResponse.toUpperCase());
console.log("Using as keyword: "+ myResponse1.toLowerCase());


//age

let myAge: any = 25;

let myexactAge =<string> myAge;
console.log("my exact age lneth is :",myexactAge.length);

//here compiler will assume myexactAge as string so you wont get error while using string property
