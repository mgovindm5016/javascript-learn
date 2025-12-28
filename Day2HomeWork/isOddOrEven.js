function isOddOrEven(number) {
    let result;
    if(number % 2 === 0) {
        result = "Even";
    }else{
        result = "Odd";
    }
    return result;
}

console.log("Given number is :" ,isOddOrEven(27864));
