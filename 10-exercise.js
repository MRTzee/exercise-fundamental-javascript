// You are given a JavaScript class called Train that simulates a train's passenger management system.
// The Train class has the following methods and properties:

// - constructor(): Initializes the Train with an initial passenger, "masinis," and a maximum
// capacity of 10 passengers.
// - isFull(): Checks if the train is at full capacity. It returns true if the train is full
// and false otherwise.
// - isEmpty(): Checks if the train has no passengers except "masinis." It returns true if the
// train is empty and false otherwise.
// - showPassenger(): Returns an object that contains the list of passengers on the train and
// the remaining available seats.
// - passengerIn(name): Adds a passenger with the given name to the train. It returns "add passenger
// success" if the passenger is successfully added, "train full" if the train is at full capacity,
// and "passenger already exists" if the passenger is already on the train.
// - passengerOut(name): Removes a passenger with the given name from the train. It returns
// "remove passenger success" if the passenger is successfully removed, "cannot remove masinis"
// if an attempt is made to remove the "masinis," "train empty" if the train is already empty, and
// "passenger not found" if the passenger with the given name is not found on the train.
// 1 =====================================================================================================================
class Train {
  constructor() {
    this.passengers = ["masinis"];
    this.maxCapacity = 10;
  }

  isFull() {
    return this.passengers.length >= this.maxCapacity;
  }

  isEmpty() {
    return this.passengers.length === 1;
  }

  showPassenger() {
    return {
      passengers: this.passengers.slice(1),
      availableSeats: this.maxCapacity - this.passengers.length + 1,
    };
  }

  passengerIn(name) {
    if (this.isFull()) return "train full";
    if (this.passengers.includes(name)) return "passenger already exists";

    this.passengers.push(name);
    return "add passenger success";
  }

  passengerOut(name) {
    if (name === "masinis") return "cannot remove masinis";
    if (this.isEmpty()) return "train empty";

    const index = this.passengers.indexOf(name);
    if (index === -1) return "passenger not found";

    this.passengers.splice(index, 1);
    return "remove passenger success";
  }
}

const train = new Train();
console.log(train.passengerIn("John"));
console.log(train.passengerIn("Jane"));
console.log(train.passengerIn("John"));
console.log(train.passengerIn("Mark"));

console.log(train.showPassenger());

console.log(train.passengerOut("Jane"));
console.log(train.passengerOut("Jane"));
console.log(train.passengerOut("masinis"));
console.log(train.passengerOut("John"));

console.log(train.showPassenger());

// Write a JavaScript function called phoneNumber that takes a single argument input.
//     The function is intended to format a phone number. It checks the input to ensure
//     it meets certain criteria and then proceeds with formatting. The formatting
//     includes replacing the leading "0" with "62" and creating a template in the
//     format "(xxxx)-xxxx-xxxxx" where each "x" represents a digit from the input. The
//     function returns the formatted phone number.

//     - Check if the input is of type "string." If it's not, return "Invalid phone number."
//     - Check if the length of the input is exactly 12 characters. If it's not, return "Invalid phone number."
//     - Make sure the input all are numeric 0-9
//     ex :
//     input = "085244455555"
//     output = "(6285)-2444-55555"

const phoneNumber = (phone) => {
  if (typeof phone === "string" || phone.length === 12) {
    const output = [];
    const replaceNum = phone.replace("0", "62");
    const phoneArr = replaceNum.split("");
    console.log(phoneArr);

    phoneArr.splice(8, 0, "-");
    phoneArr.splice(4, 0, "-");
    phoneArr.splice(4, 0, ")");
    phoneArr.splice(0, 0, "(");

    output.push(phoneArr.join(""));
    console.log(output);
    return output.join();
  } else {
    return "Invalid phone number.";
  }
};
console.log(phoneNumber("085322420875"));
