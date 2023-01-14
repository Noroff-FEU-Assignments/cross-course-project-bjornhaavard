import toggleItemInCart, { itemIsInCart } from "./methods.js";
import { getCart, removeFromCart } from "../storage/cart.js";
import { products } from "../data/products.js";
import displayProductList from "../views/products/displayProductList.js";

const totalContainer = document.querySelector(".totalPrice");

console.log(products);

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

  const { id, name, size, color, price, img } = event.target.dataset;

  const item = { id, name, size, color, price, img };

  console.log(item);

  toggleItemInCart(item);
  displayCartTotal();
}

export function renderCart() {
  const cartItems = getCart();
  let total = 0;

  const cartContainer = document.querySelector("#intoCart");

  if (cartItems.length === 0) {
    return (cartContainer.innerHTML = "The cart is empty");
  }

  cartContainer.innerHTML = "";

  cartItems.forEach((item) => {
    total += parseInt(item.price);
    console.log(typeof total);

    cartContainer.innerHTML += `<div class="inTheCart"> 
                                <div> 
                                    <p>Product: ${item.name}</p>
                                    <p>Size: ${item.size}</p>
                                    <p>Color: ${item.color}</p>
                                    <p>Price $: ${item.price}</p>
                                    <img src="${item.img}" alt="${item.name}" class="cart-portrait"/>
                                    <button id="remove "data-id="${item.id}"class="button-general">Remove</button>
                                    
                                 </div> 
                                 
                                 
                               
                                    </div>`;

    console.log(item.img);
  });

  totalContainer.innerHTML = `<div>
                                 <div>
                                 <button class="cta-checkout" OnClick="location.href='/cta-response/checkout.html' ">
                                   purchase
                                 </button>
                                 </div>
                                 <div class="totalContainer">Total: ${total}</div>
                                </div>`;

  // displayProductList();
  handleCartButtons();
}

function handleCartButtons() {
  const buttons = document.querySelectorAll("button, #remove");

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
