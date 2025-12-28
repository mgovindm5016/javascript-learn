//Arrays
/*
    Basically its a dynamic in nature
    it can shrink and grow as per the requirements
        1. Push
        2. Pop
        3. Shift
        4. Unshift
        5. Slice
        6. Splice
        7. Spread Operator //similar to concatenation
        8. concat
        9. Sort

*/

//Push:
let fruits = ["Apple", "Banana"];
fruits.push("Orange"); //Adding new element at the end
console.log(fruits); //["Apple", "Banana", "Orange"]

//Pop:
fruits.pop(); //Removing last element
console.log(fruits); //["Apple", "Banana"]

//Unshift:
fruits.unshift("Mango"); //Adding new element at the beginning
console.log(fruits); //["Mango", "Apple", "Banana"]

//Shift:
fruits.shift(); //Removing first element
console.log(fruits); //["Apple", "Banana"]

//Slice:
let citrus = ["Lemon", "Orange", "Lime", "Grapefruit"];
let citrusSlice = citrus.slice(1, 3); //Extracting elements from index 1 to 2
console.log(citrusSlice); //["Orange", "Lime"]

//Splice:
let veggies = ["Carrot", "Potato", "Cabbage"];
veggies.splice(1, 1, "Broccoli", "Spinach"); //Removing 1 element at index 1 and adding 2 new elements
console.log(veggies); //["Carrot", "Broccoli", "Spinach", "Cabbage"]

//Spread Operator: combining two arrays
let tropicalFruits = ["Pineapple", "Mango"];
let kitchenFruits = ["Apple", "Banana"]
let allFruits = [...tropicalFruits, ...kitchenFruits]; //Combining two arrays
console.log(allFruits); //["Pineapple", "Mango", "Apple", "Banana"]

//concat:
let berries = ["Strawberry", "Blueberry"];
let jackBerries = ["Jackfruit"];
let mixedFruits = berries.concat(jackBerries); //Combining two arrays
console.log(mixedFruits); //["Strawberry", "Blueberry", "Jackfruit"]

//sort:
let numbers = [10,9,8,7,6];
numbers.sort(); //Sorting will happen randomly
console.log(numbers); //[6, 7, 8, 9, 10]

//Custom sort function for numbers
numbers.sort((a, b) => a - b); //Sorting in ascending order
console.log(numbers); //[6, 7, 8, 9, 10]

numbers.sort((a, b) => b - a); //Sorting in descending order
console.log(numbers); //[10, 9, 8, 7, 6]

