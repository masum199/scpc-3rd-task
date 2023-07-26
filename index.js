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

// Task 3 

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









