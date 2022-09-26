const exponentialRecursive = (base, power) => {
  if (power == 0) {
    return 1;
  }

  if (power == 1) {
    return base;
  }

  const tempResult = exponentialRecursive(base, Math.floor(power / 2));

  if (power % 2 == 0) {
    return tempResult * tempResult;
  }
  return tempResult * tempResult * base;
};

const exponentialIterative = (base, power) => {
  let result = 1;
  while (power > 0) {
    // Check if the current bit in power number is 1.
    // This will determine if we need to take this bit into consideration or not.
    if (power & 1) {
      result = result * base;
    }

    // Preparing for the next bit in power number.
    base = base * base;
    power = power >> 1;
  }
  return result;
};

let base = 3;
let power = 4;
console.log(`Recursive: ${base} to the power of ${power} is ${exponentialRecursive(base, power)}`);
console.log(`Iterative: ${base} to the power of ${power} is ${exponentialIterative(base, power)}`);
base = 4;
power = 5;
console.log(`Recursive: ${base} to the power of ${power} is ${exponentialRecursive(base, power)}`);
console.log(`Iterative: ${base} to the power of ${power} is ${exponentialIterative(base, power)}`);
base = 13;
power = 105;
console.log(`Recursive: ${base} to the power of ${power} is ${exponentialRecursive(base, power)}`);
console.log(`Iterative: ${base} to the power of ${power} is ${exponentialIterative(base, power)}`);
