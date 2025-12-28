function numberType(num) {
    let numberCategory;
    if (num > 0) {
        numberCategory = "Positive";
    } else if (num < 0) {
        numberCategory = "Negative";
    } else {
        numberCategory = "Zero";
    }
    return numberCategory;

}

console.log("Given number type is :",numberType(-34));
console.log("Given number type is :",numberType(54));
console.log("Given number type is :",numberType(0));

