// 1 Write a code to display the multiplication table of a given integer =================================================
// Example : Number → 9
// ○ Output :
// ■ 9 x 1
// ■ 9 x 2
// ■ ...
// ■ 9 x 10
// masukkan bilangan yang ingin dicari perkaliannya
// const input = 9;
// // masukkan limit perkalian
// const limit = 10;
// // melakukkan perluangan for
// for (let i = 1; i <= limit; i++) {
//   // menampilkan hasil
//   console.log(`${input} x ${i} = ${input * i} `);
// }

// 2 Write a code to check whether a string is a palindrome or not ========================================================
// Palindrome adalah sebuah kata, frasa, angka, atau urutan karakter lainnya
// yang akan sama jika dibaca dari depan maupun dari belakang.
// ○ Example : ‘madam’ → palindrome
// const word = "hello"; // Masukkan kata yang ingin dicek palindrome
// // method split('') -> ['h', 'e', 'l', 'l', 'o']
// // method reverse('') -> ['o', 'l', 'l', 'e', 'h']
// // method join('') -> 'olleh'
// const isPalindrome = word === word.split("").reverse().join("");
// // Periksa apakah stringnya sama dengan kebalikannya
// console.log(isPalindrome);

// CARA LAIN
// const kata = "malam";
// let reverse = "";
// for (let i = kata.length - 1; i >= 0; i--) {
//   reverse += kata[i]
//   console.log(kata[i]);
//  }

// 3  Write a code to convert centimeter to kilometer ====================================================================
// ○ Example : 100000 → “1 km"
// const centimeters = 1000000;
// let centiToKilo = centimeters / 100000; // 1 kilometer = 100.000 centimeters
// centiToKilo += " km";
// console.log(centimeters + " cm -> " + centiToKilo);

// 4 Write a code to format number as currency (IDR) =====================================================================
// ○ Example : 1000 → “Rp. 1.000,00”
// const harga = 1000;
// // Fungsi digunakan untuk memformat angka ke dalam format mata uang yang diinginkan. Di sini, kita menggunakan konfigurasi 'id-ID' untuk bahasa Indonesia dan 'IDR' untuk mata uang Rupiah.
// const rupiah = new Intl.NumberFormat("id-ID", {
//   style: "currency",
//   currency: "IDR",
//   Ngilangin 0 dua di ujung
//   maximumFractionDigits: 0,
// });
// console.log(rupiah.format(harga)); // Output: Rp. 1.000

// 5 write a code to remove the first occurrence of a given “search string” from a string ===============================
// ○ Example : string = “Hello world”, search string = “ell” → “Ho world”

// let originalString = "Hello World";
// const searchString = "ell";
// const index = originalString.indexOf(searchString);
// console.log(index);
// let result = "";
// if (index !== -1) {
//   result = originalString.slice(0, index) + originalString.slice(index + searchString.length);
// }

// console.log(originalString);
// console.log(result);
// console.log(`"` + originalString + `"` + ", search string = " + `"` + searchString + `"` + " -> " + `"` + result + `"`);

// CARA 2
// let originalString = "Hello World";
// const searchString = "el";
// const result = originalString.replace(searchString, "");
// console.log(result);
// console.log(`${originalString}", search string = "${searchString}" -> "${result}"`);

// 6 Write a code to capitalize the first letter of each word in a string =================================
// ○ Example : “hello world” → “Hello World”
// let originalString = "hello world";
// let words = originalString.split(" ");
// // console.log(words);
// // console.log(words.length);
// // console.log(words[0][0]);
// // console.log(words[0].substring(1));
// for (let i = 0; i < words.length; i++) {
//   words[i] = words[i][0].toUpperCase() + words[i].slice(1);
// }
// let capitalizedString = words.join(" ");
// console.log(capitalizedString);

// // 7 Write a code to reverse a string. ====================================================================
// // ○ Example : “hello” → “olleh”
// const kata = "hello";
// const balikKata = kata.split("").reverse().join("");
// console.log(`"${kata}" -> "${balikKata}"`);

// CARA LAIN
// let originalString = "hello";
// let newString = "";
// for (let i = originalString.length - 1; i >= 0; i--) {
//   newString += originalString[i];
// }
// console.log(newString);

// // 8  Write a code to swap the case of each character from string=================================================================
// // ○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
// const inputString = "The QuiCk BrOwN Fox";
// let swappedString = "";

// for(let i = 0; i < inputString.length; i++) {
//     const char = inputString[i];
//     if (char === inputString[i].toUpperCase()){
//         swappedString += char.toLowerCase();
//     } else {
//         swappedString += char.toUpperCase();
//     }
// }
// console.log(swappedString);

// 9 Write a code to find the largest of two given integers
// ○ Example : num1 = 42, num2 = 27 → 42
// let num1 = 42;
// let num2 = 27;
// let largestNumber = Math.max(num1, num2)
// console.log(`${num1}, ${num2} -> ${largestNumber}`);
// CARA LAIN
// const num1 = 1;
// const num2 = 2;
// let largest;
// if (num1 > num2) {
//     largest = num1;
// } else {
//     largest = num2;
// }
// console.log(largest);

// 10 Write a conditional statement to sort three numbers =============================================================================
// ○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
// const num1 = 42;
// const num2 = 27;
// const num3 = 18;

// const smallest = Math.min(num1, num2, num3);
// const largest = Math.max(num1, num2, num3);
// const middle = num1 + num2 + num3 - smallest - largest;

// console.log(`${smallest}, ${middle}, ${largest}`);
// CARA LAIN
// let num1 = 42;
// let num2 = 27;
// let num3 = 18;
// // Masukkan angka-angka ke dalam array
// let numbers = [num1, num2, num3];
// // Urutkan array dengan metode sort dan fungsi pembanding
// // cara lain
// console.log(numbers.sort());
// // cara lain
// numbers.sort((a, b) => a - b);
// yang terjadi di dalamnya
// array saat ini [42, 27, 18]
// 1 membandingkan angka pertama dengan angka kedua 42(a) dan 27(b), 42 - 27 = 15(positif), 27 akan ditempatkan sebelum 42
// array saat ini [27, 42, 18]
// 2 membandingkan angka pertama dengan angka ketiga 42(a) dan 18(b), 42 - 18 = 24(positif), 18 akan ditempatkan sebelum 42
// array saat ini [27, 18, 42]
// 3 membandingkan angka kedua dengan angka ketiga 27(a) dan 18(b), 27 - 18 = 9(positif), 18 akan ditempatkan sebelum 27
// array saat ini [18, 27, 42]
// jika hasil pengurangan bernilai negatif maka angka tetap berada di posisinya
// let result = numbers.join(", "); // menggabungkan array
// // Cetak array yang telah diurutkan
// console.log(`${num1}, ${num2}, ${num3} -> ${result}`);

// // 11 Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.=============
// // ○ Example : “hello” → 1
// let input = "hello";
// let result = "";

// if (typeof input === "string") {
//   result = 1;
// } else if (typeof input === "number") {
//   result = 2;
// } else {
//   result = 3;
// }
// console.log(result);
// console.log(input + " -> " + result);

// 12 Write a code to change every letter a into * from a string of input =========================================================
// ○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`
// const str = "An apple a day keeps the doctor away".toLowerCase();
// const replaceWord = "a";
// const modifiedStr = "";

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === replaceWord) {
//     modifiedStr += "*";
//   } else {
//     modifiedStr += str[i];
//   }
// }

// console.log(modifiedStr);
