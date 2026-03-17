function buildCartRows() {
  const cartItems = getCart();
  const rows = cartItems
    .map((item) => {
      const product = getProductById(item.productId);
      if (!product) {
        return "";
      }

      const lineTotal = item.quantity * item.unitPrice;

      return `
        <tr>
          <td>${product.name}</td>
          <td>${formatPrice(item.unitPrice)}</td>
          <td>
            <div class="qty-controls">
              <button type="button" class="ghost" data-action="decrease" data-product-id="${product.id}">-</button>
              <span>${item.quantity}</span>
              <button type="button" class="ghost" data-action="increase" data-product-id="${product.id}">+</button>
            </div>
          </td>
          <td>${formatPrice(lineTotal)}</td>
          <td><button type="button" class="link-button" data-action="remove" data-product-id="${product.id}">Remove</button></td>
        </tr>
      `;
    })
    .join("");

  return rows;
}

function renderCart() {
  const tableWrap = document.getElementById("cart-table-wrap");
  const emptyState = document.getElementById("cart-empty");
  const tableBody = document.getElementById("cart-table-body");
  const subtotal = document.getElementById("cart-subtotal");

  if (!tableWrap || !emptyState || !tableBody || !subtotal) {
    return;
  }

  const cartItems = getCart();

  if (!cartItems.length) {
    tableWrap.hidden = true;
    emptyState.hidden = false;
    subtotal.textContent = formatPrice(0);
    return;
  }

  tableWrap.hidden = false;
  emptyState.hidden = true;
  tableBody.innerHTML = buildCartRows();
  subtotal.textContent = formatPrice(getCartSubtotal());
}

function handleCartActions(event) {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  const action = target.dataset.action;
  const productId = target.dataset.productId;
  if (!action || !productId) {
    return;
  }

  const item = getCart().find((cartItem) => cartItem.productId === productId);
  if (!item && action !== "remove") {
    return;
  }

  if (action === "increase") {
    updateCartQuantity(productId, item.quantity + 1);
  }

  if (action === "decrease") {
    updateCartQuantity(productId, item.quantity - 1);
  }

  if (action === "remove") {
    removeFromCart(productId);
    if (typeof window.showToast === "function") {
      window.showToast("Item removed from cart.", "info");
    }
  }

  renderCart();
}

document.addEventListener("DOMContentLoaded", () => {
  renderCart();
  const tableBody = document.getElementById("cart-table-body");
  if (tableBody) {
    tableBody.addEventListener("click", handleCartActions);
  }
});
