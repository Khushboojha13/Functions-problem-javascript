//trim() method- Remove spaces with trim():

let text0 = "       Hello World!        ";
let result0 = text0.trim();
console.log(result0);


//replace() method- Remove spaces with replace() using a regular expression:
//yaha peplace jo bhi chize hai \t \n etc usko " " se replace kar dega 

let text1 = "       Hello World!        ";
let result1 = text1.replace(/^\s+|\s+$/gm,'');
console.log(result1);


let text = "How are you doing today?";
const myArray = text.split(" ");  //split() returns an array to index words from 0 
console.log(myArray);  
console.log("d");

//The split() method splits a string into an array of substrings.
//The split() method returns the new array.
//The split() method does not change the original string.
//If (" ") is used as separator, the string is split between words.

