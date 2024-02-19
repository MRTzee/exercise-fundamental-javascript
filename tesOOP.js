class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction extends Product {
  constructor(name, price) {
    super(name, price);
    this.qty = 0;
    this.total = 0;
  }
  addToCart(product, qty) {
    this.product = product;
    this.qty += qty;
    this.total += product.price * qty;
  }

  showTotal() {
    return this.total;
  }
}

const apple = new Product("Apple", 0.5);
const banana = new Product("Banana", 0.25);

const transaction = new Transaction();
transaction.addToCart(apple, 4);
console.log(transaction);
console.log(apple);
