// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// 1 - Convert to array, reverse
// function reverseInt(n) {
//   const reversed = parseInt(
//     Math.abs(n).toString().split("").reverse().join("")
//   );

//   return n < 0 ? -1 * reversed : reversed;
// }

// 1A - Add Math.sign to make return line simpler
function reverseInt(n) {
  const reversed = parseInt(
    Math.abs(n).toString().split("").reverse().join("")
  );

  return reversed * Math.sign(n);
}

module.exports = reverseInt;
