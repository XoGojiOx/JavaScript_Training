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
