// 1 ====================================================================================================================================
// Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
// const arr = [12, 5, 23, 18, 4, 45, 32];
// With Function / Build method
// function MMA(arr) {
//     const maxNumber = Math.max(...arr); // build method untuk nilai tertinggi
//     const minNumber = Math.min(...arr); // build method untuk nilai terendah
//     // Menggunakan method reduce() untuk menjumlahkan semua angka dalam array
//     const sum = arr.reduce((total, num) => total + num, 0); // angka 0 ialah nilai total awal
//     // Menghitung rata-rata dengan membagi jumlah total oleh jumlah elemen dalam array
//     const avg = sum / arr.length;
//     console.log(`lowest : ${minNumber}, highest: ${maxNumber}, average: ${avg}`);
// }
// MMA(arr);
// Without sort function
// function MMA(arr){
//     let max = 0;
//     let min = Infinity; //agar min akan selalu diperbarui dengan nilai minimum aktual selama iterasi
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//         sum += arr[i]
//         // console.log(total);
//     }
//     const avg = sum / arr.length;
//     console.log(`lowest : ${min}, highest: ${max}, average: ${avg}`);
// }
// MMA(arr)

// 2 ====================================================================================================================================
// Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.
// a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
// CARA 1
// function addComaAnd(arr) {
//   const lastWord = arr.pop();
//   const join = arr.join(', ') + `, and ${lastWord}`;
//   return join;
// }
// const arr = ["apple", "banana", "cherry", "date"];
// console.log(addComaAnd(arr));
// CARA 2
// function addComaAnd(arr) {
//   // arr.slice(-1): Ini mengambil elemen terakhir dari array. Dalam kasus ini, hanya satu elemen yang diambil.
//   const lastWord = ", and " + arr.slice(-1);
//   // arr.slice(0, -1): Ini memotong array dari indeks 0 hingga satu sebelum indeks terakhir. Ini berarti mengambil semua elemen kecuali elemen terakhir dari array.
//   const concatenated = arr.slice(0, -1).join(", ") + lastWord;
//   return concatenated;
// }
// const arr = ["apple", "banana", "cherry", "date"];
// console.log(addComaAnd(arr));

// 3 =====================================================================================================
// Write a function to split a string and convert it into an array of words
// a. Example : “Hello World” → [“Hello”, “World”]
// const stringToArray = (string) => {
//     return string.split(" ");
// };
// const string = "Hello World";
// console.log(stringToArray(string));

// 4 ======================================================================================================
// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
// of the same length.
// a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
// Kelemahan jika ditambahkan index makan akan bernilai NaN
// CARA 1
// function calculateSum(arr1, arr2) {
//     const result = [];
//     for (let i = 0; i < arr1.length; i++) {
//         const sum = arr1[i] + arr2[i];
//         result.push(sum);
//     }
//     return result;
// }
// const arr1 = [1, 2, 3, ];
// const arr2 = [3, 2, 1];
// console.log(calculateSum(arr1, arr2));
// CARA 2
// // [1, 2, 3, 4, 5]
// // [1, 2, 3]

// // function calculateArray (arr1, arr2) {
// //     const result = [];
// //     const maxLength = Math.max(arr1.length, arr2.length);

// //     for (let i = 0; i < maxLength; i ++) {
// //         const sum = (arr1[i] || 0) + (arr2[i] || 0);
// //         result.push (sum);
// //     }

// //     return result;
// // }

// // console.log(calculateArray ([1, 2, 3, 5], [1, 2, 3]));
// 5 ========================================================================================================
// Write a function that adds an element to the end of an array. However, the element should only be added if it is
// not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
// function addUniqueElement(arr, newElement) {
//     // check apakah element yang dimasukkan sudah tersedia atau belum
//     if (!arr.includes(newElement)) {
//         // jika elemennya baru maka akan di push ke array
//         arr.push(newElement);
//     }
//     return arr;
// }
// let arr1 = [1, 2, 3, 4];
// let newElement1 = 4;
// console.log(addUniqueElement(arr1, newElement1));

// let arr2 = [1, 2, 3, 4];
// let newElement2 = 7;
// console.log(addUniqueElement(arr2, newElement2));

// 6 ========================================================================================================
// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// a. Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6]
// function evenNumbers(numbers) {
//   const news = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       news.push(numbers[i]);
//     }
//   }
//   return news;
// }
// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(evenNumbers(numbers));

//  7 ============================================================================================================
// Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
// array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
// array can only contain 5 elements).
// a. Example :
// maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// The function will return [5, 10, 24, 3, 6]
// CARA 1
// function insertToMaxSizeArray(maxSize, ...nums) {
//     const result = [];
//     for (let i = 0; i < nums.length && i < maxSize; i++) {
//       result.push(nums[i]);
//     }
//     return result;
//   }
//   const maxSize = 5;
//   const givenIntegers = [5, 10, 24, 3, 6, 7, 8];
//   console.log(insertToMaxSizeArray(maxSize, ...givenIntegers));
//   CARA 2
// function insertToMaxSizeArray(maxSize, ...nums) {
//     // Membatasi jumlah elemen yang dimasukkan ke dalam array sesuai dengan ukuran maksimum
//     const limitedNums = nums.slice(0, maxSize);
//     return limitedNums;
//   }
//   const maxSize = 5;
//   const givenIntegers = [5, 10, 24, 3, 6, 7, 8];
//   console.log(insertToMaxSizeArray(maxSize, ...givenIntegers));

