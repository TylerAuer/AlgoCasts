// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Solution 1
// function chunk(array, size) {
//   const origArr = array;
//   const returnArr = [];

//   // Makes subarrays of length size
//   while (origArr.length >= size) {
//     const nestedReturnArr = [];
//     for (let i = 0; i < size; i++) {
//       nestedReturnArr.push(origArr.shift());
//     }
//     returnArr.push(nestedReturnArr);
//   }

//   // Checks if there are any leftover numbers
//   if (origArr.length > 0) {
//     returnArr.push(origArr);
//   }

//   return returnArr;
// }

// Solution 2 - Use splice instead of for loop (cleaner)
function chunk(array, size) {
  const origArr = array;
  const returnArr = [];

  while (origArr.length >= size) {
    returnArr.push(origArr.splice(0, size));
  }

  if (origArr.length > 0) {
    returnArr.push(origArr);
  }

  return returnArr;
}

// Solution 3 - Use slice instead of splice so that the original array is not modified. Adjust the index then in the while...loop
// TODO: Redo this with slice so that origArr can be used without mutating

console.log(chunk([1, 2, 3, 4], 2));
console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(chunk([1, 2, 3, 4, 5], 4));
console.log(chunk([1, 2, 3, 4, 5], 10));

module.exports = chunk;
