import { getProducts } from "../../api/products.js";
// import { displayError } from "../../errorMessage/displayError.js";

// export default function displayProductList(products = [], container = "#productsContainer") {
//   const parentElement = document.querySelector(container);

//   products.forEach((product) => {
//     const { id, name, size, color, price, img } = product;

//     parentElement.innerHTML += `<div class="products" id="productsContainer">
//                                         <figure>
//                                         <a href="/products/details.html?id=${id}">
//                                         <img src="${product.img}"/>
//                                         <div class="product-grid">
//                                         <div class="cta-products"> </div>
//                                             <p>${product.name}</p>
//                                             <p>$ ${product.price}</p>
//                                         </div>
//                                         </figure>
//                                        </a>
//                                    </div>`;
//     console.log(product.name);
//   });
// }

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
    const { id, name, size, color, price, img } = product;

    parentElement.innerHTML += `<div class="products" id="productsContainer"> 
                                        <figure>
                                        <a href="/products/details.html?id=${id}">
                                        <div class="product-list">
                                        <img src="${product.images[0].src}"/>
                                        </div>
                                        <div class="product-grid">
                                        <div class="cta-products"> </div>
                                            <p>${name}</p>                                          
                                        </div>
                                        </figure>  
                                       </a>
                                   </div>`;
    // console.log(product.name);
  });
}
