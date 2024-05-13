/* Price tickets for rides
0 - 5 Free
5 to 10 $10
10 and above $20
*/

// let infant = "$0";
// let child = "$10";
// let adult = "$20";
// let age = prompt("What is your age? ");

// if (age <= 5) {
//   console.log(`You get in for ${infant}`);
// } else if (age <= 10) {
//   console.log(`You need to pay ${child}`);
// } else {
//   console.log(`You need to pay ${adult}`);
// }

// let password = prompt("Enter your password here: ");

// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("That works Great!");
//   } else {
//     console.log("Password cannot contain any spaces");
//   }
// } else {
//   console.log("To short! Password must be 6+ characters long");
// }

// if (password.indexOf(" ") === -1) {
//   console.log("That Works!");
// } else {
//   console.log("Please do not include spaces");
// }

// let input = prompt("Enter You Password");

// if (input.length >= 6 && input.indexOf(" ") === -1) {
//   console.log("New Password Has Been Set");
// } else {
//   console.log("Make sure Password is 6+ characters with no spaces");
// }

// const day = 8;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("There is no day of the week with that number");
// }

// INTRODUCTION TO ARRAYS

// days = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturdsay",
//   "Sunday",
// ];

// let whosWatching = [];
// let whosWaiting = [];

// whosWaiting.push(
//   "Steve",
//   "Jack",
//   "Susan",
//   "Roger",
//   "Frank",
//   "Jack",
//   "Polly",
//   "Martin",
//   "Amanda"
// );

// if (whosWaiting > 8) {
//   whosWatching = whosWaiting.pop();
//   console.log(whosWatching);
//   console.log(whosWaiting);
// } else {
//   console.log("Not Enough People In Line To Start Moving In");
// }

// whosWaiting.push("Anthony");

/*
More methods used with Arrays
concat - merge arrays
includes - look for a value
indexOf - just like a string.indexOf
join - creats a string from an array
reverse - reverses an array
slice - copies a portion on an array
splice - removes/replaces elements
sort - sorta an array
*/

// //Concat Example
// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];
// const array3 = array1.concat(array2);

// console.log(array3);

// // Includes Example
// console.log(array3.includes("dog"));

// //indexOf Example
// console.log(array1.indexOf("a"));

// // reverse Example - destructive - meaning it will change the origional variable or array
// console.log(array2.reverse());

// // Splice example
// const months = ["Jan", "Feb", "April", "June"]; // missing March and May
// // months.splice(*start point, how many to delete, optionally something to insert)
// months.splice(2, 0, "March");
// console.log(months);
// months.splice(4, 0, "May");
// console.log(months);

// Object Literals

// const person = {
//   firstName: "Richard",
//   lastName: "Sanders",
// };

// console.log(person.firstName); // Will return Richard

// console.log(person["firstName"]); // Will return Richard

/* using the person.firstName will always return the value
but useing the person['firstName'] will also reutrn the value
the [] are good to use as you can use [variable name] and it will return the variable
you cannot do that using a .firstName. In the brackets you have to use "" to get the key and no "" to get the variable
*/

/* Coding Excersise Example
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`; // No , after state
*/

// // Modifying Objects

// const midterms = {
//   danielle: 96,
//   thomas: 78,
// };

// console.log((midterms.danielle = 100));

// console.log((midterms["thomas"] = 101));

// const comments = [
//   { username: "Tammy", text: "lololol", votes: 9 },
//   { username: "Jack", text: "You Suck!", votes: 100 },
//   { username: "Peter", text: "Everybody love everybody", votes: 0 },
// ];

// // How to extract data out of the above objet with an array containg 3 different objects.

// console.log(comments[1].text); // returns 'You Suck!'
// console.log(comments[0].votes); // returns 9

// For Loops, Nested Loops, While Loops, Break, For...of Loop, Iterating Arrays, Iterating Objects

// For Loops
// Repeat some functionality using a loop
/* For Loop Syntax
for (
    [initialExpression];
    [condition];
    incrementExpression]
)
*/
//Example
// start at 1        stop at 10         add 1 each time
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// Cound evens until equal to 20
// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }

// // Count Down From 100 by 1s
// for (let i = 100; i >= 0; i -= 1) {
//   console.log(i);
// }

/* Infinite Loops
for (let i = 20; i >= 0; i++) {
    console.log(i);
}
This will never stop running as the conditional i >= 0 will always be greater than 0
as you are starting at 20 and going up. This will cause major problems.
*/

