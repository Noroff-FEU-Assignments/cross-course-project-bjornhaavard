// import { products } from "../../data/products.js";
import { getProductDetails } from "../../api/products.js";
// import { getProducts } from "../../data/products.js";

export default async function displayProductDetail(container = "#detailsContainer") {
  const parentElement = document.querySelector(container);

  const productId = getIdFromQueryString();
  // const product = getProductById(products, productId);
  const product = await getProductDetails(productId);

  const { id, name, description, size, color, prices, images } = product;

  const image = images[0].src;
  // const priceValue = prices[0].price;

  parentElement.innerHTML += `<main class="jacket-container">
                            <section class="jacket-container1">
                                        <figure>
                                        <img src="${image}" alt="${name}" class="jacket-image" />
                                        </figure>
                                        <div class="text-box">
                                        <h1>${name}</h1>
                                        <p>${description}</p>
                                        <p>$ ${prices}</p>
                                        <form method="post" class="product-form">
                                            <div class="form-size">
                                            <label for="cities">Size</label>
                                            <select class="select-size "name="size" id="size">
                                                <option value="small">small</option>
                                                <option value="medium">medium</option>
                                                <option value="large">large</option>
                                                <option value="x-large">x-large</option>
                                            </select>
                                            </div>
                                            <div class="form-color">
                                            <label for="color">Color</label>
                                            <select class="select-size  name="color" id="color">
                                                <option value="red">red</option>
                                                <option value="blue">blue</option>
                                                <option value="orange">orange</option>
                                                <option value="green">green</option>
                                            </select>
                                            </div>
                                        </form>
                                        <button id="cartButton" data-img="${image}"  data-cart="true" data-id="${id}" data-name="${name}" data-size="${size}" data-color="${color}" data-price="${prices}" class="cta-submit"></button>
                                        </div>
                                    </section>
                                </main>
                              </div>`;
  getProductDetails();
}

function getIdFromQueryString() {
  const url = new URL(window.location);
  const searchParams = url.searchParams;
  return searchParams.get("id");
}

function getProductById(products, id) {
  const product = products.find((product) => product.id === Number(id));
  return product;
}
