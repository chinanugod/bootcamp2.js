// Fix this buggy function and make it return the correct 
// max number from an array without using Math.max().
function findMax(arr) {
    let max;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax([3, 10, 6, 20, 1])); // should output 20
// TASK
//👉 Your task:
/* Explain why it's returning undefined

Fix it properly

Then rewrite it using arrow function syntax */

// FIXED....
function findMax(arr) {
    let max = arr[0]; // Initialize max to the first element of the array
    for (let i = 1; i < arr.length; i++) { // Start loop from index 1 si
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax([3, 10, 6, 20, 1]));

// REWRITTEN USING ARROW FUNCTION SYNTAX
const findMaxArrow = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    } 
    return max;
} 

console.log(findMaxArrow([3, 10, 6, 20, 1]));

// PLAIN ENGLISH EXPLANATION:
// The original function returned undefined because the variable 'max' was not initialized.
// When comparing elements in the array to 'max', it was undefined at the start,
// so no element could be greater than undefined, and 'max' remained undefined.
// By initializing 'max' to the first element of the array, we ensure that comparisons
// are valid, allowing the function to correctly find and return the maximum value.
// furthermore, the function was rewritten using arrow function syntax for conciseness.
// What tells us that we are looking for the maximum value is the comparison operator '>' used in the if statement,
// which checks if the current element is greater than the current maximum value stored in 'max'. so, if(arr[i] > max) {
// max = arr[i]; } updates max to the larger value found in the array.

// USING .reduce() METHOD
const findMaxReduce = (arr) => arr.reduce((max, curr) => (curr > max ? curr : max), arr[0]); // Find out why arr[0] is used here
console.log(findMaxReduce([3, 10, 6, 20, 1]));
// Why use arr[0] as the initial value?, instead of 0 or leaving it out entirely?
// Using arr[0] ensures that the function works correctly even with arrays containing negative numbers.
// If we used 0 as the initial value, it could lead to incorrect results when all elements are negative.
// Leaving it out entirely would cause reduce to use the first element as the initial value,
// which is acceptable, but explicitly setting it to arr[0] makes the intention clear.



// ANOTHER
const findMaxArrowShort = arr => arr.reduce((max, newItem) => newItem > max ? newItem : max);
console.log(findMaxArrowShort([3, 10, 6, 20, 1]));

//  USING A CALLBACK  WITH reduce
const findMaWithCallback = arr => {
    return arr.reduce((currentMax, currentItem) => {
        if(currentItem > currentMax) {
            return currentItem;
        } else {
            return currentMax;
        }
    });
};
console.log(findMaWithCallback([3, 10, 6, 20, 1]));


// WHAT IF WE DO THE Math.Max WAY + Spread?
const findMaxMathMax = arr => {
    return Math.max(...arr);
};
console.log(findMaxMathMax([3, 10, 6, 20, 1]));


// WHAT IF WE DO THE MINIMUM
const findMin = arr => {
      // Handle empty array case:
  if (arr.length === 0) {
    return undefined; // Or throw an error, depending on desired behavior
  };

    let min = arr[0]; // Initialize min with the first element of the array
     
    // Loop through the rest of the array elements
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; // Update min if a smaller element is found
        }
    }
    return min; 
};

console.log(findMin([3, 10, 6, 20, 1])); // should output 1