// 8 ======================================================================================================================
// Write a function that will combine 2 given array into one array
// a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
// function combineArray(arr1, arr2) {
//     return arr1.concat(arr2)
// }
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// console.log(combineArray(arr1, arr2));

// 9 ======================================================================================================================
// Write a function to find duplicate values in an array
// a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
// CARA 1
// function findDuplicates(arr) {
//     return arr.filter((value, index) => arr.indexOf(value) !== index);
//   }
//   const arr = [1, 2, 2, 2, 3, 3, 4, 5, 5];
//   console.log(findDuplicates(arr));
// CARA 2
// function findDuplicates(arr) {
//     const counts = {};
//     const duplicates = [];
//     for (const num of arr) {
//       counts[num] = counts[num] ? counts[num] + 1 : 1;
//     }
//     for (const num in counts) {
//       if (counts[num] > 1) {
//         duplicates.push(parseInt(num));
//       }
//     }
//     return duplicates;
//   }
//   const arr = [1, 2, 2, 2, 3, 3, 4, 5, 5];
//   console.log(findDuplicates(arr));

// 10 ===================================================================================================
// Write a function to find the difference in 2 given array
// a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]
// CARA 1
// function findDifference(arr1, arr2) {
//     const difference1 = arr1.filter(value => !arr2.includes(value));
//     const difference2 = arr2.filter(value => !arr1.includes(value));
//     return difference1.concat(difference2);
//   }
//   const arr1 = [1, 2, 3, 4, 5];
//   const arr2 = [3, 4, 5, 6, 7];
//   console.log(findDifference(arr1, arr2));
// CARA 2
// function findDifference(arr1, arr2) {
//     const difference = [];
//     for (let i = 0; i < arr1.length; i++) {
//       if (!arr2.includes(arr1[i])) {
//         difference.push(arr1[i]);
//       }
//     }
//     for (let i = 0; i < arr2.length; i++) {
//       if (!arr1.includes(arr2[i])) {
//         difference.push(arr2[i]);
//       }
//     }
//     return difference;
//   }
//   const arr1 = [1, 2, 3, 4, 5];
//   const arr2 = [3, 4, 5, 6, 7];
//   console.log(findDifference(arr1, arr2));

// 11 ===============================================================================================================================
// Based on the array below write a function that will return primitive data types only.
// let arr = [1, [], undefined, {}, "string", {}, []];
// a. The function will return [1, undefined, “string”]
// function filterPrimitives(arr) {
//     return arr.filter(item => typeof item !== 'object' && !Array.isArray(item));
//   }
//   const arr = [1, [], undefined, {}, "string", {}, []];
//   console.log(filterPrimitives(arr)); // Output: [1, undefined, "string"]

// 12 ==================================================================================================================================
// Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
// CARA 1
// function smallArray(numbers) {
//     let smallest = 0
//     for (i in numbers) {
//       if (numbers[smallest] > numbers[i]) smallest = i
//     }
//     return smallest
// }
// const numbers = [5, 3, 1, 7, 2, 6]
// console.log(smallArray(numbers));
// CARA 2
// function secondSmallestNumber(numbers) {
//     // Sort the array in ascending order
//     numbers.sort((a, b) => a - b);
//     // Return the second element in the sorted array
//     return numbers[1];
// }
// // Example usage:
// const numbers = [5, 3, 1, 7, 2, 6];
// console.log(secondSmallestNumber(numbers));

// 13 ==================================================================================================================================
// Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
// function sumOfNumbers(mixedArray) {
//     let sum = 0;
//     for (let i = 0; i < mixedArray.length; i++) {
//       if (typeof mixedArray[i] === 'number') {
//         sum += mixedArray[i];
//       }
//     }
//     return sum;
//   }

//   // Example usage:
//   const mixedArray = ["3", 1, "string", null, false, undefined, 2];
//   console.log(sumOfNumbers(mixedArray));

// 14 =================================================================================================================================
// Write a function from the below array of number that will return sum of duplicate values.
// let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// a. The function will return 40
// function sumDuplicate(arr) {
// //   const duplicateValues = arr.filter((value, index, array) => {
// //     console.log(index);

// //     return array.indexOf(value) !== index;
// //   });
// //   console.log(duplicateValues);

// //   let result = 0;
// //   for (let item of arr) {
// //     if (duplicateValues.includes(item)) {
// //       result += item;
// //     }
// //   }
// //   return result;
// // }

// // console.log(sumDuplicate([10, 20, 40, 40, 10, 50, 30, 10, 60, 10]));

// 15 ==================================================================================================================================
// Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
// between rock, paper, or scissor.
// a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
// function rockPaperScissors(playerMove) {
//     const computerMoves = ['rock', 'paper', 'scissors'];
//     const computerMove = computerMoves[Math.floor(Math.random() * computerMoves.length)];
//     if (playerMove === computerMove) {
//       return 'Tie';
//     }
//     if ((playerMove === 'rock' && computerMove === 'scissors') ||
//         (playerMove === 'scissors' && computerMove === 'paper') ||
//         (playerMove === 'paper' && computerMove === 'rock')) {
//       return 'Win';
//     }
//     return 'Lose';
//   }
//   // Example usage:
//   console.log(rockPaperScissors('rock'));
