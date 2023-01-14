import { products } from "../../data/products.js";

export default function displayProductDetail(container = "#detailsContainer") {
  const parentElement = document.querySelector(container);

  const productId = getIdFromQueryString();
  const product = getProductById(products, productId);

  const { id, name, description, size, color, price, img } = product;

  parentElement.innerHTML += `<main class="jacket-container">
  <section class="jacket-container1">
    <figure>
      <img src="${img}" alt="${name}" class="jacket-image" />
    </figure>
    <div class="text-box">
      <h1>${name}</h1>
      <p>${description}</p>
      <p>for all year use down to -5c</p>
      <p>$ ${price}</p>
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
      <button id="cartButton" data-img="${img}"  data-cart="true" data-id="${id}" data-name="${name}" data-size="${size}" data-color="${color}" data-price="${price}" class="cta-submit"></button>
    </div>
  </section>
  
</main>
                              </div>`;
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
