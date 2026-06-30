// CONDITIONAL STATEMENT //

/* if statement */

let age = 20;

if (age >= 18) {
    console.log("Eligible to Vote");
}
if (age >= 22) {
    console.log("Eligible to NOT Vote");
}

/* if else */

let number = 10;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

/* if else if */

let marks = 82;

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 80) {
    console.log("Grade B");
}
else if (marks >= 70) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}

/* nested if */

let age2 = 20;
let license = true;

if (age2 >= 18) {

    if (license) {
        console.log("Can Drive");
    }

}


/* switch */

let day = 3;

switch(day){

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");

}

/* ternary  */

let age3 = 17;

let result = age3 >= 18 ? "Adult" : "Minor";

console.log(result);