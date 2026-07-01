/* basic switch */

let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid Day");
}

/*multiple cases */

let fruit = "apple";

switch (fruit) {
    case "apple":
        console.log("Apple");
        break;

    case "banana":
        console.log("Banana");
        break;

    case "mango":
        console.log("Mango");
        break;

    default:
        console.log("Not Found");
}

/*multiple cases with same output */

let week = 6;

switch (week) {
    case 6:
    case 7:
        console.log("Weekend");
        break;

    default:
        console.log("Weekday");
}

/* default case */

let color = "Pink";

switch (color) {
    case "Red":
        console.log("Red");
        break;

    case "Blue":
        console.log("Blue");
        break;

    default:
        console.log("Color Not Found");
}


/*switch without break */

let num = 1;

switch (num) {
    case 1:
        console.log("One");

    case 2:
        console.log("Two");

    case 3:
        console.log("Three");
}


/*switch withnumber */

let month = 4;

switch (month) {
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 4:
        console.log("April");
        break;

    default:
        console.log("Invalid");
}