//Object is collection of key and value

let userDetails ={

    firstname: "Govind",
    lastName:"raj",
    age:35
}

console.log(userDetails.firstname);  //accesing value inside an object using "dot notation"


//e.g explict strictly infere the object

let userDetails1 :{
     firstname: string,
    lastName:string,
    age:number
}={
     firstname: "Govind",
    lastName:"raj",
    age:35
}

console.log(userDetails1.age);

// square bracket notation

let userDetails2 :{
     "first-name": string,
    lastName:string,
    age:number
}={
     "first-name": "Govind",
    lastName:"raj",
    age:35
}

console.log(userDetails2["first-name"]);
