export default function displayProductList(products = [], container = "#productsContainer") {
  const parentElement = document.querySelector(container);

  products.forEach((product) => {
    const { id, name, size, color, price, img } = product;

    parentElement.innerHTML += `<div class="products" id="productsContainer"> 
                                        <figure>
                                        <a href="/products/details.html?id=${id}">
                                        <img src="/images/men/pexels-andrew-resize.jpg"/>
                                        <div class="product-grid">
                                        <div class="cta-products"> </div>
                                            <p>Product: ${product.name}</p>
                                            <p>Price $: ${product.price}</p>
                                        </div>
                                        </figure>  
                                       </a>
                                   </div>`;
    console.log(product.name);
  });
}
