// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1 - Reverse and compare with ===
// function palindrome(str) {
//   const revStr = str.split("").reverse().join("");
//   if (str === revStr) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Solution 1A - return boolean statement for simplicity
// function palindrome(str) {
//   const revStr = str.split("").reverse().join("");
//   return str === revStr;
// }

// Solution 2 - No array.reverse()
// function palindrome(str) {
//   for (let i in str) {
//     if (str[i] != str[str.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

// Solution 3 - Use arr.every()
function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - 1 - i];
  });
}

palindrome("racecar");
palindrome("mogaom");

module.exports = palindrome;
