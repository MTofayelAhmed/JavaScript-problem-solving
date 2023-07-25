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
