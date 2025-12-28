//block Scoping using var

if(true){
    var companyName1="ArcticWolf"
    console.log("Accessing var companyname inside block:",companyName1);    
}
console.log("Accessing var company Name outside the block:",companyName1);

//block Scoping using let

if(true){
    let companyName2="BlackBerry"
    console.log("Accessing let companyname inside block:",companyName2);    
}
console.log("Accessing let company Name outside the block:",companyName2);


//block Scoping using const

if(true){
    let companyName3="Annalect"
    console.log("Accessing const companyname inside block:",companyName3);    
}
console.log("Accessing const company Name outside the block:",companyName3);
