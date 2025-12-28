function isAnagram(str1, str2) {
    // converting to lowercase
    let lowerCaseStr1 = str1.toLowerCase();
    let lowerCaseStr2 = str2.toLowerCase();

    // split into arrays, sort characters, then join back to strings
    let sortedStr1 = lowerCaseStr1.split('').sort().join('');
    let sortedStr2 = lowerCaseStr2.split('').sort().join('');

    // comparing the sorted strings
    return sortedStr1 === sortedStr2;
}
let str1="Listen";
let str2="Silent";
console.log(`Given two string "${str1}" , "${str2}" isAnagram ?:` , isAnagram(str1,str2) );

let str3="Hello";
let str4="World";
console.log(`Given two string "${str3}" , "${str4}" isAnagram ?:` , isAnagram(str3,str4) );
