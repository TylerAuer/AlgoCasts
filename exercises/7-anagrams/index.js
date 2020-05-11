// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// 1 - First attempt
// function anagrams(stringA, stringB) {
//   // removes punctuation and spaces
//   removeNonChars = (str) => str.replace(/[\W]/g, "").toLowerCase();
//   const strA = removeNonChars(stringA);
//   const strB = removeNonChars(stringB);

//   // Ensures StringA and StringB are the same length once
//   // punctuation and spaces are removed.
//   // This also lets us iterate over stringA's keys and compare
//   // values in A and B. Without this, for example,
//   // "aaa" would appear to match "aaab"
//   // since it would just check a[a] and b[a] and they would match
//   if (strA.length != strB.length) {
//     return false;
//   }

//   // Maps characters to object
//   toObj = (str) => {
//     const obj = {};
//     for (let char of str) {
//       obj[char] = obj[char] + 1 || 1;
//     }
//     return obj;
//   };

//   const a = toObj(strA);
//   const b = toObj(strB);

//   for (key of Object.keys(a)) {
//     if (a[key] !== b[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// // 2 - Revised using for...in and comparing the lenght of the Object.keys()
// // instead of comparing string lengths
// function anagrams(stringA, stringB) {
//   const makeCharMap = (str) => {
//     const charMap = {};
//     for (let char of str.replace(/[\W]/g, "").toLowerCase()) {
//       charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
//   };

//   const aMap = makeCharMap(stringA);
//   const bMap = makeCharMap(stringB);

//   // Check that they have the same number of keys
//   if (Object.keys(aMap).length !== Object.keys(bMap).length) {
//     return false;
//   }

//   // Check the each char appears the same number of times
//   for (let char in aMap) {
//     if (aMap[char] !== bMap[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// 3 - Turn into arrays, sort, and ===
function anagrams(stringA, stringB) {
  // Removes nonChars, makes lowercase,
  // turns to array, sorts, turns to string
  const genCharStr = (str) => {
    return str.replace(/[\W]/g, "").toLowerCase().split("").sort().join();
  };

  return genCharStr(stringA) === genCharStr(stringB) ? true : false;
}

anagrams("Whoa! Hi!", "Hi! Whoa!");

module.exports = anagrams;
