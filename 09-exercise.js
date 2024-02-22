// You have implemented the BankQueue class to manage customer queues in a bank. In this scenario,
//     you can perform operations such as adding customers to the queue, calling the next customer, and
//     counting the number of customers in the queue.

//    constructor:
//    - this.queue

//    method :
//    - enqueue : menambahkan value baru dalam antrian
//    - dequeue : menghilangkan value paling depan dalam antrian
//    - size : melihat jumlah antrian saat ini
class BankQueue {
  #queue;
  constructor() {
    this.#queue = [];
  }

  enqueue(element) {
    return this.#queue.push(element);
  }
  dequeue() {
    return this.#queue.shift();
  }

  size() {
    return this.#queue;
  }
}
const queue = new BankQueue();
console.log(queue.enqueue(1));
console.log(queue.enqueue(1));
console.log(queue.enqueue(1));
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.size());
