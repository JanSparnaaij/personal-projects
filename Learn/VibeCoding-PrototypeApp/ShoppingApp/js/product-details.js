function getProductIdFromQuery() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function renderProductDetails() {
  const content = document.getElementById("product-details-content");
  const missingState = document.getElementById("product-missing");
  const addButton = document.getElementById("add-to-cart");

  if (!content || !missingState || !addButton) {
    return;
  }

  const productId = getProductIdFromQuery();
  const product = getProductById(productId);

  if (!product) {
    content.hidden = true;
    missingState.hidden = false;
    return;
  }

  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-price").textContent = formatPrice(product.price);
  document.getElementById("product-category").textContent = product.category;
  document.getElementById("product-description").textContent = product.description;

  addButton.addEventListener("click", () => {
    addToCart(product.id, 1);
    const status = document.getElementById("add-status");
    status.textContent = `${product.name} added to cart.`;
    if (typeof window.showToast === "function") {
      window.showToast(`${product.name} added to cart.`, "success");
    }
  });
}

document.addEventListener("DOMContentLoaded", renderProductDetails);
