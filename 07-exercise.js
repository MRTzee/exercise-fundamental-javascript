// 1 =========================================================================================================
// Create a function to check if two objects are equal
// Cara Mas Danil
// function areObjectEqual(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);
//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   for (const key of keys1) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// }
// const arg1 = { a: 1 };
// const arg2 = { a: 3 };
// console.log(areObjectEqual(arg1, arg2));

// function isEqual(obj1, obj2) {
//   // Mengambil key untuk diperiksa value dari 2 objek
//   const key = Object.keys(obj1);
//   return obj1[key] === obj2[key] ? true : false;
// }
// // Example 1
// console.log(isEqual({ a: 2 }, { a: 1 }));
// // Example 2
// console.log(isEqual({ a: "Hello" }, { a: 1 }));
// // Example 3
// console.log(isEqual({ a: 1 }, { a: 1 }));

// 2 =======================================================================================================
// Create a function to get the intersection of two objects
// ● Example
// ○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
// ○ Output: { a: 1 }
// CARA MAS DANIL
// const intersection = (obj1, obj2) => {
//   const duplicate = {};
//   for (let key in obj1) {
//     console.log(key);
//     if (obj1[key] == obj2[key]) {
//       duplicate[key] = obj1[key];
//     }
//   }
//   return duplicate;
// };
// const arg1 = { a: 1, b: 2, c:2 };
// const arg2 = { a: 1, b: 3, c:2 };
// console.log(intersection(arg1, arg2));

// CARA I
// function intersection(data1,data2) {
//     const data1keys = Object.keys(data1);
//     console.log(data1keys);
//     const data2keys = Object.keys(data2);
//     console.log(data2keys);
//     const interkeys = data1keys.filter(value => data2keys.includes(value));
//     console.log(interkeys);
//     const output =  new Object()
//     for(i=0;i<interkeys.length;i++){
//         if(data1[interkeys[i]]===data2[interkeys[i]]){
//             output[interkeys[i]] = data1[interkeys[i]]
//         }
//     }
//     return output
// }
// const data1 = { a: 1, b: 2, d: 4}
// const data2 = { b: 2, c: 3}
// console.log(intersection(data1,data2));

// CARA II
// function intersection(data1, data2) {
//   const output = {};

//   for (const key in data1) {
//     if (data2.hasOwnProperty(key) && data1[key] === data2[key]) {
//       // x = data2.hasOwnProperty(key) && data1[key];
//       // console.log(x);
//       output[key] = data1[key];
//     }
//   }

//   return output;
// }

// const data1 = { a: 1, b: 2, c: 3 };
// const data2 = { b: 2 };

// console.log(intersection(data1, data2));

// 3 =======================================================================================================
// ● Create a function to merge two array of student data and remove duplicate data
// ● Student data : name & email
// CARA MAS DANIL
// const removeDuplicate = (arr1, arr2) => {
//   const combineArray = [...arr1, ...arr2];
//   console.log(combineArray);
//   const temp = [];
//   for (let i = 0; i < combineArray.length; i++) {
//  //filter mereturn array baru
//     const duplicateValues = temp.filter((val) => {
//       return val.email === combineArray[i].email;
//     });
//     console.log(duplicateValues);
//     console.log(combineArray[i]);
//     if (!duplicateValues.length) {
//       temp.push(combineArray[i]);
//     }
//   }
//   return temp;
// };
// const arg1 = [
//   { name: "Student 1", email: "student1@mail.com" },
//   { name: "Student 2", email: "student2@mail.com" },
//   { name: "Student 3", email: "student3@mail.com" },
// ];
// const arg2 = [
//   { name: "Student 1", email: "student1@mail.com" },
//   { name: "Student 3", email: "student3@mail.com" },
// ];
// removeDuplicate(arg1, arg2);

