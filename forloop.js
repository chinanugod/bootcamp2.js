// ✅ SECTION 6 — LOOPS (FOR LOOP)

// Beginner
// 1.  Print the numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) { // i = 1 → start at 1; i <= 10 → loop while i is ≤ 10; i++ → increment i by 1 each iteration.
    console.log(i);
}

// 2.  Print all even numbers from 1 to 20.
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) console.log(i);
} 
/* Alternatively
for (let i = 2; i <= 20; i += 2) {
   console.log(i);
} */


// Intermediate (Test)
// 1.  Given the array: let fruits = ["Apple", "Banana", "Mango"];
// 2.  Use a loop to print each fruit.
let fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 3.  Loop through an array of numbers from 1 - 100 and print only numbers greater than 50.
for (let i = 1; i <= 100; i++) {
    if (i > 50) console.log(i);
}


// Advanced (Challenge accepted)
// 1.  Write a loop to find the sum of all numbers in an array.
let numbers = [4, 8, 2, 15, 2, 7];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);



// 2.  Reverse an array manually (without using reverse()).
let original = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = original.length - 1; i >= 0; i--) {
    reversed.push(original[i]);
}

console.log(reversed);
console.log("Kennedy Chukwu(Veltrix instructor): Nice code")