/* Looping over arrays
const animals = ['lions', 'tigers', 'bears'];
for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}
*/

// const animals = ["lions", "tigers", "bears"];

// // for (let i = 0; i < animals.length; i++) {
// //   console.log(i, animals[i]);
// // }

// // Working down from end of array

// for (let i = animals.length - 1; i > [-1]; i--) {
//   console.log(i, animals[i]);
// }

//* // (let i = animal.length -1 -> you put negative 1 as animal.length = number of items, this will be 1 more than the index, so we want to go -1 to end at the last item index */

// NESTED LOOPS
/*
let str = 'LOL';
for (let i = 0; i <= 4; i++) {
    console.log(Outer:, i);
    for (let j = 0; j < str.length; j++) {
        console.log(' Inner: str[j]);
    }
}
*/

// let str = "LOL";
// for (let i = 0; i <= 4; i++) {
//   console.log("Outer:", i); // Returns Outer: 1 > 2 > 3 > 4
//   for (let j = 0; j < str.length; j++) { // J runs 3 times each time
//     console.log(" Inner:", str[j]);  // Returns Inner: L > O > L
//   }
// }

// NESTED ARRAYS

// const seatingChart = [
//   ["Kristen", "Erik", "Namita"],
//   ["Geoffrey", "Juanita", "Antonio", "Kevin"],
//   ["Yuma", "Sakura", "Jack", "Erika"],
// ];

// // for (let i = 0; i < seatingChart.length; i++) {
// //   console.log(seatingChart[i]); // This gives a full printout of the array
// // }

// for (let i = 0; i < seatingChart.length; i++) {
//   const row = seatingChart[i]; // Setting each Array to a Row
//   console.log(`ROW #${i + 1}`); // Prints Row 1 > 2 > 3
//   for (let j = 0; j < row.length; j++) {
//     //Running for each row or array
//     console.log(row[j]); // Printing out each name within the rows
//   }
// }

/* the seatingChart.length will give the number of arrays aka 3, the seatingChart[j].length will give each individual item in each array.
product *= arr[i][j] the [i] starts to access the array the [j] start to access the contents within the array
// GO OVER ^^^^^^ UNTIL YOU UNDERSTAND IT
*/

/* While Loops */

// let num = 0;
// while (num < 10) {
//   console.log(num);
//   num++;
// }

// const secret = "BabyHippo";

// let guess = prompt("Guess the secret code: ");

// while (guess !== secret) {
//   guess = prompt("Guess again: ");
// }
// console.log("Congrats");

// FOR ......... OF LOOPS

/* for (variable of iterable) {
    statement
}
*/

/* Example of using for statement
const subreddits = ["cringe", "books", "chickens", "funny", "pics", "soccer"];

for (let i = 0; i < subreddits.length; i++) {
  console.log(`visit reddit.com/r/${subreddits[i]}`);
}
*/

//Example of same thing but with for...of statement

// const subreddits = ["cringe", "books", "chickens", "funny", "pics", "soccer"];

// // I created sub to represent the objects within the array subreddits
// for (let sub of subreddits) {
//   console.log(sub);
// }

/* This code snippet is iterating over a 2D array called `seatingChart` using nested loops. */
// const seatingChart = [
//   ["kk", "ss", "dd"],
//   ["kl", "uu", "ii"],
//   ["qq", "ww", "ee"],
// ];

// // /* The code snippet `for (let i = 0; i < seatingChart.length; i++)` is setting up a loop to iterate
// // over each element in the `seatingChart` array. It starts at index 0 and continues until it reaches
// // the length of the `seatingChart` array. */
// // for (let i = 0; i < seatingChart.length; i++) {
// //   const row = seatingChart[i];
// //   /* The code snippet `for (let j = 0; j < row.length; j++)` is setting up a loop to iterate over each
// //   element in the inner array `row`. It starts at index 0 and continues until it reaches the length
// //   of the inner array `row`. Inside the loop, `console.log(row[j])` is printing out each element of
// //   the inner array `row` at index `j`. This allows you to access and display each individual element
// //   within the nested arrays of the `seatingChart` array. */
// //   for (let j = 0; j < row.length; j++) {
// //     console.log(row[j]);
// //   }
// // }

// for (let row of seatingChart) {
//   for (let student of row) {
//     console.log(student);
//   }
// }

