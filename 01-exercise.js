// 1 Write a code to find area of rectangle.
// Mendefinisikan panjang dan lebar persegi panjang
const length = 5;
const width = 3;
// Menghitung luas persegi panjang
const area = length * width;
// Menampilkan hasil
console.log(area);

// 2 Write a code to find perimeter of rectangle.
// Definisikan panjang dan lebar persegi panjang
const length2 = 5;
const width2 = 3;
// Hitung keliling persegi panjang
// keliling = 2 * (length + width)
const keliling = 2 * (length2 + width2);
// Tampilkan hasil
console.log(keliling);

// 3 Write a code to find diameter, circumference and area of a circle.
// Masukan jari-jari lingkaran
const radius = 4;
// Tetapkan nilai pi
const pi = 3.14159;
// Hitung diameter
const diameter = 2 * radius;
// Hitung keliling
const keliling2 = 2 * pi * radius;
// let keliling2 = 2 * Math.PI * radius;
// Hitung luas
const area2 = pi * radius * radius;
// let area2 = Math.PI * Math.pow(radius, 2);
// Menampilkan
console.log(diameter);
console.log(keliling2);
console.log(area2);

// 4 Write a code to find angles of triangle if two angles are given.
// Mendefinisikan sudut pertama dan kedua dalam derajat
const angleA = 30; // Misalnya, sudut pertama adalah 30 derajat
const angleB = 60; // Misalnya, sudut kedua adalah 60 derajat

// Menghitung sudut ketiga
const angleC = 180 - (angleA + angleB);

// Menampilkan output
console.log("Sudut ketiga:", angleC, "derajat");

// 5 Write a code to get difference between dates in days.
// Mendefinisikan dua tanggal
const tanggal1 = new Date("2024-02-10");
const tanggal2 = new Date("2024-02-12");

// Menghitung perbedaan antara dua tanggal dalam milidetik
const perbedaanMilidetik = Math.abs(tanggal2 - tanggal1);

// Mengonversi perbedaan milidetik menjadi jumlah hari
console.log(perbedaanMilidetik);
const perbedaanHari = Math.ceil(perbedaanMilidetik / (1000 * 60 * 60 * 24));

// Menampilkan output
console.log("Perbedaan antara dua tanggal dalam hari:", perbedaanHari);

// 6 Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
// Variabel berapaHari diberi nilai 1001, yang akan digunakan untuk menghitung jumlah tahun, bulan, dan sisa hari.
const berapaHari = 1001; // Atur berapa hari
const tahun = Math.floor(berapaHari / 365); // Menghitung tahun
const sisaHariSetelahTahun = berapaHari % 365; // Menghitung sisa hari setelah dihitung sebagai tahun
// console.log(sisaHariSetelahTahun);
const bulan = Math.floor(sisaHariSetelahTahun / 30); // Menghitung bulan
const sisaHariSetelahBulan = sisaHariSetelahTahun % 30; // Menghitung sisa hari setelah dihitung sebagai bulan
// console.log(sisaHariSetelahBulan);
const hari = sisaHariSetelahBulan; // Sisa hari adalah hari yang tersisa setelah dihitung sebagai tahun dan bulan
// Menampilkan
console.log(
  `${berapaHari} hari → ${tahun} tahun, ${bulan} bulan, ${hari} hari`
);
