import { products } from "../../data/products.js";

export default function displayProductDetail(container = "#detailsContainer") {
  const parentElement = document.querySelector(container);

  const productId = getIdFromQueryString();
  const product = getProductById(products, productId);

  const { id, name, size, color, price, img } = product;

  parentElement.innerHTML += `<div>
                                <p>Name: ${name}</p>
                                <p>Size: ${size}</p>
                                <p>Color: ${color}</p>
                                <p>Price $: ${price}</p>
                                <img src="${img}" alt="${name}">
                                <button class="cta-checkout" OnClick="location.href='/cta-response/checkout.html' ">
                                checkout
                              </button>
                              </div>`;
}

function getIdFromQueryString() {
  const url = new URL(window.location);
  const searchParams = url.searchParams;
  return searchParams.get("id");
}

function getProductById(products, id) {
  const product = products.find((productId) => productId === Number(id));
  return product;
}
