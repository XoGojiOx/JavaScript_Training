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

function isSnakeEyes(num1, num2) {
  let roll1 = Math.floor(Math.random() * num1) + 1;
  let roll2 = Math.floor(Math.random() * num2) + 1;
  if (roll1 === 1 && roll2 === 1) {
    return `Snake Eyes! ${num1}, ${num2}`;
  } else {
    return `Not Snake Eyes! ${num1}, ${num2}`;
  }
}

isSnakeEyes(6, 6);

// use return to capture and store our result or output of the function
