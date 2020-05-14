// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// 1 - Recursive
function pyramid(n, lvl = 1) {
  // Base Case
  if (lvl > n) {
    return;
  }

  // Recursive Case
  const width = 2 * n - 1; // number of chars in each lvl
  const pounds = 2 * lvl - 1;
  const spacesPerSide = (width - pounds) / 2;
  console.log(
    " ".repeat(spacesPerSide) + "#".repeat(pounds) + " ".repeat(spacesPerSide)
  );
  pyramid(n, lvl + 1);
}

module.exports = pyramid;
