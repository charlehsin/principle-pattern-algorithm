const modularExponentiationRecursive = (base, power, modulo) => {
  base = base % modulo;

  if (power === 0) {
    return 1;
  }

  if (power === 1) {
    return base;
  }

  // odd
  if (power & 1) {
    return (base * modularExponentiationRecursive(base, power - 1, modulo)) % modulo;
  }

  // even
  return modularExponentiationRecursive((base * base) % modulo, Math.floor(power / 2), modulo);
};

const modularExponentiationIterative = (base, power, modulo) => {
  let result = 1;

  base = base % modulo;

  while (power > 0) {
    // If the power is odd.
    if (power & 1) {
      result = (result * base) % modulo;
    }

    power = Math.floor(power / 2);
    base = (base * base) % modulo;  
  }

  return result;
};

let base = 3;
let power = 3;
let modulo = 5;
console.log(`Recursive: ${base}^${power} % ${modulo} = ${modularExponentiationRecursive(base, power, modulo)}`);
console.log(`Iterative: ${base}^${power} % ${modulo} = ${modularExponentiationIterative(base, power, modulo)}`);
base = 4;
power = 5;
modulo = 8;
console.log(`Recursive: ${base}^${power} % ${modulo} = ${modularExponentiationRecursive(base, power, modulo)}`);
console.log(`Iterative: ${base}^${power} % ${modulo} = ${modularExponentiationIterative(base, power, modulo)}`);
base = 2;
power = 12;
modulo = 11;
console.log(`Recursive: ${base}^${power} % ${modulo} = ${modularExponentiationRecursive(base, power, modulo)}`);
console.log(`Iterative: ${base}^${power} % ${modulo} = ${modularExponentiationIterative(base, power, modulo)}`);
base = 13;
power = 5;
modulo = 8;
console.log(`Recursive: ${base}^${power} % ${modulo} = ${modularExponentiationRecursive(base, power, modulo)}`);
console.log(`Iterative: ${base}^${power} % ${modulo} = ${modularExponentiationIterative(base, power, modulo)}`);
