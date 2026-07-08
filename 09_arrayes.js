//array create //

let  student = ["ram","rahul","vivek","ayush"];
console.log(student);

//find array length //
console.log(student.length);

//array element access karna //
console.log(student[2]);

//update array element //
student[1] = "lion";
console.log(student);

// pop() and push()//

let marks = ["2","4","6","8","10"]
marks.pop();
console.log(marks);  //end se remove

marks.push("12");
console.log(marks);  //end me add


//unshift() and shift()//

let rollno = ["1001","1002","1003","1004","1005"];
rollno.unshift("1000");
console.log(rollno);   //start me add

rollno.shift();
console.log(rollno);   //start se remove


// indexof() and includes() //

let fruits = ["apple","banana","mango"];

console.log(fruits.includes("apple"));
console.log(fruits.includes("cat"));

console.log(fruits.indexOf("banana"));


//for loop with array  and for...of loop //

let name = ["vivek","ayush","rahul","ravi"];

for(let i = 0; i < name.length; i++){
    console.log(name[i]);
    
}


let names = ["vivek","ravi","ayush","rahul"]
for (let name of names){
    console.log(name);
    
}


//sum of all no array //
let numbers = [10,20,30,40,10,20,];
let sum = 0;

for (let i=0; i< numbers.length; i++){
    sum = sum+numbers[i];
}

console.log("sum="+ sum);


//largest no of array //

let number = [10, 50, 20, 80, 30];

let largest = number[0];

for (let i = 1; i < number.length; i++) {
    if (number[i] > largest) {
        largest = number[i];
    }
}

console.log("Largest = " + largest);  


// reverse an array //

 let num = [10,20,30,40,50];

 num.reverse();
 console.log(num);
 


 //count even or odd number  //

 let id = [10, 15, 20, 25, 30, 35];

let even = 0;
let odd = 0;

for (let i = 0; i < id.length; i++) {

    if (id[i] % 2 === 0) {
        even++;
    } 
    else
         {
        odd++;
    }

}

console.log("Even = " + even);
console.log("Odd = " + odd);
