// Exercise - Shooting Game
// Specifications :
// ○ Create a shooting game between two player
// ○ Each player has three properties : name, health and power
// ○ Each player will take turns to shooting
// ○ Before shooting, players get a chance to get random items (health +10 or power +10)
// ○ The game will continue until one of the players has health < 0
// ● Requirements :
// ○ Create ShootingGame & Player class
// ○ ShootingGame class :
// ■ constructor(player1, player2) → player objects as a parameter
// ■ getRandomItem() → return { health: 0 or 10, power: 0 or 10 }
// ■ start() → start shooting games
// ○ Player class :
// ■ Property → name, health (default 100), power (default 10)
// ■ hit(power) → subtract player health
// ■ useItem(item) → apply item to player (increase health or power, based on result from getRandomItem())
// ■ showStatus() → show player status (ex : “Player A (Health => 100, Power => 10) ”)
// ○ ShootingGame start() function flow :
// ■ In every turn :
// ● Show each player status before shooting
// ● Get random item for each player before shooting
// ● Show each player status after shooting
// ■ Show winner name
// class Player {
//   constructor(name, health = 100, power = 10) {
//     this.name = name;
//     this.health = health;
//     this.power = power;
//   }

//   damage(power) {
//     this.health -= power;
//   }

//   useItem(item) {
//     this.health += item.health;
//     this.power += item.power;
//   }

//   showStatus() {
//     return `${this.name} (Health => ${this.health}, Power => ${this.power})`;
//   }
// }

// class ShootingGame {
//   constructor(player1, player2) {
//     this.player1 = player1;
//     this.player2 = player2;
//   }

//   getRandomItem() {
//     const health = Math.random() < 0.5 ? 0 : 10;
//     const power = Math.random() < 0.5 ? 0 : 10;
//     // return {health: health, power: power}
//     return { health, power }; //shortcut
//   }

//   start() {
//     while (this.player1.health > 0 && this.player2.health > 0) {
//       // tampilin dulu status sekarang
//       this.player1.showStatus();
//       this.player2.showStatus();

//       // ini generate random item
//       const itemPlayer1 = this.getRandomItem();
//       const itemPlayer2 = this.getRandomItem();

//       this.player1.useItem(itemPlayer1);
//       this.player2.useItem(itemPlayer2);

//       // player1 hit player2 dan sebaliknya
//       this.player2.damage(this.player1.power);
//       this.player1.damage(this.player2.power);

//       // tampilin status sekarang setelah kena damage
//       console.log(this.player1.showStatus());
//       console.log(this.player2.showStatus());
//     }

//     if (this.player1.health <= 0) {
//       console.log("1");
//       return `${this.player2.name} win`;
//     } else {
//       console.log("2");
//       return `${this.player1.name} win`;
//     }
//   }
// }

// const player1 = new Player("budi");
// const player2 = new Player("siti");
// const game = new ShootingGame(player1, player2);
// game.start();

// Exercise - Salary
// ● Specifications :
// ○ Create a program to calculate total salary based on employee type
// ○ There are two types of employee : full-time & part-time
// ○ Salary for full-time employee :
// ■ IDR 100.000 / hour
// ■ IDR 75.000 / hour, if the number of working hours per day is more than 6 hours
//expected output working hours(7) = 675.000
// ○ Salary for part-time employee :
// ■ IDR 50.000 / hour
// ■ IDR 30.000 / hour, if the number of working hours per day is more than 6 hours
// ● Requirements :
// ○ Create an Employee as a parent class
// ○ Create a FulltimeEmployee and ParttimeEmployee as a child of Employee class
// ■ Create a method in that class to add working hour per day
// ■ Create a method in that class to calculate total salary
// ○ Use inheritance concept
// class Employee {
//   constructor(hourlyRate, overtimeRate) {
//     // tarif per jam (hourlyRate)
//     this.hourlyRate = hourlyRate;
//     // tarif lembur (overtimeRate)
//     this.overtimeRate = overtimeRate;
//     // jumlah jam kerja (workingHours)
//     this.workingHours = 0;
//   }

//   //  menambahkan jumlah jam kerja per hari.
//   addWorkingHours(hours) {
//     this.workingHours += hours;
//   }

