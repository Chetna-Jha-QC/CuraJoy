document.getElementById("logout-btn").addEventListener("click", function () {
    alert("You have successfully logged out!");
    window.location.href = "./index.html"; // Redirect to login page
  });
  




  // Get modal and elements
const modal = document.getElementById("add-product-modal");
const addItemBtn = document.querySelector(".add-item-btn");
const closeModal = document.getElementById("close-modal");
const addProductForm = document.getElementById("add-product-form");

// Show modal on "Add Item" button click
addItemBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Add product to local storage and show confirmation
addProductForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const product = {
    productCode: document.getElementById("product-code").value,
    productName: document.getElementById("product-name").value,
    productCategory: document.getElementById("product-category").value,
    productDescription: document.getElementById("product-description").value,
    productPrice: parseFloat(document.getElementById("product-price").value),
    taxCategory: document.getElementById("tax-category").value,
    minOrderQuantity: parseInt(document.getElementById("min-order-quantity").value),
    productImage: document.getElementById("product-image").files[0]?.name || "No Image",
  };

  // Get existing products from local storage
  const existingProducts = JSON.parse(localStorage.getItem("products")) || [];
  existingProducts.push(product);

  // Save updated product list to local storage
  localStorage.setItem("products", JSON.stringify(existingProducts));

  // Confirmation popup
  alert("Product successfully added!");

  // Clear form and close modal
  addProductForm.reset();
  modal.style.display = "none";

  // Log for deployed JSON (mock)
  console.log("Updated Products:", JSON.stringify(existingProducts, null, 2));
});


// Get necessary elements
const medicineCountElement = document.querySelector(".inventory-summary .card p:first-child");

// Initialize Medicines Available count from Local Storage
let medicineCount = parseInt(localStorage.getItem("medicineCount")) || 298; // Default is 298
medicineCountElement.textContent = medicineCount;

// Add product and update count
addProductForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const product = {
    productCode: document.getElementById("product-code").value,
    productName: document.getElementById("product-name").value,
    productCategory: document.getElementById("product-category").value,
    productDescription: document.getElementById("product-description").value,
    productPrice: parseFloat(document.getElementById("product-price").value),
    taxCategory: document.getElementById("tax-category").value,
    minOrderQuantity: parseInt(document.getElementById("min-order-quantity").value),
    productImage: document.getElementById("product-image").files[0]?.name || "No Image",
  };

  // Get existing products from Local Storage
  const existingProducts = JSON.parse(localStorage.getItem("products")) || [];
  existingProducts.push(product);

  // Save updated product list to Local Storage
  localStorage.setItem("products", JSON.stringify(existingProducts));

  // Increment the Medicines Available count
  medicineCount += 1;
  medicineCountElement.textContent = medicineCount;

  // Save the updated count to Local Storage
  localStorage.setItem("medicineCount", medicineCount);

  // Confirmation popup
  alert("Product successfully added!");

  // Clear form and close modal
  addProductForm.reset();
  modal.style.display = "none";

  // Log for deployed JSON (mock)
  console.log("Updated Products:", JSON.stringify(existingProducts, null, 2));
});




// const modal = document.getElementById("add-product-modal");
const openModalButton = document.getElementById("open-modal");
const closeModalButton = document.getElementById("close-modal");

// Show Modal
openModalButton.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Hide Modal
closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close Modal When Clicking Outside
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
