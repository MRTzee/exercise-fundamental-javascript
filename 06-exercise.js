// 1 =================================================================================================
// Create a function to calculate array of student data
// Parameters : array of student
// function calculateStudentData(students) {
//   let totalAge = 0;
//   let minAge = Number.MAX_VALUE;
//   let maxAge = Number.MIN_VALUE;
//   let totalScore = 0;
//   let minScore = Number.MAX_VALUE;
//   let maxScore = Number.MIN_VALUE;
//   // untuk mengiterasi melalui setiap siswa dalam array students. Di setiap iterasi, nilai umur dan skor dari siswa tersebut diakses menggunakan properti Age dan Score.
//   for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     // console.log(student.Age.getFullYear());
//     totalAge += student.Age.getFullYear();
//     minAge = Math.min(minAge, student.Age.getFullYear());
//     maxAge = Math.max(maxAge, student.Age.getFullYear());
//     // console.log(student.Score);
//     totalScore += student.Score;
//     minScore = Math.min(minScore, student.Score);
//     maxScore = Math.max(maxScore, student.Score);
//   }
//   //   console.log(totalAge);
//   //   console.log(students.length);
//   const avgAge = totalAge / students.length;
//   const avgScore = totalScore / students.length;

//   // Return values :
//   // ○ Object with this following properties :
//   // ■ Score
//   //  ● Highest
//   //  ● Lowest
//   //  ● Average
//   // ■ Age
//   //  ● Highest
//   //  ● Lowest
//   //  ● Average

//   return {
//     Score: {
//       Highest: maxScore,
//       Lowest: minScore,
//       Average: avgScore,
//     },
//     Age: {
//       Highest: maxAge,
//       Lowest: minAge,
//       Average: avgAge,
//     },
//   };
// }

// // The object has this following properties :
// const students = [
//   {
//     Name: "John Doe", // ○ Name → String
//     Email: "john.doe@example.com", // ○ Email → String
//     Age: new Date("1990-01-01"), // ○ Age → Date
//     Score: 95, // ○ Score → Number
//   },
//   {
//     Name: "Jane Doe",
//     Email: "jane.doe@example.com",
//     Age: new Date("2000-01-01"),
//     Score: 80,
//   },
// ];

// console.log(calculateStudentData(students));

// CARA LAIN
// function calculateStudentData(students) {
//     const ageValues = students.map(student => student.Age.getFullYear());
//     // console.log(ageValues);
//     const scoreValues = students.map(student => student.Score);
//     // sum nilai hasil akumulasi, age nilai umur dari elemen saat ini dalam iterasi, 0 adalah nilai awal sum
//     const totalAge = ageValues.reduce((sum, age) => sum + age, 0);
//     // console.log(totalAge);
//     const totalScore = scoreValues.reduce((sum, score) => sum + score, 0);

//     const minAge = Math.min(...ageValues);
//     // console.log(minAge);
//     const maxAge = Math.max(...ageValues);
//     const minScore = Math.min(...scoreValues);
//     const maxScore = Math.max(...scoreValues);

//     const avgAge = totalAge / students.length;
//     const avgScore = totalScore / students.length;

//     return {
//         Score: {
//             Highest: maxScore,
//             Lowest: minScore,
//             Average: avgScore
//         },
//         Age: {
//             Highest: maxAge,
//             Lowest: minAge,
//             Average: avgAge
//         }
//     };
// }

// const students = [
//     {
//         Name: "John Doe",
//         Email: "john.doe@example.com",
//         Age: new Date("1990-01-01"),
//         Score: 95
//     },
//     {
//         Name: "Jane Doe",
//         Email: "jane.doe@example.com",
//         Age: new Date("2000-01-01"),
//         Score: 80
//     }
// ];

// console.log(calculateStudentData(students));

// 2 =====================================================================================================
// Product class
// ● Create a program to create transaction
// ● Product Class
// ○ Properties
class Product {
  constructor(name, price) {
    this.name = name; // ■ Name
    this.price = price; // ■ Price
  }
}

// Transaction class
// ○ Properties
class Transaction {
  constructor() {
    this.products = []; // Array untuk menyimpan produk dalam transaksi
    this.total = 0; // Total harga transaksi
  }

  // Method untuk menambahkan produk ke dalam transaksi
  addToCart(product, qty) {
    this.products.push({ product, qty });
    this.total += product.price * qty; // Menambahkan harga produk ke total
  }

  // Method untuk menampilkan total harga transaksi
  showTotal() {
    return this.total;
  }

  // Method untuk menyelesaikan transaksi dan mengembalikan data transaksi
  checkout() {
    return {
      products: this.products.map(({ product, qty }) => ({
        name: product.name,
        price: product.price,
        quantity: qty,
      })),
      total: this.total,
    };
  }
}

// Example usage
const apple = new Product("Apple", 0.5);
const banana = new Product("Banana", 0.25);

const transaction = new Transaction();
transaction.addToCart(apple, 2);
transaction.addToCart(banana, 3);
console.log(transaction.checkout());
