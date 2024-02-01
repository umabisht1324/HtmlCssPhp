// string is sequence of characters 

/*


built in methods/functions of strings in js

    1.str.length --> gives length of a string
    2.str.toUpperCase() --> convert the original string to upper case
    3.str.toLowerCase() --> convert the original string to upper case
    4.str.trim() --> trim or remove whitespaces

    Never changes original string rather create new string 

    5.str.slice(start,end) --> 2nd arguement is non inclusive
    6.str.concat(str1) --> add two strings
    7.str.replace(searchValue,newValue) --> replace the original value with new value
    8.str.charAt(indx) --> give char at particular index

*/


let str="uma bisht";
console.log(str.length);


// Template Literals --> a way to have embedded expression in strings
// also known as string interpolation 
// `string text ${expression} string text`


let sentence=`This is a template literals`;
console.log(sentence);
console.log(typeof sentence);


let obj={
    item:"pen",
    price:10,
};

console.log("the cost of ",obj.item," is ",obj.price," rupees.");

console.log(`The cost of ${obj.item} is ${obj.price} rupees`); 


// Practice ques -5

let userName=prompt("Enter your username: ");
let len=userName.length;
let username="@"+userName+len;
console.log(username);