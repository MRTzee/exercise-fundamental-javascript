// buat parent class Product
//     constructor = nama, berat, price,stok
//     buat child class dari produk yaitu Buku dan Pakaian
//     constructor = super, data unik dari buku dan pakaian buat class OnlineShop
//     constructor = products dan cart (private)
//     method :
//         - tambahProduk(produk): memasukkan produk ke arr products, kalau sudah ada dalam arr products return produk sudah ada dalam toko
//         - tambahKeKeranjang(produk, jumlah) : memasukkan produk yang di pilih user ke arr cart. Harus validasi sudah ada apa belum dalam cart dan juga validasi ada tidak produknya di catalog,
//           kalau yang di masukkan melebihi stok return stok tidak mencukupi dan tampilkan juga stoknya
//         - transaksi(uangUser, jarak) : menampilkan total pembayaran, beserta ongkir. example: 1km * 2000.tampilkan juga kembaliannya dan kosongkan cart jika berhasil melakukan transaksi. Harus ada validasi
//           untuk uangUser tidak boleh kurang dari total pembayaran.
//         - showCatalog : menampilkan isi catalog dari toko
//         - showCart : menampilkan isi cart user

class Produk {
  constructor(nama, berat, harga, stok) {
    this.nama = nama;
    this.berat = berat;
    this.harga = harga;
    this.stok = stok;
  }
}

class Buku extends Produk {
  constructor(id, nama, berat, harga, stok) {
    super(nama, berat, harga, stok);
    this.idB = id;
  }
}

class Pakaian extends Produk {
  constructor(id, nama, berat, harga, stok) {
    super(nama, berat, harga, stok);
    this.idP = id;
  }
}

class OnlineShop {
  #cart;
  constructor() {
    this.produks = [];
    this.#cart = [];
  }

  tambahProduk(produk) {
    if (this.produks.includes(produk)) {
      return "produk sudah ada dalam toko";
    } else {
      this.produks.push(produk);
      return "data sudah ditambahkan";
    }
  }

  tambahKeranjang(produk, jumlah) {
    let index = this.produks.indexOf(produk);
    if (!this.produks.includes(produk)) {
      return "Data tidak tersedia di Toko";
    } else if (jumlah <= this.produks[index]["stok"]) {
      this.#cart.push(produk);
      return "Telah ditambahkan ke keranjang";
    } else {
      //   console.log(this.produks[index]["stok"]);
      return `Stok tidak mencukupi ${this.produks[index]["stok"]}`;
    }
  }

  transaksi(uangUser, jarak) {
    // console.log(index[0]["harga"]);
    let total = 0;
    let ongkir = jarak * 2000;
    let index = this.#cart;
    console.log(index[0]["stok"]);
    for (let i = 0; i < index.length; i++) {
      total += index[i]["harga"];
    }
    if (uangUser <= total + jarak) {
      return "Uang tidak cukup";
    }
    let wajibBayar = total + ongkir;
    let kembalian = uangUser - wajibBayar;
    return {
      UangUser: uangUser,
      Jarak: ongkir,
      HargaProduk: total,
      TotalPembayaran: wajibBayar,
      Kembalian: kembalian,
    };
  }

  showCatalog() {
    return this.produks;
  }

  showCart() {
    return this.#cart;
  }
}

const buku1 = new Buku(12341, "Enjoy Your Life", "1KG", 10000, 10);
const buku2 = new Buku(12340, "Mengenal Diri Sendiri", "1KG", 80000, 10);
const buku3 = new Buku(12343, "Seni Bersikap Bodo Amat", "1KG", 90000, 10);
// console.log(buku1);
const produk = new OnlineShop();
console.log(produk.tambahProduk(buku1));
console.log(produk.tambahProduk(buku2));
console.log(produk.tambahProduk(buku3));
console.log(produk.tambahProduk(buku3));
console.log(produk.tambahKeranjang(buku1, 2));
console.log(produk.tambahKeranjang(buku2, 3));
console.log(produk.tambahKeranjang(buku3, 2));
console.log(produk.showCatalog());
console.log(produk.showCart());
console.log(produk.transaksi(200, 1));
