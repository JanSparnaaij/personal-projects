const CART_STORAGE_KEY = "shopping-app-cart";

function getProducts() {
  return window.PRODUCTS || [];
}

function getProductById(productId) {
  return getProducts().find((product) => product.id === productId) || null;
}

function formatPrice(value) {
  return `$${Number(value).toFixed(2)}`;
}

function getCart() {
  const raw = localStorage.getItem(CART_STORAGE_KEY);
  if (!raw) {
    return [];
  }

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function saveCart(cartItems) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  renderCartCount();
}

function addToCart(productId, quantity = 1) {
  const cart = getCart();
  const target = cart.find((item) => item.productId === productId);

  if (target) {
    target.quantity += quantity;
  } else {
    const product = getProductById(productId);
    if (!product) {
      return;
    }

    cart.push({
      productId,
      quantity,
      unitPrice: product.price
    });
  }

  saveCart(cart);
}

function updateCartQuantity(productId, nextQuantity) {
  const cart = getCart();
  const target = cart.find((item) => item.productId === productId);

  if (!target) {
    return;
  }

  if (nextQuantity <= 0) {
    removeFromCart(productId);
    return;
  }

  target.quantity = nextQuantity;
  saveCart(cart);
}

function removeFromCart(productId) {
  const next = getCart().filter((item) => item.productId !== productId);
  saveCart(next);
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

function getCartSubtotal() {
  return getCart().reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
}

function renderCartCount() {
  const count = getCartCount();
  document.querySelectorAll("[data-cart-badge]").forEach((el) => {
    el.textContent = String(count);
    el.hidden = count <= 0;
  });

  document.querySelectorAll("[data-cart-count-text]").forEach((el) => {
    el.textContent = `Cart (${count})`;
  });
}

function ensureToastHost() {
  let host = document.getElementById("toast-host");
  if (host) {
    return host;
  }

  host = document.createElement("div");
  host.id = "toast-host";
  host.className = "toast-host";
  document.body.appendChild(host);
  return host;
}

function showToast(message, type = "info") {
  const host = ensureToastHost();
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");
  toast.textContent = message;
  host.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("is-visible");
  });

  setTimeout(() => {
    toast.classList.remove("is-visible");
    setTimeout(() => {
      toast.remove();
    }, 180);
  }, 2500);
}

function setupMobileNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const links = document.querySelector("[data-nav-links]");

  if (!toggle || !links) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    toggle.textContent = isOpen ? "Close" : "Menu";
  });
}

function highlightCurrentNav() {
  const page = document.body.dataset.page;
  if (!page) {
    return;
  }

  const link = document.querySelector(`[data-nav-page='${page}']`);
  if (link) {
    link.classList.add("is-active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupMobileNav();
  renderCartCount();
  highlightCurrentNav();
});

window.showToast = showToast;
