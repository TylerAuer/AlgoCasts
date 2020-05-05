// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//
// SOLUTION #1 - Use Array.reverse()
//
// function reverse(str) {
//   // Converts to array so .reverse() can be used
//   const charArr = str.split("");
//   // Reverses arr in place
//   charArr.reverse();
//   // Concatenates letters into single string, returns
//   return charArr.join("");
// }

//
// SOLUTION #1A - One line solution (cleaner?)
//
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

//
// SOLUTION #2 - Classic for loop
//
// Pull last character from string, move to a new string
// function reverse(str) {
//   let revStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     revStr += str[i];
//   }
//   return revStr;
// }

//
// SOLUTION #2A - Cleaner For...of
//
// function reverse(str) {
//   let revStr = "";
//   for (let char of str) {
//     revStr = char + revStr;
//   }
//   return revStr;
// }

//
// SOLUTION #3 -- Recursive slicing off the end
//
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

//
// SOLUTION #4 -- Array.reverse().reduce()
//
function reverse(str) {
  return str
    .split("")
    .reverse()
    .reduce((revStr, nextChar) => revStr + nextChar);
}

module.exports = reverse;
