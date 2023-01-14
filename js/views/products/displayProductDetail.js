import { products } from "../../data/products.js";

export default function displayProductDetail(container = "#detailsContainer") {
  const parentElement = document.querySelector(container);

  const productId = getIdFromQueryString();
  const product = getProductById(products, productId);

  const { id, name, size, color, price, img } = product;

  parentElement.innerHTML += `<main class="jacket-container">
  <section class="jacket-container1">
    <figure>
      <img src="/images/men/pexels-andrew-nevins-resize.jpg" alt="man snowboarding in a snowcovered forrest" class="jacket-image" />
    </figure>
    <div class="text-box">
      <h1>warm raincoat</h1>
      <p>a slightly warmer raincoat</p>
      <p>for all year use down to -5c</p>
      <p>299$</p>
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
      <button id="cartButton" data-img="/images/men/pexels-andrew-nevins-resize.jpg"  data-cart="true" data-id="11" data-name="Warm Raincoat" data-size="Large" data-color="Red" data-price="299" class="cta-submit"></button>
    </div>
  </section>
  <section class="jacket-container2">
    <div class="jacket-img-thumbnail">
      <figure>
        <img src="/images/men/pexels-andrew-resize.jpg" alt="man snowboarding in a snowcovered forrest" class="jacket-image" />
      </figure>
      <figure>
        <img src="/images/men/pexels-tyler-tornberg-resize.jpg" alt="man jumping on a snowboard" class="jacket-image" />
      </figure>
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
