var num = 40; //here implictly we are telling the typescript that num is number type
var num1 = 50; //here explictly we are telling the typescript that num1 is number type
//Everytime in typescript we have to tell that what type of variable we are using like string , number , boolean etc
function addTwoNumber(a, b) {
    var c = a + b;
    return c;
}
console.log("Addition of two umber is :", addTwoNumber(10, 20));
