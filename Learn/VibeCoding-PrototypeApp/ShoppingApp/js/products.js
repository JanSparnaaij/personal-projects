function renderProducts() {
  const container = document.getElementById("product-list");
  const emptyState = document.getElementById("products-empty");
  const products = getProducts();

  if (!container || !emptyState) {
    return;
  }

  if (!products.length) {
    emptyState.hidden = false;
    return;
  }

  emptyState.hidden = true;
  container.innerHTML = products
    .map(
      (product) => `
      <article class="card">
        <div class="card-image" aria-hidden="true">Image</div>
        <h2 class="card-title">${product.name}</h2>
        <p class="card-price">${formatPrice(product.price)}</p>
        <p class="card-desc">${product.description}</p>
        <a class="button" href="product-details.html?id=${product.id}">View Details</a>
      </article>
    `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", renderProducts);