// function mergeAndRemoveDuplicates(array1, array2) {
//   // Menggabungkan kedua array
//   const mergedArray = array1.concat(array2);
//   //   console.log(mergedArray);
//   // Objek untuk menyimpan data siswa yang unik berdasarkan email
//   const uniqueStudents = {};
//   // Iterasi melalui array gabungan
//   mergedArray.forEach((student) => {
//     // Menyimpan data siswa ke objek uniqueStudents hanya jika email belum ada di objek tersebut
//     if (!uniqueStudents.hasOwnProperty(student.email)) {
//       uniqueStudents[student.email] = student;
//     }
//   });
//   // Mengonversi objek uniqueStudents kembali ke dalam array
//   const resultArray = Object.values(uniqueStudents);
//   return resultArray;
// }
// // Contoh penggunaan:
// const array1 = [
//   { name: "Student 1", email: "student1@mail.com" },
//   { name: "Student 2", email: "student2@mail.com" },
// ];
// const array2 = [
//   { name: "Student 1", email: "student1@mail.com" },
//   { name: "Student 3", email: "student3@mail.com" },
// ];
// console.log(mergeAndRemoveDuplicates(array1, array2));

// 4 =======================================================================================================
// Create a function that can accept input as an array of objects and switch all values into property and
// property into value
// ● Example :
// ○ Input : [{ name: ‘David’, age: 20 }]
// ○ Output : [{ David: ‘name’, 20: ‘age’}]
// CARA MAS DANIL
// const switchValuesToKey = (arr) => {
//   console.log(arr);
//   const result = [];

//   arr.forEach((item) => {
//     // item looping 1 -> {name: "David", age: 20}
//     let temp = {}; //{David: "name"}
//     for (let key in item) {
//       // console.log(key);
//       // console.log(item[key]);
//       temp[item[key]] = key;
//     }
//     result.push(temp);
//   });
//   return result;
// };
// const arg = [{ name: "David", age: 20 }];
// console.log(switchValuesToKey(arg));

// Cara 1
// function switchPropertiesAndValues(arrayOfObjects) {
//   // map() untuk melakukan iterasi melalui setiap objek dalam array input arrayOfObjects.
//   return arrayOfObjects.map((object) =>
//     //   Object.fromEntries() untuk membuat sebuah objek baru dari daftar pasangan kunci-nilai yang sudah diubah.
//     Object.fromEntries(
//       // menggunakan Object.entries() untuk mendapatkan daftar pasangan kunci-nilai.
//       //   metode map() lagi untuk mengubah struktur setiap pasangan kunci-nilai.
//       //   menukar posisi kunci dan nilai, sehingga kunci menjadi nilai dan nilai menjadi kunci.
//       Object.entries(object).map(([key, value]) => [value, key])
//     )
//   );
// }
// // Contoh penggunaan:
// const input = [{ name: "David", age: 20 }];
// console.log(switchPropertiesAndValues(input));

// 5 ======================================================================================================
// Create a function to find a factorial number using recursion
// ● Example
// ○ Input : 5
// ○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   // Langkah rekursi: mengalikan angka saat ini dengan faktorial dari angka sebelumnya
//   return n * factorial(n - 1);
// }
// // Contoh penggunaan:
// function calculateFactorial(n) {
//   const result = factorial(n);
//   let expression = "";
//   for (let i = n; i > 0; i--) {
//     expression += i + (i !== 1 ? " x " : "");
//   }
//   return `${expression} = ${result}`;
// }

// const input = 5;
// console.log(`${input}! = ${calculateFactorial(input)}`);

// Cara Mas Danil
// const factorial = (n) => {
//   if (n === 1) {
//     return {
//       steps: ["1"],
//       total: 1,
//     };
//   } else {
//     const next = factorial(n - 1);
//     return {
//       steps: [n, ...next.steps],
//       total: n * next.total,
//     };
//   }
// };
// const number = 5;
// const { steps, total } = factorial(number);

// console.log(steps.join(" x ") + " = " + total);
