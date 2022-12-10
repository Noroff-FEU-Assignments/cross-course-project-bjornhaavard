import handleCartButton, { displayCartTotal } from "./cart/ui.js";
import { renderCart } from "./cart/ui.js";

function router() {
  const pathname = window.location.pathname;
  console.log(pathname);

  displayCartTotal();

  switch (pathname) {
    case "/products/men/product-warm-raincoat.html":
      handleCartButton();
      return;
    case "/products/cart.html":
      renderCart();
      return;
  }
}

router();
// handleCartButton();
