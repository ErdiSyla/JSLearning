export let cart = JSON.parse(localStorage.getItem('cart'));
import { renderCheckOut } from "../scripts/checkout.js";
import { deliveryOptions } from "./deliveryoptions.js";

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
  const index = findProductIndex(productId);

  if (index != -1) {
    cart[index].quantity += quantity;
  } else {
    cart.push({ productId, quantity, deliveryOptionId: '1'});
  }

  saveToStorage();

  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity();
}

export function removeFromCart(productId) {
  const index = findProductIndex(productId);
  
  if(index !== -1){
    cart.splice(index, 1);
  }

  saveToStorage();

  renderCheckOut();
}

export function updateQuantity(productId, newQuantity){
  const index = findProductIndex(productId);

  if(index !== -1){
    cart[index].quantity = newQuantity;
  }

  saveToStorage();

  renderCheckOut();
}

export function updateDeliveryOption(productId, deliveryOptionId){
  const index = findProductIndex(productId);

  if(index !== -1){
    cart[index].deliveryOptionId = deliveryOptionId;
  }

  saveToStorage();

  renderCheckOut();
}

function findProductIndex(productId){
  const index = cart.findIndex((cartItem) => cartItem.productId === productId);

  return index;
}