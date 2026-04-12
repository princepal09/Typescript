function totalPrice(item: number, price: number, text: string) {
  if (text) {
    console.log(text + price * item);
  } else {
    console.log(price * item);
  }
}

totalPrice(20, 200, "Total amount is:");
