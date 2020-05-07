// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
// maxChar("bbaa") === "ab" not "ba"

// 1 - Build Object
function maxChar(str) {
  const arr = str.split("");

  const charCounts = {};
  for (char of arr) {
    // if key exists => increment
    if (charCounts[char]) {
      charCounts[char] += 1;
      // if key doesn't exist => create
    } else {
      charCounts[char] = 1;
    }
  }
  // determine max count
  let maxCount = 0;
  for (char in charCounts) {
    if (charCounts[char] > maxCount) {
      maxCount = charCounts[char];
    }
  }
  const maxArr = [];
  // build arr then str of maxChar(s)
  for (char in charCounts) {
    if (charCounts[char] === maxCount) {
      maxArr.push(char);
    }
  }
  return maxArr.sort().join("");
}

console.log(maxChar("FFFaaabbbCCC"));

module.exports = maxChar;
