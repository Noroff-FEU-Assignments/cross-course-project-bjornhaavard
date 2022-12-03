import { addToCart, removeFromCart, getCart } from "../storage/cart.js";

export default function toggleItemInCart(item) {
  if (itemIsInCart(item.id)) {
    removeFromCart(item.id);
  } else {
    addToCart(item);
  }
}

function itemIsInCart(id) {
  return getCart().some((item) => item.id === id);
}
