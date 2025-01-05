document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const searchBar = document.getElementById("search-bar");
    const cartCount = document.getElementById("cart-count");
    const toastContainer = document.createElement("div");
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);

    let cartItems = 0;
    let products = [
        { id: 1, name: "Pain Reliever", category: "Medicine", price: 50, rating: 4.2 },
        { id: 2, name: "Vitamin C", category: "Supplements", price: 30, rating: 3.9 }
    ];

    // Theme toggle functionality
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-theme");
    });

    // Live search auto-complete
    searchBar.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const suggestions = products
            .filter(product => product.name.toLowerCase().includes(query))
            .map(product => `<div class="suggestion">${product.name}</div>`)
            .join("");
        document.getElementById("search-suggestions").innerHTML = suggestions;
    });

    // Cart item count update
    function updateCartCount() {
        cartCount.textContent = cartItems;
    }

    // Toast Notification
    function showToast(message) {
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.textContent = message;
        toastContainer.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    // Adding product to cart
    function addToCart(productId) {
        cartItems++;
        updateCartCount();
        showToast("Product added to cart!");
    }

    // Product Quick View Modal
    function openQuickView(productId) {
        const product = products.find(p => p.id === productId);
        document.getElementById("modal-content").innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <p>Rating: ${product.rating}⭐</p>
        `;
        document.getElementById("quick-view-modal").style.display = "block";
    }

    document.getElementById("modal-close").addEventListener("click", () => {
        document.getElementById("quick-view-modal").style.display = "none";
    });

    // Discount Timer
    function startDiscountTimer(duration) {
        const timerElement = document.getElementById("discount-timer");
        let time = duration;
        const countdown = setInterval(() => {
            const minutes = Math.floor(time / 60);
            const seconds = time % 60;
            timerElement.textContent = `${minutes}:${seconds}`;
            time--;
            if (time < 0) clearInterval(countdown);
        }, 1000);
    }

    startDiscountTimer(300); // 5-minute timer example

    // Filter products by price and category
    function filterProducts(priceRange, category) {
        const filtered = products.filter(product =>
            product.price <= priceRange && product.category === category
        );
        console.log("Filtered Products:", filtered);
    }
});
