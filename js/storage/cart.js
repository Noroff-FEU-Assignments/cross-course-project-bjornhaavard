const CART_KEY = "cart";

export function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

export function addToCart(item) {
  const cart = getCart();
  cart.push(item);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function removeFromCart(id) {
  const cart = getCart();
  const newCart = cart.filter((item) => item.id !== id);
  localStorage.setItem(CART_KEY, JSON.stringify(newCart));
  console.log(newCart)
}

