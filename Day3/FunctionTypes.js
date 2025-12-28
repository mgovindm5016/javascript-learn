/*
1.Named Function Types
2.Fuction expression /Ananymous Function
*/

//Named Function Types
function add(a, b) {
    return a + b;
}   
console.log("Named Function :" + add(3,4));

//Function expression /Ananymous Function

let expressFuc=function(){
    console.log("This is an anonymous function");
}
expressFuc();

//Arrow Function

let arrowFuc=()=>{//Flat arrow function
    console.log("This is an arrow function");
}
arrowFuc();

//single line arrow function
let singleLineArrowFuc=()=> console.log("This is a single line arrow function");
singleLineArrowFuc();

//Arrow function with parameters
let sum=(a,b)=> a+b;
console.log("Sum using arrow function with parameters: " + sum(5,7));

const arrFunctionSum=(x,y)=>x*y;
console.log("Multiplication using arrow function with parameters: " + arrFunctionSum(4,6));