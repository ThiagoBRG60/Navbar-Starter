const productLink = document.getElementById("products");
const productInfo = document.getElementById("products-info");
const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close-menu");

productLink.addEventListener("mouseover", () => {
  productInfo.style.display = "block";
});

productInfo.addEventListener("mouseleave", () => {
  productInfo.style.display = "none";
});

menu.addEventListener("click", () => {
  productInfo.style.display = "block";
});

closeMenu.addEventListener('click', () => {
  productInfo.style.display = "none";
})