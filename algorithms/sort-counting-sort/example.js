// This example is assuming that the array has elements of positive integers for simplicity purpose.
const countingSort = (array) => {
  const arrayLength = array.length;
  const maxValue = Math.max(...array);

  // Create a count array of length maxValue + 1, and fill it with 0.
  const countArray = new Array(maxValue + 1).fill(0);

  // Store count of each element in array.
  array.forEach(value => countArray[value]++);

  // Update the value by adding the value at the previous index.
  for (let i = 1; i <= maxValue; i++) {
    countArray[i] = countArray[i] + countArray[i - 1];
  }

  // Create and fill the output array.
  // Starting from the end to the front will make this sort stable.
  const outArray = new Array(arrayLength).fill(0);
  for (let i = arrayLength - 1; i >= 0; i--) {
    outArray[countArray[array[i]] - 1] = array[i];
    --countArray[array[i]];
  }

  return outArray;
}

let array = [9, 2, 3, 7, 1, 6];
console.log(`original array: ${array}`);
console.log(`counting-sorted array: ${countingSort(array)}`);

array = [9, 2, 2, 7, 1, 1, 4, 6, 5];
console.log(`original array: ${array}`);
console.log(`counting-sorted array: ${countingSort(array)}`);