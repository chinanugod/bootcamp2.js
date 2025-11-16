// BASIC TEST
// Write a program that checks if a number is positive, negative, or zero.
function isNumber(isNumber = 3) {
if (isNumber > 0)
 {
 console.log("The number is positive");
} else if (isNumber < 0) {
    console.log("The number is negative");
} else {
    console.log("The number is zero");
}
}

isNumber(3);
isNumber(-3)
isNumber(0);

// Write a program that checks whether a user’s age is 18 or older and prints “Access Granted” or “Access Denied”.

function grantAccess() {
  let age = 0;

  if (age >= 18) {
    console.log("Access Granted!");
  } else {
    console.log("Access Denied. You must be 18 or older.");
  }
}

grantAccess(17);


// INTERMEDIATE (Test)
/*
1.  A student score is stored in a variable: let score = 74;
2.  Use if...else if...else to print:
A (>= 80)
B (>= 70)
C (>= 60)
D (>= 50)
F (below 50) */

let score = 74;
let grade;

if (score >= 80) {
  grade = "A";
} else if (score >= 70) {
  grade = "B";
} else if (score >= 60) {
  grade = "C";
} else if (score >= 50) {
  grade = "D";
} else {
  grade = "F";
}
console.log("Grade: " + grade); 

/*
3.  Ask the user for a number. If it’s:
Even → print “Even number”
Odd → print “Odd number”
Not a number → print “Invalid input”
 */

function checkEvenOdd(num) {
    if(isNaN(num)) {
        console.log("Invalid input");
    }
    else if(num % 2 == 0) {
        console.log("Even number");
    } 
    else {
        console.log("Odd number");
    }
};

checkEvenOdd(23);
checkEvenOdd("3MTT");
checkEvenOdd(4); 

// ADVANCE
// 1.  Given three numbers, write logic to determine and print the largest.
function threeNumbers(num1, num2, num3) {
    // Step 1: assume first number is the largest
    let largest = num1;

    // Step 2: compare second number with current largest
    if (num2 > largest) {
        largest = num2;
    }

    // Step 3: compare third number with current largest
    if (num3 > largest) {
        largest = num3;
    }

    // return the final largest value
    return largest;
}

const result = threeNumbers(5, 34, 6);
console.log("The largest number is:", result);

/* 2.  Write a program that checks if a password is strong:
Must be at least 8 characters
Must include a number
Must include an uppercase letter */

function checkPassword(password) {
    if (password.length < 8) {
        console.log("Weak Password");
    }
    else if (!password.match(/[A-Z]/)) {
        console.log("Weak Password");
    }
    else if (!password.match(/[0-9]/)) {
        console.log("Weak Password");
    }
    else {
        console.log("Strong Password");
    }
}

// Test
checkPassword("Bootcamp2025");  // Strong Password
checkPassword("Veltrix");     // Weak Password
 
//METHOD 2

// function checkPassword(password) {
//     let hasUppercase = false;
//     let hasNumber = false;

//     if (password.length < 8) {
//         console.log("Weak Password");
//         return;
//     }

//     // Manually scan each character
//     for (let i = 0; i < password.length; i++) {
//         let code = password.charCodeAt(i);

//         // Uppercase A–Z → ASCII 65 to 90
//         if (code >= 65 && code <= 90) {
//             hasUppercase = true;
//         }

//         // Numbers 0–9 → ASCII 48 to 57
//         if (code >= 48 && code <= 57) {
//             hasNumber = true;
//         }
//     }

//     if (hasUppercase && hasNumber) {
//         console.log("Strong Password");
//     } else {
//         console.log("Weak Password");
//     }
// }

