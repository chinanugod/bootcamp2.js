// ✅ SECTION 7 — LOOPS (WHILE LOOP)

// Beginner
// 1.  Print numbers from 1 to 5 using a while loop.

let i = 1;        // initialization (outside)

while (i <= 5) {  // condition only
    console.log(i);
    i++;          // increment (inside loop)
}


// Intermediate (Test)
// 1.  Count down from 10 to 1 using a while loop.
let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}


// 2.  Using a while loop, keep adding numbers until you reach 100.

// This block is basically adding 1 + 2 + 3 + 4 + 5 + ... until the total becomes 100 or more.
let total = 0;
let number = 1;

while (total < 100) {
    total += number;
    number++;
}

console.log(total);



// Advanced (Challenge accepted)
// 1.  Given: let text = "banana";
// 2.  Using a while loop, count how many times the letter “a” appears.
let text = "banana";
let index = 0;
let aCount = 0;

while (index < text.length) {
    if (text[index] === "a") {
        aCount++;
    }
    index++;
}

console.log(aCount);



//  BONUS ADVANCED LOGICAL QUESTIONS
// Write a program that removes all falsy values from this array: [0, 1, false, 2, "", 3, null, "Hello"]

let thisArray = [0, 1, false, 2, "", 3, null, "Hello"];
let result = [];
let a = 0;

while (a < thisArray.length) {
    if (thisArray[a]) {          // check if truthy
        result.push(thisArray[a]);
    }
    a++;
}

console.log(result); // [1, 2, 3, "Hello"]
