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
// function fib(n) {
//   // returns 0, 1 for fib(0) and fib(1) respectively
//   if (n === 0) {
//     return 0;
//   } else if (n === 1) {
//     return 1;
//   }

//   let prevFib = 0;
//   let curFib = 1;

//   // iterates forward by adding two previous fibs
//   for (let i = 1; i < n; i++) {
//     [prevFib, curFib] = [curFib, prevFib + curFib];
//   }

//   return curFib;
// }

// Recursive Solution - O(2^n) "exponential"
// function fib(n) {
//   // Base Case:
//   if (n < 2) {
//     return n;
//   }

//   // Recursive Case
//   // Calls over and over until reaches fib(0) or fib(1) which
//   // return 0 or 1. Those values are then added (really just counting the fib(1)s)
//   // back up the calls
//   // A tree diagram with fib(5) at the top splitting to
//   // fib(4) and fib(3) illustrates this well
//   return fib(n - 1) + fib(n - 2);
// }

// Memoization function
// function memoize(fn) {
//   // QUESTION: Why doesn't this cash need to be in the function
//   // QUESTION: How is n passed into this ex: fib(100)
//   const cache = {};
//   return function (...args) {
//     if (cache[args]) {
//       return cache[args];
//     }

//     // QUESTION: WHAT?!
//     // function.protype.apply( thisArg, [argsArr] )

//     // MDN: "The apply() method calls a function with a given this value,
//     //and arguments provided as an array (or an array-like object)."
//     const result = fn.apply(this, args);
//     // QUESTION: MDN docs use null like this:
//     // const result = fn.apply(null, args);
//     // see bottom of file for part of output for console.log(this)
//     cache[args] = result;

//     return result;
//   };
// }

// function fib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// fib = memoize(fib);

fibCache = {};
function fib(n) {
  if (fibCache[n]) {
    return fibCache[n];
  }

  if (n < 2) {
    fibCache[n] = n;
  } else {
    fibCache[n] = fib(n - 1) + fib(n - 2);
  }

  return fibCache[n];
}

module.exports = fib;

/**
 The output was many, many copies of this! 

* Object [global] {
  global: [Circular],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] { [Symbol(util.promisify.custom)]: [Function] },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(util.promisify.custom)]: [Function]
  }
}
 */
