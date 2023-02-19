// // import { displayCartTotal } from "../cart/ui";
// // import displayProductList from "../views/products/displayProductList";

// export const products = [
//   {
//     id: 1,
//     price: 199,
//     name: "raincoat",
//     size: "Small",
//     color: "red",
//     img: "/images/men/pexels-andrew-nevins-resize.jpg",
//     category: "men",
//     description: "A nice raincoat",
//   },
//   {
//     id: 2,
//     price: 299,
//     name: "Warm raincoat",
//     size: "Small",
//     color: "red",
//     img: "/images/men/pexels-andrew-nevins-resize.jpg",
//     category: "men",
//     description: "A slightly warmer raincoat",
//   },

//   {
//     id: 3,
//     price: 499,
//     name: "special raincoat",
//     size: "medium",
//     color: "blue",
//     img: "/images/men/pexels-andrew-nevins-resize.jpg",
//     category: "men",
//     description: "A very special raincoat",
//   },
//   {
//     id: 4,
//     price: 199,
//     name: "raincoat",
//     size: "medium",
//     color: "blue",
//     img: "/images/mobile/pexels-alex-9974540kids_resized.jpg",
//     category: "kids",
//     description: "A nice raincoat",
//   },
//   {
//     id: 5,
//     price: 299,
//     name: "warm raincoat",
//     size: "medium",
//     color: "blue",
//     img: "/images/mobile/pexels-alex-9974540kids_resized.jpg",
//     category: "kids",
//     description: "A slightly warmer raincoat",
//   },
//   {
//     id: 6,
//     price: 499,
//     name: "special raincoat",
//     size: "medium",
//     color: "blue",
//     img: "/images/mobile/pexels-alex-9974540kids_resized.jpg",
//     category: "kids",
//     description: "A very special raincoat",
//   },
//   {
//     id: 7,
//     price: 199,
//     name: "raincoat",
//     size: "medium",
//     color: "blue",
//     img: "/images/women/pexels-andrew-nevins-resized.jpg",
//     category: "women",
//     description: "A nice raincoat",
//   },
//   {
//     id: 8,
//     price: 299,
//     name: "warm raincoat",
//     size: "medium",
//     color: "blue",
//     img: "/images/women/pexels-andrew-nevins-resized.jpg",
//     category: "women",
//     description: "A slightly warmer raincoat",
//   },
//   {
//     id: 9,
//     price: 499,
//     name: "special raincoat",
//     size: "medium",
//     color: "blue",
//     img: "/images/women/pexels-andrew-nevins-resized.jpg",
//     category: "women",
//     description: "A very special raincoat",
//   },
// ];

// const product = document.querySelector(".api");
const api_url = "https://bjornhaavard.no/rainydays-api/wp-json/wc/store/products";

export async function getProducts() {
  try {
    const response = await fetch(api_url);

    const products = await response.json();

    // apiResult.forEach((products) => {
    //   product.innerHTML += `<div>
    //                         <h2>${products.name}</h2>
    //                         <p>${products.description}</p>
    //                         <div class=".image" style="background-img:url('${products.images[0].src}')"></div>
    //                         <img class="image" src="${products.images[0].src}" alt="${products.description}"/>
    //                         </div>`;
    // });

    console.log(products);
  } catch (error) {
    console.log(error);
  }
  // displayProductList();
}

// getProducts();
