// 1 Write a code to convert celsius to fahrenheit
// rumus Celsius ke fahrenheit: tF = 9/5.tC+32.
// tentukan celcius
const celcius = 45;
// convert celcius ke fahrenheit
const convert = (9 / 5) * celcius + 32;
// tampilkan hasil
console.log(convert);

// 2 Write a code to check whether the number is odd or even
// untuk mencari genap dan ganjil ialah dengan modulus %
const angka = 3;
// cek dengan modulus dan tampilkan hasil
if (angka % 2) {
  console.log(`Angka ${angka} ialah ganjil`);
} else {
  console.log(`Angka ${angka} ialah genap`);
}

// 3 Write a code to check whether the number is prime number or not
// CARA 1
// Tentukan bilangan berapa yang akan di cek primanya
const number = 97;
let isPrime = true; // Inisialisasi isPrime dengan true, asumsi angka adalah prima

// Cek apakah bilangan tersebut lebih besar dari 1, karena bilangan prima harus lebih besar dari angka 1.
if (number <= 1) {
  isPrime = false;
} else {
  let sqrtNumber = Math.sqrt(number); // Simpan akar kuadrat dari bilangan tersebut
  console.log(sqrtNumber);
  // Cek apakah bilangan tersebut bisa habis dibagi oleh bilangan selain 1 dan dirinya sendiri
  // Cara mengeceknya, mulai dari angka 2 hingga akar dari bilangan tersebut
  for (let i = 2; i <= sqrtNumber; i++) {
    if (number % i === 0) {
      isPrime = false;
    }
  }
}

// Tampilkan hasil dengan ternary operator
console.log(
  number + (isPrime ? " is a prime number" : " is not a prime number")
);

// PUNYA KAK DANIEL
// yang dibagi 2 mempunyai sisa bagi 1
// yang berarti hanya memeriksa angka sampai setengah dari bilangan
const nomor = 7;
let optimusPrime = true;
if (nomor <= 1) {
  optimusPrime = false;
} else {
  for (let i = 2; i < nomor; i++) {
    if (nomor % i === 0) {
      optimusPrime = false;
      break;
    }
  }
}
// Tampilkan hasil dengan ternary operator
console.log(
  nomor + (optimusPrime ? " is a prime number" : " is not a prime number")
);

// 4 Write a code to find the sum of the numbers 1 to N
// ( num * (num + 1)) /2
// Tentukan bilangan
const N = 10;
// atur nilai awal untuk dijumlahkan kemudian
// result = (num * (num + 1)) / 2
let sum = 0;
// deklarasi variabel dengan tipe data string untuk memasukkan 'angka' dan '+'
let sumExpression = "";
// melakukan perulangan, pengecekan dan penambahan
for (let i = 1; i <= N; i++) {
  // Penambahan operator singkat khusus untuk penjumlahan
  sum += i;
  // penambahan operator singkat khusus untuk string
  sumExpression += i;
  //   message += i + (i !== angka ? " + " : "")
  // untuk memastikan agar tidak melewati bilangan N
  if (i < N) {
    // penambahan karakter +
    sumExpression += " + ";
  }
}
// tampilan output dengan template literal
console.log(
  `Penjumlahan dari bilangan 1 - ${N} adalah: ${sumExpression} = ${sum}`
);

// 5 Write a code to find factorial of a number
// Tentukan bilangan
const n = 4;
// deklarasi variabel dengan tipe data string untuk memasukkan 'angka' dan 'x'
let hasilExpression = "";
// cek kondisi khusus untuk angka 0 dan 1
if (n === 0 || n === 1) {
  console.log(`Factorial ${n} adalah 1`);
} else {
  //   deklarasi variabel untuk menampung hasil dari perkalian
  let hasil = 1;
  //   perulangan
  //   for(let i = 5; i >= 1; i--)
  for (let i = 1; i <= n; i++) {
    // Penambahan operator singkat khusus untuk perkalian
    hasil *= i;
    // penambahan operator singkat khusus untuk string
    hasilExpression += i;
    // untuk memastikan agar tidak melewati bilangan n
    if (i < n) {
      // penambahan karakter x
      hasilExpression += " x ";
    }
  }
  //   menampilkan hasil
  console.log(
    `Factorial dari bilangan ${n}! adalah ${hasilExpression} = ${hasil}`
  );
}

// 6 Write a code to print the first N fibonacci numbers
// pola bilangan Fibonacci adalah susunan angka dengan nilai angka berikutnya yang diperoleh dari hasil menambahkan kedua angka sebelumnya secara berturut-turut.
// masukkan bilangan fibonacci berapa yang diinginkan
const input = 15;
// Inisialisasi deret Fibonacci dengan dua angka pertama menggunakan array
let fibSeries = [1, 1]; //
// Lakukan perulangan for untuk mendapatkan deret fibo dan memakai Rumus fibonacci Un = Un – 1 + Un – 2
for (let i = 2; i < input; i++) {
  // .push berfungsi untuk menambahkan value ke dalam array
  fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]); // Hasilkan angka Fibonacci berikutnya dengan menjumlahkan dua angka terakhir
}
// tampilkan hasil
console.log(`Deretan fibonacci bilangan ke ${input} adalah: ${fibSeries}`);

// let a - 0;
// let b = 1;
// for (let i = 0; i < n; i++) {
// let next = a + b;
// a = b
// b = next
// }
