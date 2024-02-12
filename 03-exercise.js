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
// const word = "madam"; // Masukkan kata yang ingin dicek palindrome
// // method split('') -> ['h', 'e', 'l', 'l', 'o']
// // method reverse('') -> ['o', 'l', 'l', 'e', 'h']
// // method join('') -> 'olleh'
// const reversedWord = word.split("").reverse().join("");
// console.log(reversedWord);
// // Periksa apakah stringnya sama dengan kebalikannya
// console.log(word === reversedWord ? "palindrom" : "bukan palindrome");

// CARA LAIN
// const palindrome = "malam";
// let q = true;
// for (let i = palindrome.length - 1; i >= 0; i--) {
//   if (palindrome[i] !== palindrome[palindrome.length - 1 - i]) {
//     q = false;
//     break;
//   }
// }
// if (q) {
//   console.log(`${palindrome} is a palindrome.`);
// } else {
//   console.log(`${palindrome} is not a palindrome.`);
// }

// 3  Write a code to convert centimeter to kilometer ====================================================================
// ○ Example : 100000 → “1 km"
// const centimeters = 1000000;
// let centiToKilo = centimeters / 100000; // 1 kilometer = 100.000 centimeters
// centiToKilo += " km";
// console.log(centimeters + " cm -> " + centiToKilo);

// 4 Write a code to format number as currency (IDR) =====================================================================
// ○ Example : 1000 → “Rp. 1.000,00”
// const amount2 = 1000;
// // Fungsi toLocaleString() digunakan untuk memformat angka ke dalam format mata uang yang diinginkan. Di sini, kita menggunakan konfigurasi 'id-ID' untuk bahasa Indonesia dan 'IDR' untuk mata uang Rupiah.
// const formatCurrency = amount2.toLocaleString("id-ID", {
//   style: "currency",
//   currency: "IDR",
// });
// console.log(formatCurrency); // Output: Rp. 1.000,00

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

// // 6 Write a code to capitalize the first letter of each word in a string =================================
// // ○ Example : “hello world” → “Hello World”
// let originalString = "hello world";
// let words = originalString.split(" ");
// console.log(words);
// console.log(words.length);
// console.log(words[0][0]);
// console.log(words[0].substring(1));
// for (let i = 0; i < words.length; i++) {
//   words[i] = words[i][0].toUpperCase() + words[i].substring(1);
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

// const str = 'The QuiCk BrOwN Fox';
// const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const LOWER = 'abcdefghijklmnopqrstuvwxyz';
// let result = [];

// for (let i = 0; i < str.length; i++) {
//   if(UPPER.indexOf(str[i]) !== -1) {
//     result.push(str[i].toLowerCase());
//   } else if(LOWER.indexOf(str[i] !== -1)) {
//     result.push(str[i].toUpperCase());
//   } else {
//     result.push(str[i]);
//   }
// }
// console.log(result.join(''));

// CARA LAIN
// mendefinisikan sebuah string
let inputString = "The QuiCk BrOwN Fox";
// .split('') untuk membagi string menjadi terpisah dan bertipe array
// Metode map() digunakan untuk membuat array baru dengan menerapkan fungsi pada setiap karakter dalam array yang dihasilkan oleh inputString.split('')
let swappedString = inputString
  .split("")
  .map((char) =>
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
  )
  .join("");
// console.log(swappedString = inputString.split('').map(char => char)); //19 karakter
console.log(`"${inputString}" -> "${swappedString}"`);

// 9 Write a code to find the largest of two given integers
// ○ Example : num1 = 42, num2 = 27 → 42
// let num1 = 42;
// let num2 = 27;
// let largestNumber = Math.max(num1, num2)
// console.log(`${num1}, ${num2} -> ${largestNumber}`);

// 10 Write a conditional statement to sort three numbers =============================================================================
// ○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
// let num1 = 42;
// let num2 = 27;
// let num3 = 18;

// if (num1 > num2) {
//   let sort = num1;
//   num1 = num2;
//   num2 = sort;
// }

// if (num1 > num3) {
//   let sort = num1;
//   num1 = num3;
//   num3 = sort;
// }

// if (num2 > num3) {
//   let sort = num2;
//   num2 = num3;
//   num3 = sort;
// }
// console.log(`${num1}, ${num2}, ${num3}`);

// CARA LAIN
// let num1 = 42;
// let num2 = 27;
// let num3 = 18;
// // Masukkan angka-angka ke dalam array
// let numbers = [num1, num2, num3];

// // Urutkan array dengan metode sort dan fungsi pembanding
// numbers.sort((a, b) => a - b);
// // yang terjadi di dalamnya
// // array saat ini [42, 27, 18]
// // 1 membandingkan angka pertama dengan angka kedua 42(a) dan 27(b), 42 - 27 = 15(positif), 27 akan ditempatkan sebelum 42
// // array saat ini [27, 42, 18]
// // 2 membandingkan angka pertama dengan angka ketiga 42(a) dan 18(b), 42 - 18 = 24(positif), 18 akan ditempatkan sebelum 42
// // array saat ini [27, 18, 42]
// // 3 membandingkan angka kedua dengan angka ketiga 27(a) dan 18(b), 27 - 18 = 9(positif), 18 akan ditempatkan sebelum 27
// // array saat ini [18, 27, 42]
// // jika hasil pengurangan bernilai negatif maka angka tetap berada di posisinya
// let result = numbers.join(', '); // menggabungkan array
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
// const str = "An apple a day keeps the doctor away";
// const modifiedStr = "*";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === "a" || str[i] === "A") {
//     result += modifiedStr;
//   } else {
//     result += str[i];
//   }
// }

// console.log(result);
