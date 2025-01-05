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
//blur effect
document.addEventListener('DOMContentLoaded', function () {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const body = document.body; // Get the body element
    const overlay = document.createElement('div'); // Create a new overlay div

    // Check login status
    if (!isLoggedIn) {
        // Apply blur to the entire page
        body.classList.add('blur');

        // Create and add overlay if the user is not logged in
        overlay.classList.add('blur-overlay');
        body.appendChild(overlay);

        // Alert the user and redirect to login page
        alert('Login to Go To Cart');
        window.location.href = 'index.html'; // Redirect to the login page after alert
    } else {
        console.log('User is logged in');
    }
});
