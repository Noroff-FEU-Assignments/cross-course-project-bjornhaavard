import toggleItemInCart from "./methods.js";

const button = document.querySelector("button");
const intoCart = document.querySelector("#intoCart");

export default function handleCart(handleCartToggle, item) {
  const cartButton = document.querySelector('[data-cart="true"');
  if (cartButton) {
    cartButton.addEventListener("click", handleCartToggle);
  }
  intoCart.innerHTML += `<div id="#intoCart">${item}</div>`;

  console.log(item);
}

function handleCartToggle(event) {
  const { name, size, color, price } = event.target.dataset;

  const item = { name, size, color, price };

  console.log(item);

  toggleItemInCart(item, handleCart);
}
