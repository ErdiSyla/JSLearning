import { cart , cartQuantity, removeFromCart, updateQuantity } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./util/money.js";
import { hello } from "https://unpkg.com/supersimpledev@1.0.1/hello.esm.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

let cartSummaryHTML = '';


cart.forEach((cartItem) =>{
    const productId = cartItem.productId;

    let matchingProduct;
    
    products.forEach((product) => {
        if (product.id == productId) {
            matchingProduct = product;
        }
    });

    cartSummaryHTML += `
    <div class="cart-item-container">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">
                  $${formatCurrency(matchingProduct.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary js-update-link"
                    data-product-id="${matchingProduct.id}">
                    Update
                  </span>
                  <input class="quantity-input">
                  <span class="save-quantity-link link-primary">Save</span>
                  <span class="delete-quantity-link link-primary js-delete-link"
                  data-product-id="${matchingProduct.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `
});

document.querySelector('.order-summary').innerHTML = cartSummaryHTML;
document.querySelector('.paymet-item-quantity').textContent = `Items (${cartQuantity()})`;
document.querySelector('.item-number').textContent = `${cartQuantity()} items`;

document.querySelectorAll('.js-delete-link')
  .forEach((link) =>{
    link.addEventListener('click' , (() =>{
      const { productId } = link.dataset;
      
      removeFromCart(productId);

      const container =  link.closest('.cart-item-container');
      container.remove();
    }))
});

document.querySelectorAll('.js-update-link')
  .forEach((link) =>{
    link.addEventListener('click' , (() =>{
      const container =  link.closest('.cart-item-container');
      const quantityInput = container.querySelector('.quantity-input');
      const saveLink = container.querySelector('.save-quantity-link');

      quantityInput.style.display = 'inline-block';
      saveLink.style.display = 'inline-block';
      link.style.display = 'none';

      const currentQuantity = container.querySelector('.quantity-label').textContent;
      quantityInput.value = currentQuantity;
  }))
});

hello();

const today = dayjs();
const deliveryDate = today.add(7, 'days');

console.log(deliveryDate.format('dddd, MMMM D'));


document.querySelectorAll('.save-quantity-link')
  .forEach((saveLink) => {
    saveLink.addEventListener('click', () => {
      const container = saveLink.closest('.cart-item-container');
      const quantityInput = container.querySelector('.quantity-input');
      const updateLink = container.querySelector('.js-update-link');
      const quantityLabel = container.querySelector('.quantity-label');
      const productId = updateLink.dataset.productId;

      const newQuantity = Number(quantityInput.value);

      if (newQuantity > 0) {
        updateQuantity(productId, newQuantity);
        quantityLabel.textContent = newQuantity;
      }

      quantityInput.style.display = 'none';
      saveLink.style.display = 'none';
      updateLink.style.display = 'inline-block';
    });
  });