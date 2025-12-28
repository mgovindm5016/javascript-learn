function intersection(arr1, arr2) {
    var result = [];
    // Iterating through each element of arr1 
    for (var i = 0; i < arr1.length; i++) {
        // Checking if element is present in arr2 and not already in result
        if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }
    return result;
}
// Example 1: Typical case with some common elements
var array1 = [1, 2, 3, 4, 5];
var array2 = [3, 4, 5, 6, 7];
console.log('Example 1 - Common elements:', intersection(array1, array2));
// Output: [3, 4, 5]
// Example 2: No common elements
var array3 = [1, 2, 3];
var array4 = [4, 5, 6];
console.log('Example 2 - No common elements:', intersection(array3, array4));
// Output: []
// Example 3: All elements common
var array5 = [10, 20, 30];
var array6 = [10, 20, 30];
console.log('Example 3 - All elements common:', intersection(array5, array6));
// Output: [10, 20, 30]
// Example 4: Arrays with duplicates
var array7 = [1, 2, 2, 3, 4, 4, 5];
var array8 = [2, 4, 4, 6, 8];
console.log('Example 4 - With duplicates (no duplicates in result):', intersection(array7, array8));
// Output: [2, 4]
// Example 5: One empty array
var array9 = [1, 2, 3];
var array10 = [];
console.log('Example 5 - One empty array:', intersection(array9, array10));
// Output: []
