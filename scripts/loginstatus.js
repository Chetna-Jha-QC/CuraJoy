// loginStatus.js

// Handle Login Status
window.addEventListener('load', function () {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    const loginButton = document.getElementById('loginSignupBtn');
    if (isLoggedIn === 'true') {
        // If logged in, update the UI
        if (loginButton) {
            loginButton.textContent = 'Logout';
            loginButton.addEventListener('click', function () {
                // Log out user
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('userEmail');
                alert('You have logged out!');
                window.location.href = 'index.html';
            });
        }
    } else {
        // If not logged in, ensure the button redirects to the login/signup page
        if (loginButton) {
            loginButton.textContent = 'Login';
            loginButton.addEventListener('click', function () {
                window.location.href = 'index.html';
            });
        }
    }
});
