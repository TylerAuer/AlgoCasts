// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// 1 - 2x For loops
// function steps(n) {
//   for (let lvl = 1; lvl <= n; lvl++) {
//     let nextLine = "";
//     for (let i = 1; i <= n; i++) {
//       i <= lvl ? (nextLine += "#") : (nextLine += " ");
//     }
//     console.log(nextLine);
//   }
// }

// 2 - Recursion
// function steps(n) {
//   const recSteps = (lvl, len) => {
//     const pound = "#";
//     const space = " ";

//     console.log(pound.repeat(len - lvl + 1) + space.repeat(lvl - 1));
//     // Stop if on level 1, else recursively call recSteps

//     if (lvl > 1) {
//       recSteps(lvl - 1, len);
//     }
//     return;
//   };

//   recSteps(n, n);
// }

// 3 - Better Recursion
function steps(n, lvl = 1) {
  // Base Case
  if (lvl > n) {
    return;
  }

  // Recursive Case
  console.log("#".repeat(lvl) + " ".repeat(n - lvl));
  steps(n, lvl + 1);
}

module.exports = steps;
