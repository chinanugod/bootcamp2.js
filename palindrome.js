// Basic Checker
function palindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(palindrome("antena")); // False
console.log(palindrome("demed")); // True
console.log(palindrome('madmadam')); // False



// // ADVANCED: Checks out upper case, spaces and symbols(non-aphanumeric characters)

function palichecker(isString) {
    let cleanIsString = isString.toLowerCase().replace(/[\W_]/g, ''); // Two Pointer. (/[^a-z0-9_]/g '')
    const reversedIsString = cleanIsString.split('').reverse().join('');
    return cleanIsString === reversedIsString;
};

console.log(palichecker("namaman"));
console.log(palichecker("dood"));
console.log(palichecker("dewed"));
console.log(palichecker('Do geese see God?'));


// // This function checks if a string is a palindrome after 
// // cleaning it. It converts the string to lowercase and removes
// //  all non-alphanumeric characters. Then it reverses the 
// //  cleaned string and compares it to the original cleaned 
// //  version. If they are the same it returns true meaning
// //   the string is a palindrome.

function isAdvancedPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[\W_]/g, '');
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

console.log(isAdvancedPalindrome('noon')); // True
console.log(isAdvancedPalindrome('dewed')); // True
console.log(isAdvancedPalindrome('dood')); // True
console.log(isAdvancedPalindrome('eliminates')); //
console.log(isAdvancedPalindrome('Never odd or even'));  // Output: true
console.log(isAdvancedPalindrome("Madam, in Eden, I'm Adam")) // Output: true



// // USING LOOP
 
// // program to check if the string is palindrome or not

function checkPalindrome(stringent) {

    // find the length of a string
    const len = stringent.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

// // check if first and last string are same

// // this first [i] being the array- string itself is the forward-moving pointer;
// // the -i as the backward moving pointer is just saying
// // to the loop to move at the same pace as the i part of the array;
// // SO: as i increases, -i decreases. chikina.
// // INDEX-MATCHING Method
        if (stringent[i] === stringent[len - 1 - i]) {
            return 'It is a palindrome';
        } // NB: -1 discount/loops-out the first(from the end) index of the array
    }
    return 'It is not a palindrome';
}

// take input
const stringent = "Don't nod";

// call the function
const value = checkPalindrome(stringent);

console.log(value);


// ANOTHER PRACTICE EXAMPLE

function palindromer(comment) {
    const halflength = comment.length;

    for (let i = 0; i < halflength/2; i++)
            if(comment[i] === comment[halflength - 1 - i])
        {
        return "Check is positive"
    }
     else {
        return "Check is negative"
    }
}  

const comment = "reviver";

const newValue = comment;

console.log(palindromer(newValue))