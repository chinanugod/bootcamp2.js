// BEGINNER
/* 1.  Write a switch statement that prints the name of the day 
when given a number from 1–7 (Sunday - Saturday). */
 
let day = 5;

switch(day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day number");
}

console.log("Nice")

// INTERMEDIATE
/* 
Intermediate (Test)
1.  Create a variable trafficLight and assign a value “yellow.;

2.  Use switch to print what the trafficLight should print:
"Stop"
"Get Ready"
"Go"
*/

// Traffic light instructions using switch
let trafficLight = "yellow"; 

switch(trafficLight) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Get Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid traffic light color");
}

console.log("Nice")

// ADVANCE
/*
1.  Write a switch program that takes a fruit name and prints its price:
Apple → 200
Banana → 150
Orange → 100
Default → “Fruit not available”
*/

// Fruit price using switch
let fruit = "Apple";

switch(fruit) {
    case "Apple":
        console.log("Price: 200");
        break;
    case "Banana":
        console.log("Price: 150");
        break;
    case "Orange":
        console.log("Price: 100");
        break;
    default:
        console.log("Fruit not available");
}

console.log("Nice")
