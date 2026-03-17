function buildOrderSummary() {
  const cartItems = getCart();
  return cartItems
    .map((item) => {
      const product = getProductById(item.productId);
      if (!product) {
        return "";
      }

      const lineTotal = item.quantity * item.unitPrice;
      return `<li>${product.name} x${item.quantity} <span>${formatPrice(lineTotal)}</span></li>`;
    })
    .join("");
}

function renderCheckout() {
  const orderList = document.getElementById("order-list");
  const subtotal = document.getElementById("order-subtotal");
  const form = document.getElementById("checkout-form");
  const emptyState = document.getElementById("checkout-empty");

  if (!orderList || !subtotal || !form || !emptyState) {
    return;
  }

  const cartItems = getCart();
  if (!cartItems.length) {
    emptyState.hidden = false;
    form.hidden = true;
    orderList.innerHTML = "";
    subtotal.textContent = formatPrice(0);
    return;
  }

  emptyState.hidden = true;
  form.hidden = false;
  orderList.innerHTML = buildOrderSummary();
  subtotal.textContent = formatPrice(getCartSubtotal());
}

function setupCheckoutSubmit() {
  const form = document.getElementById("checkout-form");
  const confirmation = document.getElementById("checkout-confirmation");
  const pageBody = document.getElementById("checkout-page-body");
  const confirmationMessage = document.getElementById("checkout-confirmation-message");

  if (!form || !confirmation || !pageBody || !confirmationMessage) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const fullName = document.getElementById("full-name").value.trim();
    const orderId = `MO-${Date.now().toString().slice(-6)}`;

    saveCart([]);
    pageBody.hidden = true;
    confirmationMessage.textContent = `Thank you${fullName ? `, ${fullName}` : ""}! Your mock order ${orderId} has been placed.`;
    confirmation.hidden = false;

    if (typeof window.showToast === "function") {
      window.showToast("Order placed successfully.", "success");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCheckout();
  setupCheckoutSubmit();
});
