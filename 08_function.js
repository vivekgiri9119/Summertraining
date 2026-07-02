/* FUNCTION */

function myFunction(){
    console.log("WELCOME TO FUNCTION");
    console.log("HELLO");
}
myFunction();     //FUNCTION CALL


/*function declaration */

function myFunction(HELLO){     //PARAMETER 

    console.log(HELLO);
}

myFunction("WELCOME TO FUNCTION");     //ARGUMENT

/* function expression */

const greet = function () {
    console.log("Hello");
};

greet();


/* FUNCTION 2 NO SUM */

function sum (x,y){
    s = x+y;
    return s;
}
let val = sum (3,5);
console.log(val);

/* arrow function */

const message = () => {
    console.log("Hello");
};

message();


/* arrow function with parameters */

const arrowSum =(a,b)=>{
    console.log(a+b);
    
};
arrowSum(3,4)

/* default parameters */
function nick(name = "guest") {
    console.log("Hello " + name);
}

nick();
nick("vivek");

/*anonymous function */

setTimeout(function () {
    console.log("Hello");
}, 1000);

/* call back function */


function newmessage(name, callback) {
    console.log("Hello " + name);
    callback();
}

function bye() {
    console.log("Good Bye");
}

newmessage("Vivek", bye);

/*  cal square num */

let nums = [2,4,5,3,7,6];
let calsquare = (num)=>{
console.log(num * num);
}
nums.forEach(calsquare);

/* cal cube num */

let newNum = [2,4,5,3,7,6];
let callcube = (num)=>{
console.log(num ** 3);
};
newNum.forEach(callcube);