//   // Metode calculateSalary() digunakan untuk menghitung total gaji berdasarkan jumlah jam kerja dan tarif per jam, termasuk tarif lembur jika jumlah jam kerja melebihi 6 jam.
//   calculateSalary() {
//     let totalSalary = 0;
//     if (this.workingHours <= 6) {
//       totalSalary = this.workingHours * this.hourlyRate;
//     } else {
//       totalSalary =
//         6 * this.hourlyRate + (this.workingHours - 6) * this.overtimeRate;
//     }
//     return totalSalary;
//   }
// }

// // Karyawan full-time memiliki tarif per jam dan tarif lembur yang berbeda dari karyawan part-time.
// // Dalam kelas ini, kita menetapkan tarif per jam sebesar IDR 100.000 dan tarif lembur sebesar IDR 75.000.
// class FulltimeEmployee extends Employee {
//   constructor() {
//     super(100000, 75000);
//   }
// }

// // Karyawan part-time juga memiliki tarif per jam dan tarif lembur yang berbeda dari karyawan full-time.
// // Dalam kelas ini, kita menetapkan tarif per jam sebesar IDR 50.000 dan tarif lembur sebesar IDR 30.000.
// class ParttimeEmployee extends Employee {
//   constructor() {
//     super(50000, 30000);
//   }
// }

// const fulltimeEmployee = new FulltimeEmployee();
// // pada FULLTIME Jika jam kerja lebih dari 6 jam maka kasih bonus sebesar 75.000
// fulltimeEmployee.addWorkingHours(7);
// console.log("Full-time Employee Salary:", fulltimeEmployee.calculateSalary());

// // pada PARTTIME Jika jam kerja lebih dari 6 jam maka kasih bonus sebesar 30.000
// const parttimeEmployee = new ParttimeEmployee();
// parttimeEmployee.addWorkingHours(7);
// console.log("Part-time Employee Salary:", parttimeEmployee.calculateSalary());

// CARA MAS DANIL
// class Employee {
//     constructor(name) {
//       this.name = name;
//       this.workingHours = 0;
//     }
//   }

//   class FulltimeEmployee extends Employee {
//     constructor(name) {
//       // supaya bisa digunakan oleh induk class, kirim barang dari anak
//       super(name);
//     }

//     addWorkingHours(hour) {
//       this.workingHours += hour;
//     }

//     calculateTotalSalary() {
//       const normalRate = 100000;
//       const overTimeRate = 75000;

//       if (this.workingHours <= 6) {
//         return {
//           total: "Rp " + (this.workingHours * normalRate).toLocaleString("id-ID"),
//         };
//       } else {
//         const normalHour = 6;
//         const overTimehour = this.workingHours - normalHour;

//         return {
//           total:
//             "Rp " +
//             (
//               overTimehour * overTimeRate +
//               normalHour * normalRate
//             ).toLocaleString("id-ID"),
//         };
//       }
//     }
//   }

//   class ParttimeEmployee extends Employee {
//     constructor(name) {
//       // supaya bisa digunakan oleh induk class, kirim barang dari anak
//       super(name);
//     }

//     addWorkingHours(hour) {
//       this.workingHours += hour;
//     }

//     calculateTotalSalary() {
//       const normalRate = 50000;
//       const overTimeRate = 30000;

//       if (this.workingHours <= 6) {
//         return {
//           total: "Rp " + (this.workingHours * normalRate).toLocaleString("id-ID"),
//         };
//       } else {
//         const normalHour = 6;
//         const overTimehour = this.workingHours - normalHour;

//         return {
//           total:
//             "Rp " +
//             (
//               overTimehour * overTimeRate +
//               normalHour * normalRate
//             ).toLocaleString("id-ID"),
//         };
//       }
//     }
//   }

//   // FULL TIME
//   const employee1 = new FulltimeEmployee("budi");
//   employee1.addWorkingHours(7);
//   console.log(employee1.calculateTotalSalary());

//   // PART TIME
//   const employee2 = new ParttimeEmployee("joko");
//   employee2.addWorkingHours(7);
//   console.log(employee2.calculateTotalSalary());
