const partition = (array, startIndex, endIndex) => {
  // Use the last element as the pivot value. There are other options.
  const pivotValue = array[endIndex];

  // When we loop through this array, if we find an element < pivot value, we will swap that element with the element at this pivot index.
  // Then we will accumulate this pivot index.
  // Basically, all elements at the left of this pivot index are < pivot value.
  let pivotIndex = startIndex;

  for (let i = startIndex; i < endIndex; i++) {
    if (array[i] < pivotValue) {
      // Swapping element. Use one-line swapping.
      [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
      pivotIndex++;
    }
  }

  // Move the pivot value to the pivot index.
  // Swapping element. Use one-line swapping.
  [array[pivotIndex], array[endIndex]] = [array[endIndex], array[pivotIndex]];

  return pivotIndex;
};

const quickSortRecursive = (array, startIndex, endIndex) => {
  if (startIndex >= endIndex) {
    return;
  }

  // The following line will make sure that array[pivotIndex] is already at the correct position,
  // and the left elements are < array[pivotIndex] and the right elements are >= array[pivotIndex].
  const pivotIndex = partition(array, startIndex, endIndex);

  // Then we need to quick sort recursively for the left array and for the right array.
  quickSortRecursive(array, startIndex, pivotIndex - 1);
  quickSortRecursive(array, pivotIndex + 1, endIndex);
};

const quickSortIterative = (array) => {
  // Create an array to store the start/end indexes of the unsorted blocks of elements.
  const unsortedIndexes = [];

  // Initially, the entire block is unsorted. Thus, the start index is 0 and the end index is array length - 1.
  unsortedIndexes.push(0);
  unsortedIndexes.push(array.length - 1);

  // Do this iteratively until there is no unsorted elements block left.
  while (unsortedIndexes[unsortedIndexes.length - 1] >= 0) {
    // Get the target unsorted elements block.
    // For pop, 1st is the end and the 2nd is the start.
    const endIndex = unsortedIndexes.pop();
    const startIndex = unsortedIndexes.pop();

    // The following line will make sure that array[pivotIndex] is already at the correct position,
    // and the left elements are < array[pivotIndex] and the right elements are >= array[pivotIndex].
    const pivotIndex = partition(array, startIndex, endIndex);

    if (pivotIndex - 1 > startIndex) {
      // This means that there are unsorted elements to the left of pivot index.
      // So we store this left block.
      unsortedIndexes.push(startIndex);
      unsortedIndexes.push(pivotIndex - 1);
    }

    if (pivotIndex + 1 < endIndex) {
      // This means that there are unsorted elements to the right of pivot index.
      // So we store this right block.
      unsortedIndexes.push(pivotIndex + 1);
      unsortedIndexes.push(endIndex);
    }
  }
};

let targetArray = [98, 1, 3, 76, 100, 5, 2, 0];
console.log(`To be sorted: ${targetArray}`);
quickSortRecursive(targetArray, 0, targetArray.length - 1);
console.log(`Sorted: ${targetArray}`);

targetArray = [98, 1, 3, 76, 100, 5, 2, 0];
console.log(`To be sorted: ${targetArray}`);
quickSortIterative(targetArray, 0, targetArray.length - 1);
console.log(`Sorted: ${targetArray}`);
