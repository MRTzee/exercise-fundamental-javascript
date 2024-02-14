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
// CARA 1
// function calculateSum(arr1, arr2) {
//     const result = [];
//     for (let i = 0; i < arr1.length; i++) {
//         const sum = arr1[i] + arr2[i];
//         result.push(sum);
//     }
//     return result;
// }
// const arr1 = [1, 2, 3];
// const arr2 = [3, 2, 1];
// console.log(calculateSum(arr1, arr2));
// CARA 2
// function calculateSum(arr1, arr2) {
//     // map() membuat array baru dengan menerapkan suatu fungsi pada setiap elemen array.
//     // (value, index) => "arrow function"
//     // value yang mewakili nilai pada setiap iterasi dari array arr1
//     // index yang mewakili indeks dari nilai tersebut dalam array.
//     // value + arr2[index] -> untuk menambahkan nilai dari arr1 dengan nilai yang memiliki indeks yang sama dalam array arr2.
//     return arr1.map((value, index) => value + arr2[index]);
// }
// const arr1 = [1, 2, 3];
// const arr2 = [3, 2, 1];
// console.log(calculateSum(arr1, arr2));
// Jadi, secara keseluruhan, bagian ini akan menghasilkan array baru yang berisi hasil penjumlahan setiap elemen dari arr1 dengan elemen yang memiliki indeks yang sama dari arr2.

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
