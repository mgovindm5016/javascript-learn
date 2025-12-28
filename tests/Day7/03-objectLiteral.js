//Object is collection of key and value
var userDetails = {
    firstname: "Govind",
    lastName: "raj",
    age: 35
};
console.log(userDetails.firstname); //accesing value inside an object using "dot notation"
//e.g explict strictly infere the object
var userDetails1 = {
    firstname: "Govind",
    lastName: "raj",
    age: 35
};
console.log(userDetails1.age);
// square bracket notation
var userDetails2 = {
    "first-name": "GovindRaj",
    lastName: "raj",
    age: 35
};
console.log(userDetails2["first-name"]);
