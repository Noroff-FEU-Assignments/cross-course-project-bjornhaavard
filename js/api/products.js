import { baseUrl, productListUrl } from "./constants.js";
// import { displayCartTotal } from "../storage/cart.js";

export async function getProducts(categoryId) {
  const url = `${productListUrl}${categoryId}`;
  const response = await fetch(url);
  const products = await response.json();
  return products;
}

export async function getProductDetails(productId) {
  try {
    const url = `${baseUrl}${productId}`;
    const response = await fetch(url);
    const productDetails = await response.json();
    return productDetails;
  } catch (error) {
    console.log(error);
    detailsContainer.innerHTML = `<div>test${error}</div>`;
  }
}
