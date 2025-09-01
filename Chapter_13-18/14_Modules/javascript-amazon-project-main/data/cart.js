export let cart;

loadFromStorage();

if (!cart){
  cart = [];
}

export function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart'));

  if (!cart){
    cart = [];
  }
}

function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function cartQuantity() {
  return cart.reduce((total, cartItem) => total += cartItem.quantity, 0);
}

export function addToCart(productId, quantity) {
  const index = findProductIndex(productId);

  if (index != -1) {
    cart[index].quantity += quantity;
  } else {
    cart.push({ productId, quantity, deliveryOptionId: '1'});
  }

  saveToStorage();
}

export function removeFromCart(productId) {
  const index = findProductIndex(productId);
  
  if(index !== -1){
    cart.splice(index, 1);
  }

  saveToStorage();
}

export function updateQuantity(productId, newQuantity){
  const index = findProductIndex(productId);

  if(index !== -1){
    cart[index].quantity = newQuantity;
  }

  saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId){
  const index = findProductIndex(productId);

  if(index !== -1){
    cart[index].deliveryOptionId = deliveryOptionId;
  }

  saveToStorage();
}

function findProductIndex(productId){
  const index = cart.findIndex((cartItem) => cartItem.productId === productId);

  return index;
}