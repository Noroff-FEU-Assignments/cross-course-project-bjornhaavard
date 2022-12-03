export default function handleCart() {
  const products = document.querySelectorAll("#products button");

  products.forEach((product) => product.addEvenetListener("click", handleCartToggle));
}

function handleCartToggle(event) {
  const { name, size, color, price } = event.target.dataset;

  const item = { name, size, color, price };

  console.log(item);

  toggleItemInCart(item);
}
