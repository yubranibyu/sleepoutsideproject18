import { setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  let cartItems = JSON.parse(localStorage.getItem("so-cart")) || [];

  // Si lo que hay guardado no es un array, lo convertimos en uno
  if (!Array.isArray(cartItems)) {
    cartItems = [cartItems];
  }

  cartItems.push(product);

  setLocalStorage("so-cart", cartItems);

  alert(`${product.Name} has been added to your cart.`);
  location.reload();
}

// Manejador del botón "Add to Cart"
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// Escucha al botón específico
document.getElementById("addToCart").addEventListener("click", addToCartHandler);
