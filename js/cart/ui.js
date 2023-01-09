import toggleItemInCart, { itemIsInCart } from "./methods.js";
import { getCart, removeFromCart } from "../storage/cart.js";
import { products } from "../products/products.js";

console.log(products)

export default function handleCartButton() {
  const button = document.querySelector("#cartButton");

  if (!button) {
    return;
  }

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

  const { id, name, size, color, price } = event.target.dataset;

  const item = { id, name, size, color, price };

  console.log(item);

  toggleItemInCart(item);
  displayCartTotal();
}

export function renderCart() {
  const cartItems = getCart();

  const cartContainer = document.querySelector("#intoCart");

  if (cartItems.length === 0) {
    return (cartContainer.innerHTML = "The cart is empty");
  }

  cartContainer.innerHTML = "";

  cartItems.forEach((item) => {
    cartContainer.innerHTML += `<div class="inTheCart">   
                                    <p>Product: ${item.name}</p>
                                    <p>Size: ${item.size}</p>
                                    <p>Color: ${item.color}</p>
                                    <p>Price $: ${item.price}</p>
                                    <img class="cart-portrait" src="/images/men/pexels-andrew-resize.jpg"</img>
                                    <button data-id="${item.id}"class="remove-from-cart">Remove</button>
                                    <button class="cta-checkout" OnClick="location.href='/cta-response/checkout.html' ">checkout</button>
                                </div>`;
  });

  handleCartButtons();
}

function handleCartButtons() {
  const buttons = document.querySelectorAll("button.remove-from-cart");

  buttons.forEach(function (button) {
    button.addEventListener("click", handleRemoveFromCart);
  });
}

function handleRemoveFromCart(event) {
  console.log(event.target);
  const { id } = event.target.dataset;

  removeFromCart(id);
  displayCartTotal();
  renderCart();
}

export function displayCartTotal() {
  const totalContainer = document.querySelector("#cartAmount");

  if (!totalContainer) {
    return;
  }

  const cartItems = getCart();

  totalContainer.innerHTML = cartItems.length;
}
