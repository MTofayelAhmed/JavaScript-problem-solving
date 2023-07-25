function reverseString(inputString) {
  let reversedString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }
  return reversedString;
}

// Test the function
const inputStr = "hello world";
const outputStr = reverseString(inputStr);
console.log(outputStr); // Output: "dlrow olleh"


function sumOfPositiveNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum; 
}

// Test the function
const inputArr = [2, -5, 10, -3, 7];
const outputSum = sumOfPositiveNumbers(inputArr);
console.log(outputSum); // Output: 19





function findMostFrequentElement(arr) {
    let frequencyCounter = {};
    let maxFrequency = 0;
    let mostFrequentElement;
  
    for (const element of arr) {
      if (frequencyCounter[element]) {
        frequencyCounter[element]++;
      } else {
        frequencyCounter[element] = 1;
      }
  
      if (frequencyCounter[element] > maxFrequency) {
        maxFrequency = frequencyCounter[element];
        mostFrequentElement = element;
      }
    }
  
    return mostFrequentElement;
  }
  
  // Test the function
  const input = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const mostFrequent = findMostFrequentElement(input);
  console.log(mostFrequent); // Output: 3
  

