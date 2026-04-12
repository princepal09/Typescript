class Product {
  name: string;
  price: number;
  pId: number;
  inCart: boolean;
  isOrdered: boolean;

  constructor(name: string, price: number, pId: number) {
    this.name = name;
    this.price = price;
    this.pId = pId;
    this.inCart = false;
    this.isOrdered = false;
  }

  addToCart(): void {
    this.inCart = true;
  }

  buyProduct(): string {
    if (this.inCart) {
      return `product ${this.name} is ordered in ${this.price}`;
    } else {
      return `No product in cart`;
    }
  }
}

var product = new Product("Samsung", 10000, 101);

product.addToCart();
console.log(product.buyProduct());