// you can for of over strings as shown below - this returns h e l l o  w o r l d
// for (let char of "hello world") {
//   console.log(char);
// }

// // FOR OF QUIZ
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// //asked to use a for of loop to print out each number squared
// for (let num of numbers) {
//   console.log(Math.pow(num, 2));
// }

// ITERATING OVER OBJECTS
// Objects are objects! But they are not considered iterable!!!

// const testScores = {
//   keenan: 80,
//   damon: 30,
//   jake: 90,
//   randy: 20,
//   karla: 100,
//   brittany: 99,
//   susan: 1,
// };
// // // The below will pring out the students names only, not the scores
// // for (let student in testScores) {
// //   console.log(student);
// // }
// // // This is how you would print out the students name and scores
// // for (let student in testScores) {
// //   console.log(`${student} scored ${testScores[student]}`);
// // }

// /* NEW WAYS IN JAVASCRIPT TO ITERATE OVER AN OBJECT */
// // console.log(Object.keys(testScores)); // This will return the student names
// // console.log(Object.values(testScores)); // This will return the scores
// // console.log(Object.entries(testScores)); // This will return a nested array of key: value pairs

// let total = 0;
// let scores = Object.values(testScores);
// for (let score of scores) {
//   total += score;
// }
// console.log(total / scores.length);

/* FUNCTIONS! */

/* Step 1 - Define the function

function funcName() {
    do something
}

*/

// Example

// function grumpus() {
//   console.log("ugh...you again....");
//   console.log("for the last time....");
//   console.log("...LEAVE ME ALONE!");
// }

// grumpus();

/* WRITING FUNCTIONS THAT ACCEPT INPUTS */

// function avgNum(num1, num2) {
//   console.log((num1 + num2) / avgNum.length);
// }

// function greet(name) {
//   console.log(`Your name is ${name}`);
// }

// // avgNum(5, 10);

// // greet("Steve");

// greet("jake");

/* TWO PARAMATER FUNCTIONS */

// function greet(firstName, lastName) {
//   console.log(
//     `Good afternoon ${firstName}, I believe your last name starts with the letter ${lastName[0]}, is this correct?`
//   );
// }

// greet("Jake", "State");

// function repeater(str, rep) { // function called repeater with 2 parameters
//   let result = ""; // setting variable result to hold our string
//   for (let i = 0; i < rep; i++) { // i is set to run  while less than rep
//     result += str; // each loop through adds the string to result
//   }
//   console.log(result); // i is no longer less than rep, prints out the sum of all loops
// }

// repeater("Cat", 10); // prints catcatcatcatcatcatcatcat
// repeater("Ninja", 50); // prints Ninja*50

// Dice Game Example

// function isSnakeEyes(num1, num2) {
//   let roll1 = Math.floor(Math.random() * num1) + 1;
//   let roll2 = Math.floor(Math.random() * num2) + 1;
//   if (roll1 === 1 && roll2 === 1) {
//     return `Snake Eyes! ${num1}, ${num2}`;
//   } else {
//     return `Not Snake Eyes! ${num1}, ${num2}`;
//   }
// }

// isSnakeEyes(6, 6);

// use return to capture and store our result or output of the function
// Return stops the execution of the function
// return can only return one thing, it can be a object,
// an array, or anything, but just one value as it
// stops the exectuion of the function once it runs

// function add(x, y) {
//   if (typeof x !== "number" || typeof y !== "number") {
//     return false;
//   }
//   let sum = x + y;
//   return sum;
// }

/* REMEMBER ***FOR TYPEOF***
typeof always returns a string!
examples:
typeof 42; returns 'number'
typeof 'hello' returns 'string'
typeof true; returns 'boolean'
typeof {}; returns 'object'
typeof []; returns 'object' (arrays are objects in javascript)
typeof null; returns 'object' (a known bug in javascript)
typeof function() {}; returns 'function'
*/

/*
Coding Challenge
Please write a function called lastElement which accepts a single array argument.
The function should return the last element of the array (without removing the element).
If the array is empty, the function should return null.

lastElement([3,5,7]) //7
lastElement([1]) //1
lastElement([]) //null

function lastElement(arr) {
  if (arr.length === 0) {
    return null;
  } else {
    return arr[arr.length - 1];
  }
}

lastElement("jake");
*/

/*
Coding Challenge
Define a function called capitalize that accepts a string argument and returns a new string
with the first letter capitalized (but the rest of the string unchanged).  For example:

capitalize('eggplant') // "Eggplant"
capitalize('pamplemousse') // "Pamplemousse"
capitalize('squid') //"Squid"
*/

