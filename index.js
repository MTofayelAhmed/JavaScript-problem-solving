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





// function findMostFrequentElement(arr) {
//     let frequencyCounter = {};
//     let maxFrequency = 0;
//     let mostFrequentElement;
  
//     for (const element of arr) {
//       if (frequencyCounter[element]) {
//         frequencyCounter[element]++;
//       } else {
//         frequencyCounter[element] = 1;
//       }
  
//       if (frequencyCounter[element] > maxFrequency) {
//         maxFrequency = frequencyCounter[element];
//         mostFrequentElement = element;
//       }
//     }
  
//     return mostFrequentElement;
//   }
  
//   // Test the function
//   const input = [3, 5, 2, 5, 3, 3, 1, 4, 5];
//   const mostFrequent = findMostFrequentElement(input);
//   console.log(mostFrequent); // Output: 3
  

// function findTwoNumbersWithSum(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
  
//     while (left < right) {
//       const sum = arr[left] + arr[right];
  
//       if (sum === target) {
//         // If the sum matches the target, return the indices of the two numbers
//         return [left, right];
//       } else if (sum < target) {
//         // If the sum is less than the target, move the left pointer to consider a larger number
//         left++;
//       } else {
//         // If the sum is greater than the target, move the right pointer to consider a smaller number
//         right--;
//       }
//     }
  
//     // If the loop finishes without finding a pair, return an empty array
//     return [];
//   }
  
//   // Test the function
//   const sortedArray = [1, 3, 9, 6, 11, 15];
//   const targetValue = 9;
//   const result = findTwoNumbersWithSum(sortedArray, targetValue);
//   console.log(result); // Output: [1, 2] (numbers at indices 0 and 3: 1 + 8 = 9)
  

function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return 'Cannot divide by zero';
      }
      return num1 / num2;
    default:
      return 'Invalid operator';
  }
}



const result = calculate(10, 20, '')
console.log(`Result: ${result}`);

