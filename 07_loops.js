/* JavaScript Loops  */


// 1. for Loop //
for (i = 1; i <= 5; i++) {
    console.log(i);
}
console.log("loop is ended");

//calculate sum of 1to 5 //
let sum = 0;
for (i = 1; i <= 9; i++) {
    sum = sum + i;
}
console.log("sum = ", sum);

    
// 2. while Loop //


let a = 1;

while (a <= 7) {
    console.log(a);
    a++;
}



// 3. do...while Loop

let b = 1;

do {
    console.log(b);
    b++;
} 
while (b <= 5);


// 4. for...of Loop

const fruits = ["Apple","Banana", "Mango"];

for (const fruit of fruits) {
    console.log(fruit);
}


// 5. for...in Loop

 const student = {
    name: "Vivek",
    age: 20,
    course: "b.tech"
};

for (const key in student) {
    console.log(key + " : " + student[key]);
    // console.log(student[key]);
    
 }