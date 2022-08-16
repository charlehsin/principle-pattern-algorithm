const fibonacciRecursive = (n) => {
  if (n <= 1) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};

// Tabulation (Bottom Up)
const fibonacciDynamicProgrammingTabulation = (n) => {
  const fibo = new Array(n + 2);
  fibo[0] = 0;
  fibo[1] = 1;

  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }

  return fibo[n];
};

// Memoization (Top Down) data
const resultLookUp = new Array(100);
const initResultLookUp = () => {
  for (let i = 0; i < resultLookUp.length; i++) {
    resultLookUp[i] = -1;
  }
};

// Memoization (Top Down)
const fibonacciDynamicProgrammingMemoization = (n) => {
  if (resultLookUp[n] == -1) {
    if (n <= 1) {
      resultLookUp[n] = n;
    } else {
      resultLookUp[n] = fibonacciDynamicProgrammingMemoization(n - 1) + fibonacciDynamicProgrammingMemoization(n - 2);
    }
  }
  return resultLookUp[n];
};

console.log(`The 10th Fibonacci number via Recursive method is ${fibonacciRecursive(10)}`);
console.log(`The 10th Fibonacci number via Dynamic Programming (Tabulation) is ${fibonacciDynamicProgrammingTabulation(10)}`);
initResultLookUp();
console.log(`The 10th Fibonacci number via Dynamic Programming (Memoization) is ${fibonacciDynamicProgrammingMemoization(10)}`);
