function printOddNumbers(limit) {
    for(let i=1;i<=limit;i++){
        if(i%2!==0){
            console.log("Odd Number :", i);
        }
    }
}

printOddNumbers(25);