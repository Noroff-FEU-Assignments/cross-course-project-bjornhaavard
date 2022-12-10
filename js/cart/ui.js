import toggleItemInCart, { itemIsInCart } from "./methods.js";
import { getCart } from "../storage/cart.js";

export default function handleCartButton() {
  const button = document.querySelector("#warmRaincoatButton");

  const { id } = button.dataset;

  if (itemIsInCart(id)) {
    button.classList.add("in-cart");
  }
  button.addEventListener("click", handleCartToggle);
}

// export default function handleCart(item) {
//   const cartButton = document.querySelector('[data-cart="true"');
//   const intoCart = document.querySelector("#intoCart");
//   if (cartButton) {
//     cartButton.addEventListener("click", handleCartToggle);
//   }
//   intoCart.innerHTML = `<div id="#intoCart">${item}</div>`;

//   console.log(item);
// }

function handleCartToggle(event) {
  const button = event.target;
  button.classList.toggle("in-cart");

  const { name, size, color, price } = event.target.dataset;

  const item = { name, size, color, price };

  console.log(item);

  toggleItemInCart(item);
}

export function renderCart() {
  const cartItems = getCart();

  if (cartItems.length === 0) {
    return;
  }

  const cartContainer = document.querySelector("#intoCart");

  cartContainer.innerHTML = "";

  cartItems.forEach((item) => {
    cartContainer.innerHTML += `<div>   
                                    <p>Product: ${item.name}</p>
                                    <p>Size: ${item.size}</p>
                                    <p>Color: ${item.color}</p>
                                    <p>Price $: ${item.price}</p>
                                </div>`;
  });
}
