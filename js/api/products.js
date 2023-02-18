import { baseUrl, productListUrl } from "./constants.js";

export async function getProducts(categoryId) {
  const url = `${productListUrl}${categoryId}`;
  const response = await fetch(url);
  const products = await response.json();
  return products;
}

export async function getProductDetails(productId) {
  const url = `${baseUrl}${productId}`;
  const response = await fetch(url);
  const productDetails = await response.json();
  return productDetails;
}
