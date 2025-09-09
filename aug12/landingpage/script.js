// Handle Login Validation
function validateLogin() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (email === "" || password === "") {
    alert("Please fill in all fields");
    return false;
  }

  alert("Login successful!");
  window.location.href = "index.html";
  return false;
}

// Handle Signup Validation
function validateSignup() {
  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();
  const confirmPassword = document.getElementById("signupConfirmPassword").value.trim();

  if (name === "" || email === "" || password === "" || confirmPassword === "") {
    alert("Please fill in all fields");
    return false;
  }
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }

  alert("Signup successful!");
  window.location.href = "login.html";
  return false;
}

// Cart Functionality
function addToCart(itemName, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ itemName, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(itemName + " added to cart!");
}
