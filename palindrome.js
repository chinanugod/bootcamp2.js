// Basic Checker
function palindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(palindrome("antena")); // False
console.log(palindrome("demed")); // True



// ADVANCED: Checks out upper case, spaces and symbols(non-aphanumeric characters)
function palichecker(isString) {
    let cleanIsString = isString.toLowerCase().replace(/[\W_]/g, '');
    const reversedIsString = cleanIsString.split('').reverse().join('');
    return cleanIsString === reversedIsString;
};

console.log(palichecker("namaman"));
console.log(palichecker("dood"));
console.log(palichecker("dewed"));
console.log(palichecker('no lemon, no melon'));


// This function checks if a string is a palindrome after 
// cleaning it. It converts the string to lowercase and removes
//  all non-alphanumeric characters. Then it reverses the 
//  cleaned string and compares it to the original cleaned 
//  version. If they are the same it returns true meaning
//   the string is a palindrome.

function isAdvancedPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[\W_]/g, '');
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

console.log(isAdvancedPalindrome('noon')); // True
console.log(isAdvancedPalindrome('dewed')); // True
console.log(isAdvancedPalindrome('dood')); // True
console.log(isAdvancedPalindrome('eliminates')); //
console.log(isAdvancedPalindrome('A man, a plan, a canal: Panama'));  // Output: true
console.log(isAdvancedPalindrome('No lemon, no melon'));             // Output: true


// // THIS PART REQUIRES TAKING INPUT FROM USER END

// // Using Loop

// // program to check if the string is palindrome or not

// function checkPal(string) {
//     // convert string to an array
//     const arrayValues = string.split(''); 
//     // reverse the array values
//     const reverseArrayValues = arrayValues.reverse();
//     // convert array to string
//     const reverseString = reverseArrayValues.join('');

//     if(string == reverseString) {
//         console.log('It is a palindrome');
//     }
//     else {
//         console.log('It is not a palindrome');
//     }
// }

// //take input
// const string = prompt('Enter a string: ');

// checkPal(string);

// // Another example

// // program to check if the string is palindrome or not

// function checkPalindrome(stringent) {

//     // find the length of a string
//     const len = stringent.length;

//     // loop through half of the string
//     for (let i = 0; i < len / 2; i++) {

//         // check if first and last string are same
//         if (stringent[i] !== stringent[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// // take input
// const stringent = prompt('Enter a string: ');

// // call the function
// const value = checkPalindrome(stringent);

// console.log(value);



