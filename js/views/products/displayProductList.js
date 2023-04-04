import { getProducts } from "../../api/products.js";

export default async function displayProductList(categoryId, container = "#productsContainer") {
  const products = await getProducts(categoryId);
  renderProducts(products, container);
  console.log(categoryId);
}

let loader = document.querySelector(".lds-hourglass");

function renderProducts(products, container) {
  try {
    const parentElement = document.querySelector(container);

    products.forEach((product) => {
      if (products) {
        loader.style.display = "none";
      }
      const { id, name, prices } = product;
      const price = parseInt(prices.price);

      parentElement.innerHTML += `<div class="products" id="productsContainer"> 
    
                                        <figure>
                                        <a href="/products/details.html?id=${id}">
                                        <div class="product-list">
                                        <img src="${product.images[0].src}"/>
                                        </div>
                                        <div class="product-grid">
                                        <div class="cta-products"> </div>
                                            <p>${name}</p>                                          
                                            <p>$ ${price}</p>                                          
                                        </div>
                                        </figure>  
                                       </a>
                                   </div>`;
      console.log(typeof price);
    });
  } catch (error) {
    console.log(error);
    loader.style.display = "none";
    container.innerHTML = `<div class"container"></div><div class="error">There was an error: ${error}</div>`;
  }
}

// searchButton.onclick = function () {
//   const searchBar = document.querySelector("#search-bar");
//   console.log(searchBar);
//   const newUrl = baseUrl + `?search="${searchBar}"`;
//   container = "";
//   displayProductList(newUrl);
// };
