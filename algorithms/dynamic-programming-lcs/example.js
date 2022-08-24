// Tabulation (Bottom Up)
const lcsDynamicProgrammingTabulation = (firstSequence, secondSequence) => {
  const firstLength = firstSequence.length;
  const secondLength = secondSequence.length;

  // Note: length2dArray[i][j] records the length of LCS of firstSequence[0 to i -1] and secondSequence[0 to j - 1].
  const length2dArray = new Array(firstLength + 1);
  for (let i = 0; i < length2dArray.length; i++) {
    length2dArray[i] = new Array(secondLength + 1);
  }

  for (let i = 0; i <= firstLength; i++) {
    for (let j = 0; j <= secondLength; j++) {
      if (i === 0 || j === 0) {
        length2dArray[i][j] = 0;
      } else if (firstSequence[i - 1] === secondSequence[j - 1]) {
        length2dArray[i][j] = 1 + length2dArray[i - 1][j - 1];
      } else {
        length2dArray[i][j] = Math.max(length2dArray[i - 1][j], length2dArray[i][j - 1]);
      }
    }
  }

  return length2dArray[firstLength][secondLength];
};

// Memoization (Top Down) data
const getInitResultLookUp = (firstLength, secondLength) => {
  const resultLookUp = new Array(firstLength + 1);
  for (let i = 0; i < firstLength + 1; i++) {
    resultLookUp[i] = new Array(secondLength + 1).fill(-1);
  }
  return resultLookUp;
};

// Memoization (Top Down)
const lcsDynamicProgrammingMemoization = (firstSequence, secondSequence, firstWorkingLength, secondWorkingLength, resultLookUp) => {
  // Note: resultLookUp[i][j] records the length of LCS of firstSequence[0 to i -1] and secondSequence[0 to j - 1].
  
  if (resultLookUp[firstWorkingLength][secondWorkingLength] !== -1) {
    return resultLookUp[firstWorkingLength][secondWorkingLength];
  }

  if (firstWorkingLength === 0 || secondWorkingLength === 0) {    
    return resultLookUp[firstWorkingLength][secondWorkingLength] = 0;
  }

  if (firstSequence[firstWorkingLength - 1] === secondSequence[secondWorkingLength - 1]) {
    return resultLookUp[firstWorkingLength][secondWorkingLength] =
      1 + lcsDynamicProgrammingMemoization(firstSequence, secondSequence, firstWorkingLength - 1, secondWorkingLength - 1, resultLookUp);
  }

  return resultLookUp[firstWorkingLength][secondWorkingLength] = Math.max(
    lcsDynamicProgrammingMemoization(firstSequence, secondSequence, firstWorkingLength, secondWorkingLength - 1, resultLookUp),
    lcsDynamicProgrammingMemoization(firstSequence, secondSequence, firstWorkingLength - 1, secondWorkingLength, resultLookUp));
};

// LCS of the following 2 sequences is MWFA with length = 4.
const firstSequence = 'TMNWEFA';
const secondSequence = 'UFMZZWRFPAT';
console.log(`The length of LCS via Dynamic Programming (Tabulation) is ${lcsDynamicProgrammingTabulation(firstSequence, secondSequence)}`);
const resultLookUp = getInitResultLookUp(firstSequence.length, secondSequence.length);
console.log(`The length of LCS via Dynamic Programming (Memoization) is ${lcsDynamicProgrammingMemoization(
  firstSequence, secondSequence, firstSequence.length, secondSequence.length, resultLookUp)}`);
