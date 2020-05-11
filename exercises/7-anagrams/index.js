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
function anagrams(stringA, stringB) {
  // removes punctuation and spaces
  removeNonChars = (str) => str.replace(/[\W]/g, "").toLowerCase();
  const strA = removeNonChars(stringA);
  const strB = removeNonChars(stringB);

  // Ensures StringA and StringB are the same length once
  // punctuation and spaces are removed.
  // This also lets us iterate over stringA's keys and compare
  // values in A and B. Without this, for example,
  // "aaa" would appear to match "aaab"
  // since it would just check a[a] and b[a] and they would match
  if (strA.length != strB.length) {
    return false;
  }

  // Maps characters to object
  toObj = (str) => {
    const obj = {};
    for (let char of str) {
      obj[char] = obj[char] + 1 || 1;
    }
    return obj;
  };

  const a = toObj(strA);
  const b = toObj(strB);

  for (key of Object.keys(a)) {
    if (a[key] != b[key]) {
      return false;
    }
  }
  return true;
}

anagrams("A tree, a life, a bench", "A tree, a fence, a yard");

module.exports = anagrams;
