document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("search-button");
  const searchInput = document.getElementById("search-input");
  const products = document.querySelectorAll(".product");

  searchButton.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase();
    products.forEach((product) => {
      const productName = product.querySelector("h3").textContent.toLowerCase();
      if (productName.includes(query)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});
