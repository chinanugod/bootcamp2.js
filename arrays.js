// ✅ SECTION 4 — ARRAYS & ARRAY METHODS

// Beginner
// 1.  Create an array of 5 colors. Log:
// The first color
// The last color
// The array length
let colorList = ["Red", "Blue", "Green", "Yellow", "Purple"];

console.log(colorList[0]);                  // First color
console.log(colorList[colorList.length-1]); // Last color
console.log(colorList.length);              // Array length

// 2.  Add a new color to the end using push().
colorList.push("Orange");
console.log(colorList);


// 3.  Remove the first color using shift().
colorList.shift(); // colorList.shift([0]) still works.
console.log(colorList);
console.log("Kennedy Chukwu(Veltrix instructor): Nice code")


// Intermediate (Test)
// 1.  Given: let nums = [4, 8, 2, 15, 23, 7];
// 2.  Write logic to:
// Sort the array
// Filter numbers greater than 10
// Multiply each number by 2 using for-loop
// Intermediate (Test) — Section 4: Arrays & Array Methods

let nums = [4, 8, 2, 15, 23, 7];

// 1. Sort the array in ascending order (without modifying original)
let sortedNums = nums.slice().sort((a, b) => a - b);
console.log(sortedNums);
console.log("Kennedy Chukwu(Veltrix instructor): Nice code")

// NOTE
/* 
nums.slice() → makes a copy of the original array.

Why? So we don’t change numList when sorting.

.sort((x, y) => x - y) → sorts numbers in ascending order.

x - y means:

If result < 0 → x goes before y

If result > 0 → y goes before x

sortedNums → holds the sorted copy.
*/


// 2. Filter numbers greater than 10
let filteredNums = nums.filter(n => n > 10); // function filteredNums(n) {return n > 10;}
console.log(filteredNums);

// 3. Multiply each number by 2 using a for-loop
let doubledNums = [];
for (let i = 0; i < nums.length; i++) {
    doubledNums.push(nums[i] * 2);
}
console.log(doubledNums);
console.log("Kennedy Chukwu(Veltrix instructor): Nice code")


// 3.  Combine these arrays into one:
// 4.  let a = ["A", "B"];
// 5.  let b = ["C", "D"];
let arrayA = ["A", "B"];
let arrayB = ["C", "D"];

// Combine arrays into one
let combinedArray = arrayA.concat(arrayB);
console.log("Combined array:", combinedArray);
console.log("Kennedy Chukwu(Veltrix instructor): Nice code")


// Advanced (Challenge accepted)
// 1.  Write a program that counts how many times a value appears in an array.
let numsArray = [2, 5, 2, 8, 5, 2, 5, 2, 6, 4, 3];
let targetValue = 2;
let count = 0;

for (let i = 0; i < numsArray.length; i++) {
    if (numsArray[i] === targetValue) {
        count++;
    }
}

console.log("Kennedy Chukwu(Veltrix instructor): Nice code")
console.log(count); // 3
