const binarySearchIterative = (sortedArray, targetToSearch) => {
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  while (startIndex <= endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2);

    if (sortedArray[midIndex] === targetToSearch) {
      // Found it.
      return midIndex;
    }

    if (sortedArray[midIndex] < targetToSearch) {
      // Consider only the right half.
      startIndex = midIndex + 1;
    } else {
      // Consider only the left half.
      endIndex = midIndex - 1;
    }
  }

  // Cannot find the target.
  return -1;
};

const binarySearchRecursive = (sortedArray, startIndex, endIndex, targetToSearch) => {
  if (startIndex > endIndex) {
    // cannot find the target.
    return -1;
  }

  const midIndex = Math.floor((startIndex + endIndex) / 2);

  if (sortedArray[midIndex] === targetToSearch) {
    // Found it.
    return midIndex;
  }

  if (sortedArray[midIndex] < targetToSearch) {
    // Consider only the right half.
    return binarySearchRecursive(sortedArray, midIndex + 1, endIndex, targetToSearch);
  }
  
  // Consider only the left half.
  return binarySearchRecursive(sortedArray, startIndex, endIndex - 1, targetToSearch);
};


let sortedArray = [2, 5, 6, 8, 11, 20, 23, 26];
console.log(`original sorted array: ${sortedArray}`);
console.log(`With iterative binary search 23 is at index ${binarySearchIterative(sortedArray, 23)}.`);
console.log(`With iterative binary search 33 is at index ${binarySearchIterative(sortedArray, 33)}.`);
console.log(`With recursive binary search 23 is at index ${binarySearchRecursive(sortedArray, 0, sortedArray.length - 1, 23)}.`);
console.log(`With recursive binary search 33 is at index ${binarySearchRecursive(sortedArray, 0, sortedArray.length - 1, 33)}.`);
