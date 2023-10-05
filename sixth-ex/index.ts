import products from "./products";

const productName: string = "shirt";
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAdress: string = "Bro-Street 69, Bruh-City, Brother-Land";

const product = products.filter((product) => product.name === productName)[0];

if (product.preOrder === "true") {
  console.log("We will send you a message when your product is on its way.");
}

if (Number(product.price) > 25) {
  shipping = 0;
  console.log("You get free shipping dawg");
} else {
  shipping = 5;
  console.log("You gotta pay tha price");
}

if (shippingAdress.match("Bruh-City")) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}

taxTotal = Number(product.price) * taxPercent;

total = taxTotal + Number(product.price);

console.log(`
Product:  ${product.name}
Address:  ${shippingAdress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);