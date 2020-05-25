// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  // First moves the largest value to the end, then the second-largest
  for (let i = 0; i < arr.length; i++) {
    // - 1 is so that no comparison is made when j === arr.length
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swaps the elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (i !== indexOfMin) {
      // swaps elements
      [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]];
    }
  }

  return arr;
}

function mergeSort(arr) {
  // Base Case
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center); // from 0 up to but not center
  const right = arr.slice(center); // from center index to end

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  mergedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      mergedArr.push(left.shift());
    } else {
      mergedArr.push(right.shift());
    }
  }

  // Replaced everything below
  return [...mergedArr, ...left, ...right];

  // if (left.length) {
  //   mergedArr.push(...left);
  // }

  // if (right.length) {
  //   mergedArr.push(...right);
  // }

  // return mergedArr;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
