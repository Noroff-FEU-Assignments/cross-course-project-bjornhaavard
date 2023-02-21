import toggleItemInCart, { itemIsInCart } from "./methods.js";
import { getCart, removeFromCart } from "../storage/cart.js";
import { getProductDetails } from "../api/products.js";

// import displayProductList from "../views/products/displayProductList.js";

const totalContainer = document.querySelector(".totalPrice");

// console.log(products);
// console.log(apiProducts);

export default function handleCartButton() {
  const button = document.querySelector("#cartButton");

  if (!button) {
    return;
  }

  const { id } = button.dataset;
  console.log(id);

  if (itemIsInCart(id)) {
    button.classList.add("in-cart");
  }
  button.addEventListener("click", handleCartToggle);
  console.log(button.addEventListener);
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

  const { id, name, price, image } = event.target.dataset;

  const item = { id, name, price, image };

  console.log(item);

  toggleItemInCart(item);
  displayCartTotal();
}

export function renderCart() {
  const cartItems = getCart();
  let total = 0;

  const cartContainer = document.querySelector("#intoCart");

  if (cartItems.length === 0) {
    totalContainer.style.display = "none";
    return (cartContainer.innerHTML = "The cart is empty");
  }

  cartContainer.innerHTML = "";

  cartItems.forEach((item) => {
    total += parseInt(item.price);
    // const price = parseFloat(prices.price);
    console.log(item);

    cartContainer.innerHTML += `<div class="inTheCart"> 
                                <div> 
                                <div>
                                    <p> ${item.name}</p>
                                    </div>      
                                    <div>
                                    <p>Price $: ${item.price}</p>
                                    </div>
                                    <img src="${item.image}" alt="${item.name}" class="cart-portrait"/>
                                    <button id="remove "data-id="${item.id}"class="button-general">Remove</button>
                                    </div> 
                                  </div>`;
  });

  totalContainer.innerHTML = `<div>
                                 <div>
                                 <button class="cta-checkout" OnClick="location.href='/cta-response/checkout.html' ">
                                   purchase
                                 </button>
                                 </div>
                                 <div id="total" class="totalContainer">Total: $${total}</div>
                                </div>`;

  // displayProductList();
  // getProductDetails();
  handleCartButtons();
  handleCartButton();
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
