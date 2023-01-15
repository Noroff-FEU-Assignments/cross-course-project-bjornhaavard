export default function displayProductList(products = [], container = "#productsContainer") {
  const parentElement = document.querySelector(container);

  products.forEach((product) => {
    const { id, name, size, color, price, img } = product;

    parentElement.innerHTML += `<div class="products" id="productsContainer"> 
                                        <figure>
                                        <a href="/products/details.html?id=${id}">
                                        <img src="${product.img}"/>
                                        <div class="product-grid">
                                        <div class="cta-products"> </div>
                                            <p>${product.name}</p>
                                            <p>$ ${product.price}</p>
                                        </div>
                                        </figure>  
                                       </a>
                                   </div>`;
    console.log(product.name);
  });
}
