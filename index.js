// TASK 1

// function reverseString (str) {
//     let reversedString = ""
//     for(let i = str.length - 1; i >= 0; i--){
//         reversedString += str[i]
//     }
//     return reversedString
// }
// const inputString = "Hello World"
// const reversedStringResult = reverseString(inputString)
// console.log(reversedStringResult)


// Task 2

// function sumOfAllNumbers (numbers) {
//     let sum = 0
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > 0){
//             sum += numbers[i]
//         }
//       }
//       return sum
// }
// const inputArray = [2, -5, 10, -3, 7]
// const result = sumOfAllNumbers(inputArray)
// console.log(result)

// Task 3

// function findMostFrequentElement(arr) {
//     let maxFrequency = 0;
//     let mostFrequentElement;

//     for (let i = 0; i < arr.length; i++) {
//         let currentFrequency = 1;

//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 currentFrequency++;
//             }
//         }
//         if (currentFrequency > maxFrequency) {
//             maxFrequency = currentFrequency;
//             mostFrequentElement = arr[i];
//         }
//     }

//     return mostFrequentElement;
// }

// const inputArray = [3, 5,2,2,2,2,4,6, 2,2,];
// const result = findMostFrequentElement(inputArray);
// console.log(result);

// TASK 4

// function arrayOfNumbersAndTarget(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             // console.log(arr[j]);
//             if(arr[i] + arr[j] == target){
//                 return [i,j]
//             }
            
//         }
//     }
//     return []
// }
// const arrayValue = [2, 3, 6, 8, 11, 15]
// const targetValue = 9;
// const result = arrayOfNumbersAndTarget(arrayValue,targetValue)
// console.log(result);


// Task 5

// function simpleCalculator(num1,operator,num2){
//     if(operator == "+"){
//         return num1 + num2;
//     }
//     else if(operator == "-"){
//         return num1-num2
//     }
//     else if(operator == "*"){
//         return num1 * num2
//     }
//     else if (operator === '/') {
//         if (num2 === 0) {
//             throw  Error("Division by zero is not allowed.");
//         }
//         return num1 / num2;
//     }
// }
// console.log(simpleCalculator(5, "+", 5));
// console.log(simpleCalculator(5, "-", 5));
// console.log(simpleCalculator(5, "*", 5));
// console.log(simpleCalculator(5, "/", 5));




// TASK 6

// function generateRandomPassword(length) {
//     const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const numberChars = "0123456789";
//     const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

//     const allChars = upperCaseChars + lowerCaseChars + numberChars + specialChars;
//     let password = "";
//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * allChars.length);
//         password += allChars.charAt(randomIndex);
//     }
//     return password;
// }
// const passwordLength = 20;
// const newPassword = generateRandomPassword(passwordLength);
// console.log(newPassword);









