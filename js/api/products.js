import { baseUrl } from "./constants.js";

export async function getProducts(categoryId) {
  const url = `${baseUrl}${categoryId}`;
  const response = await fetch(url);
  const products = await response.json();
  console.log(products);
  return products;
}

export async function getProductDetails(detailsId) {
  const url = `${detailsUrl}${detailsId}`;
  const response = await fetch(url);
  const productDetails = await response.json();
  console.log(getProductDetails);
  return productDetails;
}
