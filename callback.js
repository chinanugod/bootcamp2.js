// function app(a, b) {
//     return a + b;
// }
// const lock = app(34, 47);
// console.log(lock);


// // Arrow function
// const apply = (a, b) => {
//     return a + b;
// }
 
// console.log(apply(4, " " + "years"));



// If you want every call to automatically add a space between number and string:
// const apply = (a, b) => `${a} ${b}`;

// console.log(apply(4, "years"));  // 4 years

// // EXAMPLES
// const fly = (a, b) => (a + b);

// console.log(fly(55, 9));

// ANOTHER EXAMPLE

// const gradeLevel = (grade, score) => grade * score;

// console.log(gradeLevel(5, 300));

// EXAMPLE AGAIN

const gradeLevel = (grade, score) => `${grade} ${score}`;
console.log(gradeLevel("CREDIT:", 300));

// CALLBACK FUNCTION
const calculate = (a, b, callback) => {
    return callback(a, b);
};

const add = (x, y) => x + y;

console.log(calculate(10, 20, add)); // 30


// FOR REAL!!!!!!!!!!!!!
function loginUser(username, callback) {
    console.log("Checking login for:", username);

    // simulate login delay
    setTimeout(() => {
        callback(`Welcome, ${username}!`);
    }, 2000);
}

function showMessage(message) {
    console.log(message);
}

loginUser("Chinanu", showMessage);



// CALLBACK

const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'}

];

function getPosts() {
    setTimeout(function() {
        let output = "";
        posts.forEach((posts, index) => {
            output += `<li>$(post.title)</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

getPosts();