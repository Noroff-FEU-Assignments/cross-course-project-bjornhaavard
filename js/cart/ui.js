import toggleItemInCart from "./methods.js";

export default function handleCart() {
  const cartButton = document.querySelector('[data-cart="true"');
  if (cartButton) {
    cartButton.addEventListener("click", handleCartToggle);
  }
  //   products.forEach((product) => product.addEvenetListener("click", handleCartToggle));
}

function handleCartToggle(event) {
  const { name, size, color, price } = event.target.dataset;

  const item = { name, size, color, price };

  console.log(item);

  toggleItemInCart(item);
}