// function capitalize(cap) {
//   let firstCap = cap[0].toUpperCase(); // Takes the first letter of the word and capitalizes it and saves it as firstCap
//   let restCap = cap.slice(1); // Takes the word and starting at index 1 or 2nd letter and takes the 2nd letter to end of word and saves it as restCap
//   return firstCap + restCap; // combines (concats) the fristCap and restCap with no spaces giving you the word entered with a capital fist letter
// }

/* Sum Array Exercise
Write a function called sumArray which accepts a single argument: an array of numbers.
It should return the sum of all the numbers in the array.
*/

// function sumArray(nums) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
//   return sum;
// }

/* Days of the week exercise
Write a function called returnDay. this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)  If the number is less than 1 or greater than 7, the function should return null. In some countries Sunday is treated as the first day of the week, but for this exercise we will use Monday as the first day.

Hint: store the days of the week in an array, or use an object with numerical keys.  When the function is called, plug the number into the array/object you've created to retrieve the corresponding day name and then return that value.

returnDay(1) // "Monday"
returnDay(7) // "Sunday"
returnDay(4) // "Thursday"
returnDay(0) // null

CODE
function returnDay(num) {
    const days = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday'
    }
    if(num < 1 || num > 7) {
        return null;
    } else {
        return days[num];
    }
}
*/

// Scopes  > Function Scopre > Block Scope > Lexical Scope
// Scope is a variable's visibility
//Example
// function collectEggs(){
//   let totalEggs = 6;
//   return totalEggs;
// }
// ^^^ I can only call totalEggs within the function.
// If I call totalEggs below the function it will not run

// Block Scope
// let radius = 8;
// if (radius > 0) {
//   const PI = 3.14159;
//   let msg = "Hi";
// }
// { Everything inside these brackets are BLOCKED scoped }

/* Function Expressions */
// const square = function (num) {
//   return num * num;
// };
// square(7); // returns 49
/* The function does not have a name, just (). The name is the variable name */

/* Passing a function within a function */
// function rollDie() {
//   let roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }

// function evisMom() {
//   console.log('good moring evi"s mom');
// }

// function timesTen(t) {
//   for (let i = 0; i < 10; i++) {
//     t();
//   }
// }

// timesTen(evisMom);

/* DEFINING METHODS */
// We can add functions as properties on objects. We call them methods.
//Examples
// const math = {
//   multiply: function (x, y) {
//     return x * y;
//   },
//   divide: function (x, y) {
//     return x / y;
//   },
//   square: function (x) {
//     return x * x;
//   },
// };
// // Can call the function like you do string methods with a .
// // math.multiple(2, 5); This will run the multiply function and give us 10
// math.multiply(2, 5);

/* CALLING METHODS NEW SHORT HAD WAY */
// const math = {
//   add(x, y) {
//     return x + y;
//   },
//   multiply(x, y) {
//     return x * y;
//   },
//   divide(x, y) {
//     return x / y;
//   },
//   square(x) {
//     return x * x;
//   },
//   cube(x) {
//     return x * x * x;
//   },
// };

/* THE KEYWORD 'THIS' IN JAVASCRIPT */
// const cat = {
//   // the word 'THIS' refers to cat as the object itself
//   name: "blue steele",
//   color: "grey",
//   breed: "scottish fold",
//   meow() {
//     console.log(`${this.name} really likes steak`); // I can use this.breed or this.name to get those values of the keys
//   },
// };

/* USING TRY / CATCH */
// If you think that an error could happen in a part of the code, you can use grab to try and catch it.
// try {
//   hello.toUpperCase();
// } catch {
//   console.log("ERROR!!!!"); // This will catch it and output the Error!!!
// }
// // This will get handy when working with API's and so forth coming up
// (e) <= this will return the error that was caught, you can console.log or return it if you want to
/* ANOTHER EXAMPLE */
// function yell(msg) {
//   try {
//     console.log(msg.toUpperCase().repeat(3));
//   } catch {
//     console.log(`Please enter a string next time!`);
//   }
// }

/* ARRAY CALLBACK METHODS */
/* ForEach, Map, Some & Every, Arrow Functions, Filter, Reduce */

/* ForEach */ //Allows us to run some code for each item in an array
// const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// nums.forEach(function (n) {
//   console.log(n * n);
// });

