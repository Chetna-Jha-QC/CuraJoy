// // Select all "Add to Cart" buttons
// const addToCartButtons = document.querySelectorAll('.add-to-cart');

// // Add click event listener to each button
// addToCartButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         alert('This item has been added to the cart');
//     });
// });
// document.querySelectorAll('.add-to-cart').forEach(button => {
//     button.addEventListener('click', () => {
//       const product = {
//         id: button.getAttribute('data-product-id'),
//         name: button.getAttribute('data-name'),
//         price: parseFloat(button.getAttribute('data-price')),
//         image: button.parentElement.querySelector('img').src
//       };
  
//       let cart = JSON.parse(localStorage.getItem('cart')) || [];
//       const existingItem = cart.find(item => item.id === product.id);
  
//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         cart.push({ ...product, quantity: 1 });
//       }
  
//       localStorage.setItem('cart', JSON.stringify(cart));
//       alert(`${product.name} has been added to the cart.`);
//     });
//   });
  
// document.addEventListener("DOMContentLoaded", () => {
//     const addToCartButtons = document.querySelectorAll(".add-to-cart");

//     addToCartButtons.forEach(button => {
//         button.addEventListener("click", (event) => {
//             const productCard = event.target.closest(".product");
//             const productName = productCard.querySelector("h3").textContent;
//             const productPrice = productCard.querySelector(".actual-price").textContent;
//             const productImage = productCard.querySelector("img").src;

//             // Create an item object to send to the cart page
//             const cartItem = {
//                 name: productName,
//                 price: productPrice,
//                 image: productImage
//             };

//             // Get existing cart data from localStorage or create a new one
//             let cart = JSON.parse(localStorage.getItem("cart")) || [];
//             cart.push(cartItem);
//             localStorage.setItem("cart", JSON.stringify(cart));

//             // Confirmation alert
//             alert(`${productName} has been added to your cart!`);

//             // Optional: Change button text after adding to cart
//             event.target.textContent = "Added ✔️";
//             event.target.disabled = true;
//         });
//     });
// });

// //cart
// document.addEventListener("DOMContentLoaded", () => {
//     const cartItemsContainer = document.querySelector("#cart-items");
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];

//     cartItemsContainer.innerHTML = cart.map(item => `
//         <div class="cart-item">
//             <img src="${item.image}" alt="${item.name}" width="100">
//             <h3>${item.name}</h3>
//             <p>${item.price}</p>
//         </div>
//     `).join('');
// });



// // add-to-cart.js
// function addToCart(product) {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const existingItemIndex = cart.findIndex(item => item.id === product.id);

//   if (existingItemIndex > -1) {
//       cart[existingItemIndex].quantity += 1;
//   } else {
//       cart.push({ ...product, quantity: 1 });
//   }

//   localStorage.setItem("cart", JSON.stringify(cart));
//   alert(`${product.name} added to the cart!`);
// }






// add-to-cart.js

// Fetch JSON data and initialize event listeners on page load
document.addEventListener("DOMContentLoaded", () => {
  fetch('./data.json')
      .then(response => response.json())
      .then(data => {
          setupAddToCartButtons(data);
      });
});

function setupAddToCartButtons(data) {
  const buttons = document.querySelectorAll('.add-to-cart-btn');
  
  buttons.forEach(button => {
      button.addEventListener('click', () => {
          const productId = button.getAttribute('data-id');
          const product = findProductById(data, productId);
          if (product) {
              addToCart(product);
          } else {
              console.error('Product not found in data.json');
          }
      });
  });
}

function findProductById(data, id) {
  // Search through all sections for the product by ID
  for (const section in data) {
      for (const category in data[section]) {
          const productList = data[section][category];
          const product = productList.find(item => item.id === id);
          if (product) {
              return product;
          }
      }
  }
  return null;
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItemIndex = cart.findIndex(item => item.id === product.id);

  if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += 1;
  } else {
      cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to the cart!`);
}
