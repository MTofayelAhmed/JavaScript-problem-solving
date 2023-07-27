// Task1

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

// Task2
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




// Task 3
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
  console.log(mostFrequent);
  
// Task Four
function findTwoNumbersWithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const sum = arr[left] + arr[right];
  
      if (sum === target) {
        
        return [left, right];
      } else if (sum < target) {
        
        left++;
      } else {
     
        right--;
      }
    }
    return [];
  }
  
  // Test the function
  const sortedArray = [1, 3, 9, 6, 11, 15];
  const targetValue = 9;
  const result1 = findTwoNumbersWithSum(sortedArray, targetValue);
  console.log(result1); // Output: [1, 2] (numbers at indices 0 and 3: 1 + 8 = 9)
  

// Task5
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


// Task6
function generateRandomPassword(length) {
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const specialCharacters = '!@#$%^&*()-_=+[]{}|;:,.<>?';

  const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomIndex);
  }

  return password;
}


const passwordLength = 12; 
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);

// Task8
function findSecondSmallest(arr) {
  if (arr.length < 2) {
    throw new Error("Array must contain at least two numbers.");
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }

  if (secondSmallest === Infinity) {
    throw new Error("No second smallest element found.");
  }

  return secondSmallest;
}


const numbers = [5, 2, 8, 1, 3];
const secondSmallest = findSecondSmallest(numbers);
console.log("Second Smallest:", secondSmallest);
