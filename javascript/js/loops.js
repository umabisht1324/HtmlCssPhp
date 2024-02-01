// for loop

for(let i=1;i<=5;i++)
{
    console.log("Hey Uma....");
}

// sum of first n numbers
let sum=0;
for(let i=1;i<=5;i++)
{
    sum=sum+i;
}

console.log("Sum: "+sum);

// while loop

let i=0;
while(i<5)
{
    console.log("Uma");
    i++;
}



/*
1- for of
these loops helps in using loops in strings and arrays
2- for in
these loops are used in objects and arrays
*/

// for of 
let str="uma bisht";
console.log("\n");
for (let val of str)
{
    console.log(val);
}

console.log("\n");
for(let i=0;i<8;i++)
{
    console.log(str[i]);
}

// for in

let student={
    fname:"uma bisht",
    age:21,
    cgpa:8.9,
    isPass:true
};

for(let i in student)
{
    console.log("Key: "+i," Value: "+student[i]);
}

// practice ques - 3

for(let i=1;i<101;i++)
{
    if(i%2==0)
    {
        console.log(i+" ");
    }
}

// practice ques - 4

let gameNo=15;
let userNo=prompt("Guess the Number to win.....");
while(userNo!=gameNo)
{
    userNo=prompt("You Enter Wrong Number ...Guess Number");
}
console.log("Congrats....You Win.");