// nums.forEach(function (el) {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });

// You can also us the FOR OF to print out the items in the array
// for (let el of nums) {
//   console.log(el);
// }
// More Complicated Example
// const movies = [
//   {
//     title: "Amadeus",
//     score: 99,
//   },
//   {
//     title: "Stand by me",
//     score: 98,
//   },
//   {
//     title: "Parasite",
//     score: 90,
//   },
//   {
//     title: "Freak",
//     score: 89,
//   },
// ];

// movies.forEach(function (n) {
//   console.log(`The movie ${n.title} scored ${n.score}`);
// });

/* THE MAP METHOD */
// Creates a new array with the results of calling a callback on every element in the array
/* FIRST EXAMPLE */
// const texts = ["hi", "bye", "maybe", "leave me alone", "loveis"];
// const caps = texts.map(function (t) {
//   return t.toUpperCase();
// });
// texts; // returns ['hi', 'bye', 'maybe', 'leave me alone', 'loveis']
// caps; //returns ['HI', 'BYE', 'MAYBE', 'LEAVE ME ALONE', LOVIES']
/* ANOTHER EXAMPLE */
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const even = numbers.map(function (n) {
//   if (n % 2 === 0) {
//     return n;
//   }
// });
/* USING MOVIES AGAIN FOR EXAMPLE */
// const movies = [
//   {
//     title: "Amadeus",
//     score: 99,
//   },
//   {
//     title: "Stand by me",
//     score: 98,
//   },
//   {
//     title: "Parasite",
//     score: 90,
//   },
//   {
//     title: "Freak",
//     score: 89,
//   },
// ];

// const title = movies.map(function (movie) {
//   return movie.title;
// });
// //When calling TITLE it will return ['Amadeus', 'Stand by Me', 'Parasite', 'Freak']

/* ARROW FUNCTIONS */
//syntactically compact alternative to a regular function expression
/*Example*/
// const square = (x) => { // with a single paramater you are able to write it without the () but only for a single paramater!
//   return x * x; // returns x * x
// };

// const sum = (x) => {
//   return x + x; // returns x + x
// };
// // sum(4) returns 8
// // square(4) returns 16

// const sub = (x, y) => { // Cannot wirte this without () because there are two paramaters.
//   return x - y;
// };

// const rollDie = () => { // abel to make the arrow function without a paramater
//   return Math.floor(Math.random() * 6) + 1;
// };

// /* Practice arrow functions with .MAP */
// const movies = [
//   {
//     title: "Amadeus",
//     score: 99,
//   },
//   {
//     title: "Stand by me",
//     score: 98,
//   },
//   {
//     title: "Parasite",
//     score: 90,
//   },
//   {
//     title: "Freak",
//     score: 89,
//   },
// ];

// const title = movies.map(movie) => { // COULD NOT GET THIS TO WORK
//   return movie.title;
// }

// /* IMPLICIT RETURN */ // only work if there is one value in the body of the function
// const isEven = function (num) {
//   // regular function expression
//   return num % 2 === 0;
// };
// const isEven = (num) => {
//   // arrow function with parens around param
//   return num % 2 === 0;
// };
// const isEven = (num) => num % 2 === 0;
// // arrow function without brackets and without return

/* Using math and for each with implicit arrow functions */
// const movies = [
//   {
//     title: "Amadeus",
//     score: 99,
//   },
//   {
//     title: "Stand by me",
//     score: 98,
//   },
//   {
//     title: "Parasite",
//     score: 90,
//   },
//   {
//     title: "Freak",
//     score: 89,
//   },
// ];
// // Old way to write it
// // const newMovies = movies.map = function (movie) {
// //   return `${movie.title} - ${movie.score / 10}`
// // }

// const newMovies = movies.map((movie) => {
//   `${movie.title} - ${movie.score / 10}`;
// });

/* setTimeout and setInterval */
//setTimeout
//Expects you to pass a callback and a number of seconds to delay
// setTimeout(() => {
//   console.log`hello`;
// }, 3000); // The browser will wait 3 seconds then run the function printing 'hello'
// console.log(`Hello!`);
// setTimeout(() => {
//   console.log(`Are you still there?`);
// }, 3000); // This will print Hello right away and after 3 seconds it will print are you still there?

// // setINTERVAL
// const id = setInterval(() => {
//   // CONST ID***  you can use clearInterval(id) to stop the intervals from continuing
//   console.log(Math.random());
// }, 2000);
// clearInterval(id) // Stops the setInterval

/* FILTER */
// Creates a new array with all elements that pass the test implemented by the provided function
// const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// const odds = nums.filter((n) => {
//   return n % 2 === 1; //our callback returns true or false
//   //if it returns true n is added to the filtered array
// });
// const evens = nums.filter((n) => {
//   return n % 2 === 0;
// });
// const smallNums = nums.filter((n) => {
//   return n < 5;
// });
// // const largeNums = nums.filter((n) => {
// //   return n >= 5;
// // });
// const largeNums = nums.filter((n) => n >= 5); //written as a short hand arrow function
// const movies = [
//   {
//     title: "Amadeus",
//     score: 99,
//   },
//   {
//     title: "Stand by me",
//     score: 65,
//   },
//   {
//     title: "Parasite",
//     score: 90,
//   },
//   {
//     title: "Freak",
//     score: 40,
//   },
// ];

// const aboveAverage = movies.filter((n) => n.score > 75); // give an array of movies with scores above 75
// const aboveAverageTitles = aboveAverage.map((n) => n.title); // gives an array with the titels in aboveAverage
// // The below takes ^^^ and makes it into one function
// const aboveAvgTitles = movies.filter((n) => n > 75).map((n) => n.title);

// const belowAverage = movies.filter((n) => n.score < 75);
// const moviesStartWithA = movies.filter((n) => n.title[0] === "A"); // returns movies that start with the letter A

/* Filter Method Quit */
// Let's get some practice using the filter method. Write a function called validUserNames that accepts an array of usernames (strings). It should return a new array, containing only
// the usernames that are less than 10 characters.
//Solution #1:
// function validUserNames(arr) {
//   const filteredArr = arr.filter(function (name) {
//     return name.length < 10;
//   });
//   return filteredArr;
// }

// //Solution #2:
// function validUserNames(arr) {
//   return arr.filter((name) => name.length < 10);
// }

// //Solution #3:
// const validUserNames = (usernames) =>
//   usernames.filter((usr) => usr.length < 10);

/* EVERY */ // Returns a true of false based on every element in the array
// const words = [
//   "dog",
//   "cat",
//   "turtle",
//   "pig",
//   "chicken",
//   "rooster",
//   "geese",
//   "duck",
// ];

// words.every((word) => {
//   return word.length === 3;
// }); // will return fast as not ever word in the array is 3 in length

// word.every((word) => word[0] === "d"); // returns false as not every first letter is 'd'

// words.every((w) => {
//   let last_letter = w[w.length - 1];
//   return last_letter === "g";
// }); // will return false as not every element ends in 'g'

// const exams = [90, 80, 88, 75, 89, 99, 94, 98, 94, 88, 82, 77, 79, 100];
// //passing score is 75

// exams.every((score) => score >= 75);

/* SOME */
//Some is the exact same as every, but it is going to see if any of the elements that match our criteria
/* QUIZ */
//Define a function called allEvens that accepts a single array of numbers. If the array contains all even numbers, return true. Otherwise, return false.
// const allEvens = n => n.every(num => num % 2 === 0);

/* REDUCE */
// Executes a reducer function on each element of the array, resulting in a single value.
// accumultor will hold sum (first paramater)
// currentvalue holds each individual element (second paramater)

// const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

// /* Adding Values using Reduce */
// // const total = prices.reduce((total, price) => {
// //   // first go will add 9.99 and 1.50, 2nd will take that sum + 19.99 and so forth until array is reached.
// //   return total + price; // returns 111.97
// // });

// // /* Writing the above with a for statement */ //old way of doing it
// // // let total = 0;
// // for (let price of prices) {
// //   total += price;
// // }
// // console.log(total);

// /* Finding lowest value using reduce */
// const minimum = prices.reduce((min, price) => {
//   if (price < min) {
//     return price;
//   } else {
//     return min;
//   }
// });

/* Movie Example */
//Finding the highest rated movie
// const movies = [
//   {
//     title: "Amadeus",
//     score: 99,
//   },
//   {
//     title: "Stand by me",
//     score: 65,
//   },
//   {
//     title: "Parasite",
//     score: 90,
//   },
//   {
//     title: "Freak",
//     score: 40,
//   },
// ];

// const highestRated = movies.reduce((high, score) => {
//   if (score.score > high.score) {
//     return score;
//   } else {
//     return high;
//   }
// });
