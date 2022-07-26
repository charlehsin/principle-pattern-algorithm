const swap = (array, indexA, indexB) => {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
}

const maxHeapify = (array, heapLength, rootIndex) => {
  const leftChildIndex = 2 * rootIndex + 1;
  const rightChildIndex = 2 * rootIndex + 2;
  let maxIndex = rootIndex;

  // Find the index with max value among the root, left child, and right child.
  if (leftChildIndex < heapLength && array[leftChildIndex] > array[maxIndex]) {
    maxIndex = leftChildIndex;
  }
  if (rightChildIndex < heapLength && array[rightChildIndex] > array[maxIndex]) {
    maxIndex = rightChildIndex;
  }

  // Check if the index with max value is the root index or not.
  // If not, we need to swap and then recursively heapify the remaining elements on the right.
  if (maxIndex != rootIndex) {
    swap(array, rootIndex, maxIndex);
    maxHeapify(array, heapLength, maxIndex);
  }
};

const heapSort = (array) => {
  const heapLength = array.length;

  // Change the original array to a max-heap array.
  for (let i = Math.floor(heapLength / 2) - 1; i >= 0; i--) {
    maxHeapify(array, heapLength, i);
  }

  for (let i = heapLength - 1; i > 0; i--) {
    // Swap the root of the heap with the last element of the heap. 
    // Then the last element of the heap becomes sorted in the array.
    swap(array, 0, i);
    // Heapify the reduced heap.
    maxHeapify(array, i, 0);
  }
};


let array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`original array: ${array}`);
heapSort(array);
console.log(`heap-sorted array: ${array}`);

array = [8, 2, 5, 7, 1, 6, 4, 3];
console.log(`original array: ${array}`);
heapSort(array);
console.log(`heap-sorted array: ${array}`);
