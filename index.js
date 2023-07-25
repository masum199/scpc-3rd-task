// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.. 

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

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

function sumOfAllNumbers (numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0){
            sum += numbers[i]
        }
      }
      return sum
}
const inputArray = [2, -5, 10, -3, 7]
const result = sumOfAllNumbers(inputArray)
console.log(result)



