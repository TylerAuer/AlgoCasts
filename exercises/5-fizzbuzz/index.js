// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// 1 - Build a string
// function fizzBuzz(n) {
//   iterator = (number) => {
//     let str = "";
//     if (number % 3 === 0) {
//       str += "fizz";
//     }
//     if (number % 5 === 0) {
//       str += "buzz";
//     }

//     return str ? str : number;
//   };

//   // call and log for numbers 1 to n
//   for (let i = 1; i <= n; i++) {
//     console.log(iterator(i));
//   }
// }

// 2 - Build a string inside for loop
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    if (i % 3 === 0) {
      str += "fizz";
    }
    if (i % 5 === 0) {
      str += "buzz";
    }
    console.log(str ? str : i);
  }
}

module.exports = fizzBuzz;
