// Ensure that the user is logged in before accessing the cart page
document.addEventListener('DOMContentLoaded', function () {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    // If not logged in, show alert and redirect to login page
    if (!isLoggedIn) {
        alert('Login to Go To Cart');
        window.location.href = 'index.html'; // Redirect to login page
    } else {
        console.log('User is logged in');
        // Load cart data or display content
    }
});
// //blur effect
// document.addEventListener('DOMContentLoaded', function () {
//     const isLoggedIn = localStorage.getItem('isLoggedIn');
//     const body = document.body; // Get the body element
//     const overlay = document.createElement('div'); // Create a new overlay div

//     // Check login status
//     if (!isLoggedIn) {
//         // Apply blur to the entire page
//         body.classList.add('blur');

//         // Create and add overlay if the user is not logged in
//         overlay.classList.add('blur-overlay');
//         body.appendChild(overlay);

//         // Alert the user and redirect to login page
//         alert('Login to Go To Cart');
//         window.location.href = 'index.html'; // Redirect to the login page after alert
//     } else {
//         console.log('User is logged in');
//     }
// });





// // JavaScript to redirect user to payment.html on clicking "Place Order"
// document.addEventListener('DOMContentLoaded', function () {
//     // Select the "Place Order" element by its ID
//     const placeOrderElement = document.getElementById('place-order');

//     // Add a click event listener to the element
//     if (placeOrderElement) {
//         placeOrderElement.addEventListener('click', function () {
//             // Redirect the user to payment.html
//             window.location.href = './payment.html';
//         });
//     }
// });



// // Add to Cart Functionality
// document.querySelectorAll('.add-to-cart').forEach(button => {
//     button.addEventListener('click', () => {
//         const product = {
//             id: button.getAttribute('data-id'),
//             name: button.getAttribute('data-name'),
//             price: parseFloat(button.getAttribute('data-price')),
//             image: button.getAttribute('data-image'),
//             quantity: 1,
//         };

//         // Fetch cart from localStorage
//         let cart = JSON.parse(localStorage.getItem('cart')) || [];

//         // Check if the product already exists in the cart
//         const existingProduct = cart.find(item => item.id === product.id);

//         if (existingProduct) {
//             // Increment quantity if product exists
//             existingProduct.quantity += 1;
//         } else {
//             // Add new product if it doesn't exist
//             cart.push(product);
//         }

//         // Save updated cart to localStorage
//         localStorage.setItem('cart', JSON.stringify(cart));

//         // Show confirmation alert
//         alert(`${product.name} has been added to your cart!`);
//     });
// });

// // Render Cart Functionality (Cart Page)
// function renderCart() {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const cartContainer = document.getElementById('cart-items');
//     const totalItemsEl = document.getElementById('total-items');
//     const totalPriceEl = document.getElementById('total-price');

//     cartContainer.innerHTML = ''; // Clear the cart container first

//     if (cart.length === 0) {
//         cartContainer.innerHTML = '<p>Your cart is empty!</p>';
//         totalItemsEl.textContent = '0';
//         totalPriceEl.textContent = '0';
//         return;
//     }

//     let totalItems = 0;
//     let totalPrice = 0;

//     cart.forEach(item => {
//         totalItems += item.quantity;
//         totalPrice += item.quantity * item.price;

//         const cartItem = document.createElement('div');
//         cartItem.classList.add('cart-item');
//         cartItem.innerHTML = `
//             <img src="${item.image}" alt="${item.name}">
//             <div>
//                 <p>${item.name}</p>
//                 <p>Price: ₹${item.price}</p>
//                 <p>Quantity: 
//                     <button class="decrease-quantity" data-id="${item.id}">-</button>
//                     ${item.quantity}
//                     <button class="increase-quantity" data-id="${item.id}">+</button>
//                 </p>
//                 <button class="remove-item" data-id="${item.id}">Remove</button>
//             </div>
//         `;
//         cartContainer.appendChild(cartItem);
//     });

//     // Update totals
//     totalItemsEl.textContent = totalItems;
//     totalPriceEl.textContent = totalPrice.toFixed(2);

//     // Add event listeners for buttons
//     addCartEventListeners();
// }

// // Add event listeners for cart buttons
// function addCartEventListeners() {
//     document.querySelectorAll('.increase-quantity').forEach(button => {
//         button.addEventListener('click', () => updateQuantity(button.getAttribute('data-id'), 1));
//     });

//     document.querySelectorAll('.decrease-quantity').forEach(button => {
//         button.addEventListener('click', () => updateQuantity(button.getAttribute('data-id'), -1));
//     });

//     document.querySelectorAll('.remove-item').forEach(button => {
//         button.addEventListener('click', () => removeItem(button.getAttribute('data-id')));
//     });
// }

// // Update item quantity
// function updateQuantity(id, change) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const item = cart.find(product => product.id === id);

//     if (item) {
//         item.quantity += change;

//         if (item.quantity <= 0) {
//             cart = cart.filter(product => product.id !== id);
//         }

//         localStorage.setItem('cart', JSON.stringify(cart));
//         renderCart();
//     }
// }

// // Remove item from cart
// function removeItem(id) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     cart = cart.filter(product => product.id !== id);
//     localStorage.setItem('cart', JSON.stringify(cart));
//     renderCart();
// }

// // Render the cart on page load (only on cart page)
// if (window.location.pathname.includes('cart.html')) {
//     renderCart();
// }








// Add to Cart Functionality
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
        const product = {
            id: button.getAttribute('data-id'),
            name: button.getAttribute('data-name'),
            price: parseFloat(button.getAttribute('data-price')),
            image: button.getAttribute('data-image'),
            quantity: 1,
        };

        // Fetch cart from localStorage or initialize it
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if the product is already in the cart
        const existingProduct = cart.find(item => item.id === product.id);

        if (existingProduct) {
            // If the product exists, increase its quantity
            existingProduct.quantity += 1;
        } else {
            // Add the new product to the cart
            cart.push(product);
        }

        // Save updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Show an alert
        alert(`${product.name} has been added to the cart!`);
    });
});

// Render Cart on the Cart Page
function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    const totalItemsEl = document.getElementById('total-items');
    const totalPriceEl = document.getElementById('total-price');

    cartContainer.innerHTML = ''; // Clear existing cart items

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        totalItemsEl.textContent = '0';
        totalPriceEl.textContent = '0.00';
        return;
    }

    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
        totalPrice += item.quantity * item.price;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px;">
            <p>${item.name}</p>
            <p>Price: ₹${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
        `;
        cartContainer.appendChild(cartItem);
    });

    // Update totals
    totalItemsEl.textContent = totalItems;
    totalPriceEl.textContent = totalPrice.toFixed(2);
}

// Check if we're on the Cart Page and render the cart
if (window.location.pathname.includes('cart.html')) {
    renderCart();
}
