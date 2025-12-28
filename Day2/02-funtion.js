//Function

function addTwoNumbers() {
    let num1 = 5;
    let num2 = 10;
    let sum = num1 + num2;
    console.log("The sum of", num1, "and", num2, "is:", sum);
}

addTwoNumbers();

//function with arguments
function addTwoNumbersWithArgs(num1, num2) {
    let sum = num1 + num2;
    console.log("The sum of", num1, "and", num2, "is:", sum);
}

addTwoNumbersWithArgs(7, 8);

//function with return

function addTwoNumberWithReturn(num1,num2){
    sum=num1+num2;
    return sum;
}

console.log("Sum  with return"+ + addTwoNumberWithReturn(13,20));
