//String Methods in JavaScript


// 1.String escape sequences

let stringWithQuotes = "He said, \"Hello!\""; // Using escape sequence for double quotes
console.log(stringWithQuotes); // Output: He said, "Hello!"

//2. String concat() method

let testCase = "Create a New Lead, ";
let testCaseId = "123 ";
let testCaseDetails=testCaseId.concat(testCase);
console.log("String with concat: " + testCaseDetails); // Output: 123 Create a New Lead,

    // with number
let testCaseName = "Test Case ID: ";
let jiraId = 456;
let fullTestCaseName =testCaseName.concat(jiraId.toString());
console.log("String with converting number to toString method :"+ fullTestCaseName); // Output: 456Test Case ID:

    // with +

let fullTestCaseName2 = testCaseName+jiraId;
console.log("String with Concat with + :"+ fullTestCaseName2); // Output: 456Test Case ID:


//3.String with Template Literals --> Using backticks ``  e.g. `${variable}`,getting
// dynamic values from out side variables


function generateTestCaseDetails(testCaseId){
    let testCaseDescription = `The Test Case ID is: ${testCaseId}`;
    console.log("Template Literal value: "+ testCaseDescription);
}

generateTestCaseDetails(789); // Output: The Test Case ID is: 789

//4.String length property

let course = "Playwright";
console.log(`Length of the string ${course} is: ` + course.length); // Output: 10


//5. String charAt() method

console.log(`The charAt of  2 of the course string is ${course.charAt(2)}`); // Output: a

//6. String indexOf() method

console.log(`The indexOf of 'W' in the course string is: ${course.indexOf('W')}`); // Output: 4

//7. String Slice() method -split depends on the index

let slicedString = course.slice(0, 4);  // Slices from index 0 to 4 (not including 4)
console.log(`The sliced string is: ${slicedString}`); // Output: Play

let slicedString2 = course.slice(-4,-2 );    // Slices from index -4 to -2 (not including -2)
console.log(`The sliced string with negative index is: ${slicedString2}`); // Output: ig

let slicedString3 = course.slice(-2, -4 )// Cannot slice from -2 to -4 , since -2 is greater than -4
console.log(`The sliced string with negative index is: ${slicedString3}`); // Output: (empty string)

let slicedString4 = course.slice(5 )// if we provide only one argument it will slice from that index to end of the string
console.log(`The sliced string with single argument is: ${slicedString4}`); // Output: right

/*
Summary of Slice method:
slice(startIndex, endIndex)
- Extracts a section of a string and returns it as a new string.    
- startIndex: The index at which to begin extraction (inclusive).
- endIndex: The index at which to end extraction (exclusive). If omitted, extracts to the end of the string.
- Negative indices can be used to indicate positions from the end of the string.

*/

//8.String substring() method - split depends on the index
let substring1 = course.substring(2, 4);  // Extracts from index 2 to 4 (not including 4)
console.log(`The substring is: ${substring1}`); // Output: ay

let substring2=course.substring(4,2) // Swaps the indices if startIndex is greater than endIndex
console.log(`The substring with swapped indices is: ${substring2}`); // Output: ay

let substring3=course.substring(-4,2) // Treats negative indices as 0
console.log(`The substring with negative index is: ${substring3}`); // Output: Pl

let substring4=course.substring(-4,-2) //it will give empty string
console.log(`The substring with negative indices is: ${substring4}`); // Output: (empty string)

let substring5=course.substring(5) // if we provide only one argument it will slice from that index to end of the string
console.log(`The substring with single argument is: ${substring5}`); // Output: right

let substring6=course.substring(-5) // if we provide only negative single argument it will consider as 0 and slice from 0 to end of the string
console.log(`The substring with single negative argument is: ${substring6}`); // Output: Playwright


