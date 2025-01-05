// // Toggle visibility for the hidden list items
// function toggleItems() {
//     const hiddenItems = document.querySelectorAll('.hidden-item');
//     const showAllButton = document.querySelector('.show-all');

//     // Check if the items are currently visible
//     let isVisible = hiddenItems[0].style.display === 'list-item';

//     // Toggle visibility for each hidden item
//     hiddenItems.forEach(item => {
//         item.style.display = isVisible ? 'none' : 'list-item';
//     });

//     // Update the button text accordingly
//     showAllButton.textContent = isVisible ? 'Show All' : 'Show Less';
// }

// document.addEventListener("DOMContentLoaded", () => {
//     fetch('./data.json')
//         .then(response => response.json())
//         .then(data => {
//             setupAddToCartButtons(data);
//         });
// });

// function setupAddToCartButtons(data) {
//     const buttons = document.querySelectorAll('.add-to-cart-btn');
    
//     buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             const productId = button.getAttribute('data-id');
//             const product = findProductById(data, productId);
//             if (product) {
//                 addToCart(product);
//                 alert(`${product.name} has been added to the cart!`);
//             } else {
//                 alert('Product not found!');
//             }
//         });
//     });
// }

// // Find product by ID
// function findProductById(data, id) {
//     for (const category in data) {
//         const products = data[category].products || data[category].winter_care_essentials || data[category].full_body_health_checkups;
//         const product = products.find(item => item.id === id);
//         if (product) return product;
//     }
//     return null;
// }

// // Add to cart function using localStorage
// function addToCart(product) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     cart.push(product);
//     localStorage.setItem('cart', JSON.stringify(cart));
// }












document.addEventListener("DOMContentLoaded", () => {
    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            setupAddToCartButtons(data);
        })
        .catch(error => console.error('Error loading product data:', error));
});

function setupAddToCartButtons(data) {
    const buttons = document.querySelectorAll('.add-to-cart-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id');
            const product = findProductById(data, productId);
            if (product) {
                addToCart(product);
                alert(`${product.name} has been added to the cart!`);
            } else {
                alert('Product not found!');
            }
        });
    });
}

function findProductById(data, id) {
    for (const key in data) {
        const products = data[key].products || data[key].winter_care_essentials || data[key].full_body_health_checkups;
        const product = products.find(item => item.id === id);
        if (product) return product;
    }
    return null;
}

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
}
