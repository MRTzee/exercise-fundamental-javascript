class Employee {
  constructor(name) {
    this.name = name;
    this.workingHours = 0;
  }
}

class FulltimeEmployee extends Employee {
  constructor(name) {
    // supaya bisa digunakan oleh induk class, kirim barang dari anak
    super(name);
  }

  addWorkingHours(hour) {
    this.workingHours += hour;
  }

  calculateTotalSalary() {
    const normalRate = 100000;
    const overTimeRate = 75000;

    if (this.workingHours <= 6) {
      return {
        total: "Rp " + (this.workingHours * normalRate).toLocaleString("id-ID"),
      };
    } else {
      const normalHour = 6;
      const overTimehour = this.workingHours - normalHour;

      return {
        total:
          "Rp " +
          (
            overTimehour * overTimeRate +
            normalHour * normalRate
          ).toLocaleString("id-ID"),
      };
    }
  }
}

class ParttimeEmployee extends Employee {
  constructor(name) {
    // supaya bisa digunakan oleh induk class, kirim barang dari anak
    super(name);
  }

  addWorkingHours(hour) {
    this.workingHours += hour;
  }

  calculateTotalSalary() {
    const normalRate = 50000;
    const overTimeRate = 30000;

    if (this.workingHours <= 6) {
      return {
        total: "Rp " + (this.workingHours * normalRate).toLocaleString("id-ID"),
      };
    } else {
      const normalHour = 6;
      const overTimehour = this.workingHours - normalHour;

      return {
        total:
          "Rp " +
          (
            overTimehour * overTimeRate +
            normalHour * normalRate
          ).toLocaleString("id-ID"),
      };
    }
  }
}

// FULL TIME
const employee1 = new FulltimeEmployee("budi");
employee1.addWorkingHours(7);
console.log(employee1.calculateTotalSalary());

// PART TIME
const employee2 = new ParttimeEmployee("joko");
employee2.addWorkingHours(7);
console.log(employee2.calculateTotalSalary());
