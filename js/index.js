import handleCartButton, { displayCartTotal } from "./cart/ui.js";
import { renderCart } from "./cart/ui.js";
import displayProductList from "./views/products/displayProductList.js";
import displayProductDetail from "./views/products/displayProductDetail.js";

async function router() {
  const pathname = window.location.pathname;

  displayCartTotal();

  switch (pathname) {
    case "/products/kids/kids.html":
      // const filteredKidsProducts = products.filter((k) => k.category === "kids");
      displayProductList(18);
      handleCartButton();
      return;

    case "/products/men/men.html":
      // const filteredMenProducts = products.filter((m) => m.category === "men");
      displayProductList(16);
      handleCartButton();
      return;

    case "/products/women/women.html":
      // const filteredWomenProducts = products.filter((w) => w.category === "women");
      displayProductList(17);
      handleCartButton();
      return;

    case "/products/details.html":
      displayProductDetail();
      // handleCartButton();
      return;

    case "/products/cart.html":
      renderCart();
      return;
  }
}

router();
