// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// 1 - Solve iteratively
// function vowels(str) {
//   let vowelCount = 0;
//   vowels = ["a", "e", "i", "o", "u"];

//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       vowelCount++;
//     }
//   }
//   return vowelCount;
// }

// 2 - Solve with regex
function vowels(str) {
  // .match() returns null if no matches found
  const vowels = str.toLowerCase().match(/[aeiou]/g);

  // if vowels === null return 0
  return vowels ? vowels.length : 0;
}

module.exports = vowels;
