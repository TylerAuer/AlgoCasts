// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // Make an NxN arr full of 0's
  const matrix = [];
  for (let i = 0; i < n; i++) {
    const subArr = [];
    for (let j = 0; j < n; j++) {
      subArr.push(0);
    }
    matrix.push(subArr);
  }

  let row = 0;
  let col = -1; // -1 allows the col++ to run before value assignment into matrix
  let counter = 1; // Tracks 1 through n

  // Tracks the direction you are moving
  const dirArr = ["R", "D", "L", "U"];
  let dirIndex = 0;

  for (let i = 2 * n; i > 0; i--) {
    // Move tracker is the number of steps to move in the current direction
    // if n = 5 --> 5,4,4,3,3,2,2,1,0
    let moveTracker = Math.floor(i / 2);

    while (moveTracker > 0) {
      switch (dirArr[dirIndex]) {
        case "R":
          col++;
          break;
        case "D":
          row++;
          break;
        case "L":
          col--;
          break;
        case "U":
          row--;
          break;
      }
      matrix[row][col] = counter;
      moveTracker--;
      counter++;
    }
    dirIndex = (dirIndex + 1) % 4;
  }

  return matrix;
}

module.exports = matrix;
