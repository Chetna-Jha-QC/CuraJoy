// Theme toggle functionality
document.getElementById("themeToggle").addEventListener("change", function () {
    if (this.checked) {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        document.querySelector("header").classList.remove("light-theme");
        document.querySelector("header").classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        document.querySelector("header").classList.remove("dark-theme");
        document.querySelector("header").classList.add("light-theme");
    }
});






document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("loginSignupBtn");
    const modal = document.getElementById("loginModal");
    const closeModal = document.getElementById("closeModal");
    const authForm = document.getElementById("authForm");
    const toggleToSignup = document.getElementById("toggleToSignup");
    const modalTitle = document.getElementById("modalTitle");
    const submitBtn = document.getElementById("submitBtn");

    let users = JSON.parse(localStorage.getItem("users")) || {}; // Load users from localStorage

    // Handle Login/Signup button click
    loginBtn.addEventListener("click", function () {
        if (loginBtn.textContent === "Login") {
            modalTitle.textContent = "Login";
            submitBtn.textContent = "Login";
            toggleToSignup.style.display = "block";
            modal.style.display = "block";
        } else if (loginBtn.textContent === "Logout") {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("currentUser");
            loginBtn.textContent = "Login";
            alert("Logged out successfully.");
            window.location.reload();
        }
    });

    // Close the modal
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Switch between Login and Signup
    toggleToSignup.addEventListener("click", function () {
        if (modalTitle.textContent === "Login") {
            modalTitle.textContent = "Sign Up";
            submitBtn.textContent = "Sign Up";
            toggleToSignup.textContent = "Already have an account? Login";
        } else {
            modalTitle.textContent = "Login";
            submitBtn.textContent = "Login";
            toggleToSignup.textContent = "Don't have an account? Sign Up";
        }
    });

    // Handle form submission for Login or Signup
    authForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (modalTitle.textContent === "Login") {
            if (email === "admin@empher.com" && password === "Admin@1234") {
                alert("Logged in as Admin");
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("role", "admin");
                window.location.href = "admin.html";
            } else if (users[email] && users[email] === password) {
                alert("Logged in successfully.");
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("currentUser", email);
                loginBtn.textContent = "Logout";
                modal.style.display = "none";
                window.location.href = "index.html";
            } else {
                alert("Not found, Please check credentials or Sign Up.");
            }
        } else if (modalTitle.textContent === "Sign Up") {
            if (email && password) {
                if (users[email]) {
                    alert("User already exists. Please login.");
                } else {
                    users[email] = password; // Add user to localStorage
                    localStorage.setItem("users", JSON.stringify(users));
                    alert("Account created successfully. Please login.");
                    modalTitle.textContent = "Login";
                    submitBtn.textContent = "Login";
                    toggleToSignup.textContent = "Don't have an account? Sign Up";
                }
            } else {
                alert("Please provide valid email and password.");
            }
        }
    });

    // Show/Hide password functionality
    document.getElementById("showPassword").addEventListener("click", function () {
        const passwordField = document.getElementById("password");
        passwordField.type = passwordField.type === "password" ? "text" : "password";
    });

    // Check login status on page load
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const currentUser = localStorage.getItem("currentUser");
    if (isLoggedIn === "true" && currentUser) {
        loginBtn.textContent = "Logout";
    } else {
        loginBtn.textContent = "Login";
    }
});
// Show/Hide password functionality
document.getElementById("showPassword").addEventListener("change", function () {
    const passwordField = document.getElementById("password");
    if (this.checked) {
        passwordField.type = "text"; // Show password
    } else {
        passwordField.type = "password"; // Hide password
    }
});





// Get elements
const cityInput = document.getElementById('cityInput');
const cityDropdown = document.getElementById('cityDropdown');
const cityItems = cityDropdown.getElementsByTagName('li');

// Show the dropdown when the user starts typing
cityInput.addEventListener('focus', function() {
    cityDropdown.style.display = 'block';  // Show dropdown
});

cityInput.addEventListener('input', function() {
    const filter = cityInput.value.toLowerCase();  // Get user input
    let hasMatches = false;

    for (let i = 0; i < cityItems.length; i++) {
        const cityText = cityItems[i].textContent.toLowerCase();
        if (cityText.indexOf(filter) > -1) {
            cityItems[i].style.display = '';  // Show matching cities
            hasMatches = true;
        } else {
            cityItems[i].style.display = 'none';  // Hide non-matching cities
        }
    }

    // Hide the dropdown if no matching cities
    if (!hasMatches) {
        cityDropdown.style.display = 'none';
    }
});

// Select city and set input value
for (let i = 0; i < cityItems.length; i++) {
    cityItems[i].addEventListener('click', function() {
        cityInput.value = cityItems[i].textContent;
        cityDropdown.style.display = 'none';  // Hide dropdown after selection
    });
}

// Hide the dropdown if clicked outside of it
document.addEventListener('click', function(event) {
    if (!cityInput.contains(event.target) && !cityDropdown.contains(event.target)) {
        cityDropdown.style.display = 'none';
    }
});






document.addEventListener("DOMContentLoaded", () => {
    // Initialize cart from localStorage or empty object
    const cart = JSON.parse(localStorage.getItem("cart")) || {};

    // Handle Add to Cart button click
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const productId = button.getAttribute("data-product-id");
            const productName = button.getAttribute("data-name");
            const productPrice = parseInt(button.getAttribute("data-price"));

            // Check if product is already in cart
            if (cart[productId]) {
                cart[productId].quantity += 1; // Increase quantity
            } else {
                cart[productId] = {
                    name: productName,
                    price: productPrice,
                    quantity: 1
                };
            }

            // Save updated cart to localStorage
            localStorage.setItem("cart", JSON.stringify(cart));

            // Show confirmation alert
            alert(`${productName} has been added to the cart.`);
        });
    });
});
