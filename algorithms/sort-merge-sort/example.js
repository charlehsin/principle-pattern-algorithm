const merge = (sortedLeftArray, sortedRightArray) => {
  const tempArray = [];

  // Stop the while loop if either one is empty.
  // Otherwise, we keep comparing the 1st elements in each array.
  while (sortedLeftArray.length && sortedRightArray.length) {
    // Move the 1st element in each array that is smaller to the temp array.
    tempArray.push(sortedLeftArray[0] < sortedRightArray[0] ? sortedLeftArray.shift() : sortedRightArray.shift());
  }

  // Concatenating the tem array with the leftover elements.
  return [...tempArray, ...sortedLeftArray, ...sortedRightArray];
};

const mergeSort = (array) => {
  // When we only have 1 element left, this is done.
  if (array.length < 2) {
    return array;
  }

  // Get the middle index.
  const middleIndex = Math.floor(array.length / 2);

  // Get the left array. The remaining array becomes the right array since we use splice.
  const leftArray = array.splice(0, middleIndex);

  // Call recursively until each sub-array is done.
  return merge(mergeSort(leftArray), mergeSort(array));
};

const toBeSortedArray = [98, 1, 3, 76, 100, 5, 2, 0];
console.log(`To be sorted: ${toBeSortedArray}`);
console.log(`Sorted: ${mergeSort(toBeSortedArray)}`);
