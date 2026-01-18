// ===============================
// CART STORAGE
// ===============================
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// ===============================
// ADD TO CART
// ===============================
function addToCart(name, price) {
  let cart = getCart();
  let item = cart.find((i) => i.name === name);

  if (item) {
    item.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  saveCart(cart);
  alert("Added to cart!");
}

// ===============================
// UPDATE NAVBAR COUNT
// ===============================
function updateCartCount() {
  let cart = getCart();
  let count = document.getElementById("cartCount");
  if (!count) return;

  let totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  count.innerText = totalQty;
}

// ===============================
// INIT
// ===============================
updateCartCount();
