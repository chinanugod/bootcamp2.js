// ✅ SECTION 5 — TERNARY OPERATOR

// Beginner
// 1.  Write a ternary statement to check if a number is even or odd.
let number = 5;

let result = (number % 2 === 0) ? "Even" : "Odd";

console.log(result);



// Intermediate (Test)
// 1.  Use a ternary to check if a user age is 18+ and print:
// “Adult”
// “Minor”

let age = 47;

let ageStatus = (age >= 18) ? "Adult" : "Minor";

console.log(ageStatus);


// Advanced (Challenge accepted)
// 1.  Convert this if...else into a ternary:
// if (score >= 70) {
// grade = "Pass";
// } else {
// grade = "Fail";
// }

let score = 85; // example

let grade = (score >= 70) ? "Pass" : "Fail";
console.log(grade); // Pass
