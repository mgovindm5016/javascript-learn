
function stringReversal(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

let companyName= "TestLeaf";
let reversedCompanyName = stringReversal(companyName);
console.log(`Reverse company name ${companyName} is :` ,reversedCompanyName);

