// Theme
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");

    // Toggle between light and dark themes
    themeToggle.addEventListener("change", () => {
        const isDarkMode = themeToggle.checked;
        const body = document.body;
        const header = document.querySelector("header");

        body.classList.toggle("dark-theme", isDarkMode);
        body.classList.toggle("light-theme", !isDarkMode);
        header.classList.toggle("dark-theme", isDarkMode);
        header.classList.toggle("light-theme", !isDarkMode);
    });
});




//Login-SignUp Button
document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("loginSignupBtn");
    const modal = document.getElementById("loginModal");
    const closeModal = document.getElementById("closeModal");
    const authForm = document.getElementById("authForm");
    const toggleToSignup = document.getElementById("toggleToSignup");
    const modalTitle = document.getElementById("modalTitle");
    const submitBtn = document.getElementById("submitBtn");

    const users = JSON.parse(localStorage.getItem("users")) || {};

    //Open/close modal and handle logout
    loginBtn.addEventListener("click", () => {
        if (loginBtn.textContent === "Login") {
            openModal("Login");
        } else {
            logoutUser();
        }
    });

    closeModal.addEventListener("click", () => (modal.style.display = "none"));

    toggleToSignup.addEventListener("click", toggleAuthMode);

    authForm.addEventListener("submit", handleAuth);

    //Open modal
    function openModal(mode) {
        modalTitle.textContent = mode;
        submitBtn.textContent = mode;
        toggleToSignup.style.display = mode === "Login" ? "block" : "none";
        modal.style.display = "block";
    }

    //Toggle between Login/Signup
    function toggleAuthMode() {
        const isLogin = modalTitle.textContent === "Login";
        modalTitle.textContent = isLogin ? "Sign Up" : "Login";
        submitBtn.textContent = modalTitle.textContent;
        toggleToSignup.textContent = isLogin
            ? "Already have an account? Login"
            : "Don't have an account? Sign Up";
    }

    // Handling Login or Signup
    function handleAuth(event) {
        event.preventDefault();
        const email = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (!email || !password) return alert("Please fill out all fields.");

        if (modalTitle.textContent === "Login") {
            if (email === "admin@empher.com" && password === "Admin@1234") {
                loginAsAdmin();
            } else if (users[email] === password) {
                loginUser(email);
            } else {
                alert("Invalid credentials. Please try again.");
            }
        } else {
            if (users[email]) {
                alert("User already exists. Please log in.");
            } else {
                users[email] = password;
                localStorage.setItem("users", JSON.stringify(users));
                alert("Account created successfully. Please log in.");
                openModal("Login");
            }
        }
    }

    // LogIn as Admin
    function loginAsAdmin() {
        alert("Logged in as Admin.");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("role", "admin");
        window.location.href = "admin.html";
    }

    // Log in as User
    function loginUser(email) {
        alert("Logged in successfully.");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", email);
        loginBtn.textContent = "Logout";
        modal.style.display = "none";
    }

    // Logout User
    function logoutUser() {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUser");
        loginBtn.textContent = "Login";
        alert("Logged out successfully.");
        window.location.reload();
    }

    // Initializing the Login state
    if (localStorage.getItem("isLoggedIn")) {
        loginBtn.textContent = "Logout";
    }
});






//City Search Drop-Down
document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("cityInput");
    const cityDropdown = document.getElementById("cityDropdown");
    const cityItems = cityDropdown.getElementsByTagName("li");

    cityInput.addEventListener("focus", () => {
        cityDropdown.style.display = "block";
    });

    cityInput.addEventListener("input", () => {
        const filter = cityInput.value.toLowerCase();
        let hasMatches = false;

        Array.from(cityItems).forEach((item) => {
            const matches = item.textContent.toLowerCase().includes(filter);
            item.style.display = matches ? "" : "none";
            if (matches) hasMatches = true;
        });

        cityDropdown.style.display = hasMatches ? "block" : "none";
    });

    Array.from(cityItems).forEach((item) => {
        item.addEventListener("click", () => {
            cityInput.value = item.textContent;
            cityDropdown.style.display = "none";
        });
    });

    document.addEventListener("click", (event) => {
        if (!cityInput.contains(event.target) && !cityDropdown.contains(event.target)) {
            cityDropdown.style.display = "none";
        }
    });
});




// Add to Cart Button
document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || {};

    document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", () => {
            const productId = button.dataset.productId;
            const productName = button.dataset.name;
            const productPrice = parseFloat(button.dataset.price);

            addToCart(productId, productName, productPrice);
        });
    });

    function addToCart(productId, name, price) {
        if (cart[productId]) {
            cart[productId].quantity += 1;
        } else {
            cart[productId] = { name, price, quantity: 1 };
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${name} has been added to the cart.`);
    }
});





