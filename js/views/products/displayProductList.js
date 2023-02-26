import { getProducts } from "../../api/products.js";
import { baseUrl } from "../../api/constants.js";
import { getFeatured } from "../../cart/methods.js";
// const searchButton = document.querySelector("#search-button");

export default async function displayProductList(categoryId, container = "#productsContainer") {
  try {
    const products = await getProducts(categoryId);
    renderProducts(products, container);
  } catch (error) {
    console.log(error);
    productsContainer.innerHtml += `<div class="error">There was an error: ${error}</div>`;
  }
}

let loader = document.querySelector(".lds-hourglass");

function renderProducts(products, container) {
  const parentElement = document.querySelector(container);
  console.log(products);
  products.forEach((product) => {
    if (products) {
      loader.style.display = "none";
    }
    const { id, name, prices } = product;

    parentElement.innerHTML += `<div class="products" id="productsContainer"> 
    
                                        <figure>
                                        <a href="/products/details.html?id=${id}">
                                        <div class="product-list">
                                        <img src="${product.images[0].src}"/>
                                        </div>
                                        <div class="product-grid">
                                        <div class="cta-products"> </div>
                                            <p>${name}</p>                                          
                                            <p>$ ${parseInt(prices.price)}</p>                                          
                                        </div>
                                        </figure>  
                                       </a>
                                   </div>`;

    // console.log(product.name);

    getFeatured();
    // console.log(categories);
  });
}

// searchButton.onclick = function () {
//   const searchBar = document.querySelector("#search-bar");
//   console.log(searchBar);
//   const newUrl = baseUrl + `?search="${searchBar}"`;
//   container = "";
//   displayProductList(newUrl);
// };
