import { addToCart, removeFromCart, getCart } from "../storage/cart.js";
import displayProductList from "../views/products/displayProductList.js";
import { baseUrl } from "../api/constants.js";
// const container = "#detailsContainer";

export default function toggleItemInCart(item) {
  if (itemIsInCart(item.id)) {
    removeFromCart(item.id);
  } else {
    addToCart(item);
  }
}

export function itemIsInCart(id) {
  return getCart().some((item) => item.id === id);
}

export async function getFeatured() {
  const categories = document.querySelectorAll("#featured");

  categories.forEach(function (featured) {
    featured.onclick = function (event) {
      const container = document.querySelector("#productsContainer");
      console.log(featured);
      let newUrl;
      if (event.target.id === "featured") {
        newUrl = baseUrl + "?featured=true";
      } else {
        const categoryChosen = event.target.value;
        newUrl = baseUrl + `?category=${categoryChosen}`;
      }
      container.innerHTML = "";
      displayProductList(newUrl);
    };
  });
  console.log(categories);
}
