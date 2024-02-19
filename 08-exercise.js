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

class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.power = 10;
  }

  hit(opponent) {
    opponent.health -= this.power;
  }

  useItem(item) {
    this.health += item.health;
    this.power += item.power;
  }

  showStatus() {
    return `${this.name} (Health => ${this.health}, Power => ${this.power})`;
  }
}

class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    return {
      // Properti health akan memiliki nilai 10 jika hasil dari Math.random() kurang dari 0.5, atau 0 jika tidak.
      health: Math.random() < 0.5 ? 10 : 0,
      power: Math.random() < 0.5 ? 10 : 0,
    };
  }

  start() {
    let round = 1;
    while (true) {
      console.log(`Round ${round}`);
      console.log("Player status before shooting:");
      console.log(this.player1.showStatus());
      console.log(this.player2.showStatus());

      // Get random items for each player
      const item1 = this.getRandomItem();
      const item2 = this.getRandomItem();
      this.player1.useItem(item1);
      this.player2.useItem(item2);

      console.log("Player status after getting items:");
      console.log(this.player1.showStatus());
      console.log(this.player2.showStatus());

      // Player 1 shoots player 2
      console.log(`${this.player1.name} shoots ${this.player2.name}`);
      this.player1.hit(this.player2);
      console.log("Player status after shooting:");
      console.log(this.player1.showStatus());
      console.log(this.player2.showStatus());

      if (this.player2.health <= 0) {
        console.log(`Winner: ${this.player1.name}`);
        break;
      }

      // Player 2 shoots player 1
      console.log(`${this.player2.name} shoots ${this.player1.name}`);
      this.player2.hit(this.player1);
      console.log("Player status after shooting:");
      console.log(this.player1.showStatus());
      console.log(this.player2.showStatus());

      if (this.player1.health <= 0) {
        console.log(`Winner: ${this.player2.name}`);
        break;
      }

      round++;
    }
  }
}

const player1 = new Player("Player A");
const player2 = new Player("Player B");
const game = new ShootingGame(player1, player2);
game.start();

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

class Employee {
  constructor(hourlyRate, overtimeRate) {
    // tarif per jam (hourlyRate)
    this.hourlyRate = hourlyRate;
    // tarif lembur (overtimeRate)
    this.overtimeRate = overtimeRate;
    // jumlah jam kerja (workingHours)
    this.workingHours = 0;
  }

  //  menambahkan jumlah jam kerja per hari.
  addWorkingHours(hours) {
    this.workingHours += hours;
  }

  // Metode calculateSalary() digunakan untuk menghitung total gaji berdasarkan jumlah jam kerja dan tarif per jam, termasuk tarif lembur jika jumlah jam kerja melebihi 6 jam.
  calculateSalary() {
    let totalSalary = this.workingHours * this.hourlyRate;
    if (this.workingHours > 6) {
      // contoh kasus 7 jam, untuk dapat bonus 7 dikurang dengan syarat jam lembur (7-6) = 1, kemudian 1 dikali harga bonus
      totalSalary += (this.workingHours - 6) * this.overtimeRate;
    }
    return totalSalary;
  }
}

// Karyawan full-time memiliki tarif per jam dan tarif lembur yang berbeda dari karyawan part-time.
// Dalam kelas ini, kita menetapkan tarif per jam sebesar IDR 100.000 dan tarif lembur sebesar IDR 75.000.
class FulltimeEmployee extends Employee {
  constructor() {
    super(100000, 75000);
  }
}

// Karyawan part-time juga memiliki tarif per jam dan tarif lembur yang berbeda dari karyawan full-time.
// Dalam kelas ini, kita menetapkan tarif per jam sebesar IDR 50.000 dan tarif lembur sebesar IDR 30.000.
class ParttimeEmployee extends Employee {
  constructor() {
    super(50000, 30000);
  }
}

const fulltimeEmployee = new FulltimeEmployee();
// pada FULLTIME Jika jam kerja lebih dari 6 jam maka kasih bonus sebesar 75.000
fulltimeEmployee.addWorkingHours(7);
console.log("Full-time Employee Salary:", fulltimeEmployee.calculateSalary());

// pada PARTTIME Jika jam kerja lebih dari 6 jam maka kasih bonus sebesar 30.000
const parttimeEmployee = new ParttimeEmployee();
parttimeEmployee.addWorkingHours(7);
console.log("Part-time Employee Salary:", parttimeEmployee.calculateSalary());
