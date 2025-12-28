//Compound operators

let a = 10;
a += 5; // a = a + 5
console.log("Addition :" ,a); // 15


a-= 3; // a = a - 3
console.log("Sub :"+ a); // 12

a*= 2; // a = a * 2
console.log("Multiply :",a); // 24   


//post increment

let b = 5;
console.log("Post Increment ,it will just do increment , not add with original value" , b++);//5
console.log("Post Increment value :" , b);//6

//pre increment
let c = 5;
console.log("Pre Increment ",++c);//6
console.log("PreIncremnt :", c);//6

//post decrement
let d = 5;
console.log("Post Decrement ,it will just do decrement , not add with original value" , d--);//5
console.log("Post Decrement value :" , d);//4

//pre decrement
let e = 5;
console.log("Pre Decrement ",--e);//4
console.log("PreDecremnt :", e);//4


/*
Strict equality(===) operator
The strict equality operator (===) checks for both value and 
type equality without performing type coercion.
*/

let num1 = 5; //number
let num2 = '5'; //string    
console.log("Strict Equality Operator :", num1 === num2); // false
console.log("strict Equality Operator :", num1 === 5); // true

/*
Loose equality(==) operator
The loose equality operator (==) checks for value equality 
after performing type coercion if necessary.
*/  
console.log("Loose Equality Operator :", 5 == '5'); // true 
console.log("Loose Equality Operator :", true == 5); // false
console.log("Loose Equality Operator :", 1 == true); // true

//true == 1
//false == 0

//null == undefined
console.log("Loose Equality Operator :", null == undefined); // true