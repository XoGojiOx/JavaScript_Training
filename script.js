/* Price tickets for rides
0 - 5 Free
5 to 10 $10
10 and above $20
*/

let infant = "$0";
let child = "$10";
let adult = "$20";
let age = prompt("What is your age? ");

if (age <= 5) {
  console.log(`You get in for ${infant}`);
} else if (age <= 10) {
  console.log(`You need to pay ${child}`);
} else {
  console.log(`You need to pay ${adult}`);
}
