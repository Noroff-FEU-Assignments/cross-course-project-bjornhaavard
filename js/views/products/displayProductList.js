export default function displayProductList(products = [], container = "#intoCart") {
  const parentElement = document.querySelector(container);

  products.forEach((product) => {
    total += parseInt(product.price);
    console.log(typeof total);

    parentElement.innerHTML += `<div class="inTheCart">   
                                        <p>Product: ${product.name}</p>
                                        <p>Size: ${product.size}</p>
                                        <p>Color: ${product.color}</p>
                                        <p>Price $: ${product.price}</p>
                                        <img class="cart-portrait" src="/images/men/pexels-andrew-resize.jpg"</img>
                                        <button id="remove "data-id="${product.id}"class="button-general">Remove</button>
                                        <button class="cta-checkout" OnClick="location.href='/cta-response/checkout.html' ">checkout</button>
                                   </div>`;
    console.log(product.name);
  });
}
