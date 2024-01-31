fname="Uma Bisht";
console.log(fname);
age=24;
price=99.999;
console.log("Age: "+age+" Price: "+price);

x=null;
y=undefined;
isFollow=true;
console.log(isFollow)


// TO Declare variables
/*

var ----> Global Scope (re-declare)
let ----> block Scoope (no re-declaration) and (can be updated)
const ---> block Scope (no re-declaration) and (cannot be updated)


by default a variable without any value is undefined
but in case of const without initalization --> error occurs
*/
let k;

const student={
    fname:"uma bisht",
    age:21,
    cgpa:8.9,
    isPass:true
};

student.cgpa=student.cgpa+.5;


// PRACTICE QUES 1
/*

*/

const product={
    pName:"Parker Jotter Standard CT Ball Pen (Black)",
    ratings:4,
    sPrice:270,
    originalPrice:285,
    discount:5,
    isDeal:true
};

// alert and prompt

// let fname = prompt("Hey There!!!");
// console.log(fname);


let fullname = prompt("Hey There!!!");
console.log(fullname); // If you input "John", this will output "John"


// PRACTICE QUES 2
/*

*/

let num=prompt("enter the multiple of 5: ");
if (num%5===0)
{
    console.log("Hurray.....It's a multiple of 5");
}
else
{
    console.log("Noooo.....It's not a multiple of 5");

}