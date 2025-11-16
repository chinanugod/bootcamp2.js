// ✅ SECTION 3 — STRINGS & STRING METHODS

// Beginner
// 1.  Declare a string variable containing your full name. Print:
// The length
// The first character
// The last character
// Method 1
let fullName = "Nwaohangwa Chinanu Godwin";

console.log("Length of full name:", fullName.length);
console.log("First character:", fullName.charAt(0));
console.log("Last character:", fullName.charAt(fullName.length - 1));

// Method 2
/* 
let fullName = "Nwaohangwa Chinanu Godwin";
console.log("Length of full name:", fullName.length);
console.log("First character:", fullName[0]);

// Print the last character
console.log("Last character:", fullName[fullName.length - 1]);
*/

// 2.  Write a program to convert a string to uppercase and lowercase.
 
let programText = "My Name On Veltrix";

console.log(programText.toUpperCase());
console.log(programText.toLowerCase());




// Intermediate (Test)
// 1.  Given the string: let text = "JavaScript is awesome!";
// 2.  Do the following:
// Extract “JavaScript” using slice()
// Replace “awesome” with “powerful”
// Check if the string includes “Script”

let text = "JavaScript is awesome!";

// Extracted "JavaScript" using slice() from index 0 to 9.
let extracted = text.slice(0, 10); // "JavaScript"
console.log("Extracted text:", extracted);

// Replaced "awesome" with "powerful"
let replacedText = text.replace("awesome", "powerful");
console.log("Replaced text:", replacedText);

// Let's check if the string includes "Script"
let hasScript = text.includes("Script");
console.log("Includes 'Script'? :", hasScript); // returns boolean value


// 3.  Split this string into an array of words: "Learn JavaScript step by step"

// Original string
let sentence = "Learn JavaScript step by step";
// split
let wordsArray = sentence.split(" "); // ["Learn", "JavaScript", "step", "by", "step"]

// Xtra practise for me
// Convert each word to uppercase and join them into a single string
let upperCaseSentence = wordsArray.map(word => word.toUpperCase()).join(" ");

console.log(upperCaseSentence);

// // OR
// // Loop through the array and log each word in uppercase
// for (let i = 0; i < wordsArray.length; i++) {
//     console.log(wordsArray[i].toUpperCase());
// }

// ------------------------------------------------------------------------
// ------------------------------------------------------------
// ----------------------

// ADVANCE
// 1.  Remove all spaces from a string and convert it to lowercase.
// 2.  Count how many times the letter “a” appears in a string (using a for-loop).

let textSpace = "Learn JavaScript step by step";

// Remove spaces and lowercase
console.log(textSpace.replace(/ /g, "").toLowerCase());

// Count how many times "a" appears
let count = 0;
for (let i = 0; i < textSpace.length; i++) {
    if (textSpace[i].toLowerCase() === "a") count++;
}
console.log(count);

