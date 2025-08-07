export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart){
  cart = [];
}

function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function cartQuantity() {
  return cart.reduce((total, cartItem) => total += cartItem.quantity, 0);
}

export function addToCart(productId, quantity) {
  const cartItem = cart.find((cartItem) => cartItem.productId === productId);

  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart.push({ productId, quantity});
  }

  saveToStorage();

  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity();
}

export function removeFromCart(productId) {
  const index = cart.findIndex((cartItem) => cartItem.productId === productId);
  
  if(index !== -1){
    cart.splice(index, 1);
  }

  saveToStorage();

  document.querySelector('.item-number').textContent = `${cartQuantity()} items`;
}