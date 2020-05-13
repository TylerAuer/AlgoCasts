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

// 1 - 2x for loops
function steps(n) {
  for (let lvl = 1; lvl <= n; lvl++) {
    let nextLine = "";
    for (let i = 1; i <= n; i++) {
      if (i <= lvl) {
        nextLine += "#";
      } else {
        nextLine += " ";
      }
    }
    console.log(nextLine);
  }
}

module.exports = steps;
