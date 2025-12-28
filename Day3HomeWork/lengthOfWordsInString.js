function findLengthOfLastWord(Str){
    let words=Str.trim().split(" ");
    let lastWord=words[words.length-1];
    return lastWord.length;
}
let str="Hello World";
console.log((`Length of last word of the string  "${str}" is :`),findLengthOfLastWord(str));

let str1="   fly me   to   the moon  ";
console.log((`Length of last word of the string  "${str1}" is :`),findLengthOfLastWord(str1));


