// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Iterative Solution
function fib(n) {
  // returns 0, 1 for fib(0) and fib(1) respectively
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  let prevFib = 0;
  let curFib = 1;

  // iterates forward by adding two previous fibs
  for (let i = 1; i < n; i++) {
    [prevFib, curFib] = [curFib, prevFib + curFib];
  }

  return curFib;
}

// Recursive Solution
// function fib(n) {}

module.exports = fib;
