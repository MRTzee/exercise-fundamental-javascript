// Exercise - Example
function createTriangle(height) {
  // mengontrol jumlah baris atau tinggi segitiga. Setiap iterasi dalam perulangan ini merepresentasikan satu baris dari segitiga.
  for (let i = 1; i <= height; i++) {
    // Saat variabel row diinisialisasi di dalam loop for, itu berarti variabel tersebut diinisialisasi ulang setiap kali iterasi dimulai.
    let row = "";
    // digunakan untuk mengontrol jumlah kolom atau lebar segitiga. Setiap iterasi dalam perulangan ini merepresentasikan satu kolom dari segitiga.
    for (let j = 1; j <= i; j++) {
      row += "* ";
      // console.log(row += "* ");
    }
    // menampilkan
    console.log(row);
  }
}
createTriangle(5);

// ===========================================================
function createNumberTriangle(height) {
  let currentNumber = 1;
  // mengontrol jumlah baris atau tinggi segitiga. Setiap iterasi dalam perulangan ini merepresentasikan satu baris dari segitiga.
  for (let i = 1; i <= height; i++) {
    // Saat variabel row diinisialisasi di dalam loop for, itu berarti variabel tersebut diinisialisasi ulang setiap kali iterasi dimulai.
    let row = "";
    // digunakan untuk mengontrol jumlah kolom atau lebar segitiga. Setiap iterasi dalam perulangan ini merepresentasikan satu kolom dari segitiga.
    for (let j = 1; j <= i; j++) {
      // untuk mengonversi nomor menjadi string dan menambahkan nol di depannya
      row += currentNumber.toString().padStart(2, "0") + " ";
      // nilai currentNumber ditambahkan dengan 1 agar angka berikutnya dicetak pada kolom berikutnya.
      currentNumber++;
    }
    // Tampilkan
    console.log(row);
  }
}
createNumberTriangle(4);

// ==========================================================================
// Cara Lain bermain dengan 3 IF
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let output = "";
    if (i % 3 === 0 && i % 5 === 0) {
      output = "FizzBuzz";
    } else if (i % 3 === 0) {
      output = "Fizz";
    } else if (i % 5 === 0) {
      output = "Buzz";
    } else {
      output = i;
    }
    console.log(output);
  }
}
fizzBuzz(15);

// ===============================================================================
function calculateBMI(weight, height) {
  // Calculate BMI = weight (kg) / (height (meter))2
  let bmi = weight / (height * height);

  if (bmi < 18.5) {
    return "less weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "ideal";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    return "overweight";
  } else if (bmi >= 30.0 && bmi <= 39.9) {
    return "very overweight";
  } else {
    return "obesity";
  }
}
let weight = 70; // in kilograms
let height = 1.75; // in meters
let bmiCategory = calculateBMI(weight, height);
console.log(bmiCategory);

// ==============================================================================
function removeOddNumbers(arr) {
  // Use the filter method to create a new array with only even numbers
  // Fungsi filter() digunakan untuk membuat array baru yang berisi elemen-elemen dari array arr yang lulus kondisi yang diberikan.
  // Menggunakan Arrow Function
  let evenNumbers = arr.filter((num) => num % 2 === 0);
  return evenNumbers;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = removeOddNumbers(numbers);
console.log(result);

// ==============================================================================
function splitStringToArray(str) {
  // Use the split method to split the string into an array of words
  let wordsArray = str.split(" ");
  return wordsArray;
}

let sentence = "Hello World";
let words = splitStringToArray(sentence);
console.log(words);
