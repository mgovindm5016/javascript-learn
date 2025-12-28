//type alias has two ypes
//1. Union type alias
//2. Intersection type alias
//Union type alias
var userName; //defining union type without alias
userName = "Govind";
userName = 1234;
console.log("Union Type Alias e.g ", userName);
var accountNumber;
accountNumber = "34567";
accountNumber = 34567;
accountNumber = true;
console.log("Custom Type Alias e.g ", accountNumber);
function invokeBrowser(browser) {
    console.log("Invoking browser :", browser);
}
invokeBrowser("Chrome");
invokeBrowser("Firefox");
var qaDetails = {
    adminName: "Govind",
    privileges: ["Modify", "Delete", "Create"],
    empName: "Raj",
    empId: 1234,
    startDate: "01-01-2024"
};
console.log("QA Details :", qaDetails);
console.log("QA Admin Name :", qaDetails.adminName);
console.log("QA Privileges :", qaDetails.privileges[1]);
