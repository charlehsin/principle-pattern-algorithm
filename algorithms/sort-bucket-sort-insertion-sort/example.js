const insertionSort = (array) => {
  const length = array.length;

  // Loop through all unsorted elements in the array.
  // The 1st element with index 0 is by default sorted already.
  for (let i = 1; i < length; i++) {
    const currentElementValueToCheck = array[i];

    // Since the left of the current element is already sorted, we need to place the current element in the correct position in the left.
    // Loop from right to the left to check until we find an element that is <= the "current element to check" value.
    let j;
    for (j = i - 1; j > -1 && array[j] > currentElementValueToCheck; j--) {
      // j-th element is larger that "current element to check", so move it to the right.
      array[j + 1] = array[j];
    }

    // Now we get the correct position. Move "current element to check" here.
    array[j + 1] = currentElementValueToCheck;
  }
};

const bucketSort = (array, bucketCount) => {
  if (array.length <= 0 || bucketCount <= 0) {
    return;
  }

  // Find the min and max values in the array.
  const minValue = Math.min(...array);
  const maxValue = Math.max(...array);

  // Init all the buckets.
  const allBuckets = Array(bucketCount);
  for (let i = 0; i < allBuckets.length; i++) {
    allBuckets[i] = [];
  }

  // Push each element to the corresponding bucket.
  array.forEach(element => {
    const bucketIndex = Math.min(allBuckets.length - 1, Math.floor(bucketCount * (element - minValue) / (maxValue - minValue)));
    allBuckets[bucketIndex].push(element);
  });

  // Reset the array.
  array.length = 0;

  // Do sorting in each bucket, and put all th elements back together.
  allBuckets.forEach(bucket => {
    insertionSort(bucket);
    bucket.forEach(element => {
      array.push(element);
    });
  });
};

let array = [3, 9, 5, 7, 2, 4, 2, 8];
console.log(`original array: ${array}`);
insertionSort(array);
console.log(`insertion-sorted array: ${array}`);

array = [3, 9, 5, 7, 2, 4, 2, 8, 10, 1, 6];
console.log(`original array: ${array}`);
bucketSort(array, 5);
console.log(`bucket-sorted array: ${array}`);

array = [0.20, 0.01, 0.15, 0.05, 0.10, 0.17, 0.03, 0.13, 0.08, 0.04];
console.log(`original array: ${array}`);
bucketSort(array, 3);
console.log(`bucket-sorted array: ${array}`);
