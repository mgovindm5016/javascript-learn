//type alias has two ypes
//1. Union type alias
//2. Intersection type alias

//Union type alias


let userName : string | number ; //defining union type without alias

userName = "Govind";
userName=1234;

console.log("Union Type Alias e.g ",userName);

//Creating new datype which as string , number ,boolean using type alias

type customType = string | number | boolean;

let accountNumber : customType;

accountNumber ="34567";
accountNumber=34567;
accountNumber=true;

console.log("Custom Type Alias e.g ",accountNumber);

//allias name for values

type supportingBrowser= "Chrome" | "Firefox" | "Safari" ;

function invokeBrowser(browser:supportingBrowser){
    console.log("Invoking browser :",browser);
}

invokeBrowser("Chrome");
invokeBrowser("Firefox");
//invokeBrowser("Edge"); //Error as Edge is not part of supportingBrowser

//*****************Intersection type alias(we have to mandatory use all the types in the custom type)*****************************************
//Creating new type which is combination of Admin and Employee using intersection type alias

type Admin={
    adminName:string,
    privileges:string[]
}

type Employee={
    empName:string,
    empId:number,
    startDate:String
}

type QA= Admin & Employee;

let qaDetails : QA ={
    adminName:"Govind",
    privileges:["Modify","Delete","Create"],
    empName:"Raj",
    empId:1234,
    startDate:"01-01-2024"

}

console.log("QA Details :",qaDetails);
console.log("QA Admin Name :",qaDetails.adminName);
console.log("QA Privileges :",qaDetails.privileges[1]);

