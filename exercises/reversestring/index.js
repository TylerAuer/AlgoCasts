// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//
// SOLUTION #1 //
//
// Turns into an array then reverse and turns back into a string
// function reverse(str) {
//   let charArr = str.split("");
//   charArr.reverse();
//   let revStr = "";
//   for (let i = 0; i < charArr.length; i++) {
//     revStr += charArr[i];
//   }
//   return revStr;
// }

//
// SOLUTION #2 //
//
// Pull last character from string, move to a new string
function reverse(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}

//
// SOLUTION #3 //
//
// Recursive using slice
// function reverse(str) {
//   let revStr = "";
//   function pop(str2) {
//     if (str2.length === 0) {
//       return;
//     } else {
//       revStr += str2.slice(-1);
//       pop(str2.slice(0, -1));
//     }
//   }
//   pop(str);
//   return revStr;
// }

// My basic tests
// console.log(reverse("Hello World!"));
// console.log(reverse("      Testing"));
// console.log(reverse("Hello          "));
// console.log(reverse("Go hang a salami I'm a lasagna hog."));

module.exports = reverse;
