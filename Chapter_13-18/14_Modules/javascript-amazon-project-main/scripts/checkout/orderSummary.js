import {
  cart,
  cartQuantity,
  removeFromCart,
  updateDeliveryOption,
  updateQuantity,
} from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { formatCurrency } from "../util/money.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import { deliveryOptions, getDeliveryOption } from "../../data/deliveryoptions.js";

export function renderOrderSummary() {
  generateSummaryHTML();
  bindEvents();
}

function generateSummaryHTML() {
  let cartSummaryHTML = "";

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    let matchingProduct = getProduct(productId);

    const deliveryOptionId = cartItem.deliveryOptionId;

    let deliveryOption = getDeliveryOption(deliveryOptionId);

    const today = dayjs();

    const deliveryDate = today.add(deliveryOption.deliveryDays, "days");

    const dateString = deliveryDate.format("dddd, MMMM D");

    cartSummaryHTML += `
    <div class="cart-item-container">
            <div class="delivery-date">
              Delivery date: ${dateString}
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
                    Quantity: <span class="quantity-label">${
                      cartItem.quantity
                    }</span>
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
                ${deliveryOptionsHTML(matchingProduct, cartItem)}
        </div>
      </div>
    </div>
  `;

  document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;
  });

  document.querySelector(".item-number").textContent = `${cartQuantity()} items`;
}

function deliveryOptionsHTML(matchingProduct, cartItem) {
  let html = "";

  deliveryOptions.forEach((deliveryOption) => {
    const today = dayjs();

    const deliveryDate = today.add(deliveryOption.deliveryDays, "days");

    const dateString = deliveryDate.format("dddd, MMMM D");

    const priceString =
      deliveryOption.priceCents === 0
        ? "FREE"
        : `$${formatCurrency(deliveryOption.priceCents)} - `;

    const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

    html += `<div class="delivery-option js-delivery-option" 
                  data-product-id="${
                    matchingProduct.id
                  }" data-delivery-option-id="${deliveryOption.id}">
                  <input type="radio"
                  ${isChecked ? "checked" : ""}
            class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
          <div>
                    <div class="delivery-option-date">
                      ${dateString}
                    </div>
                    <div class="delivery-option-price">
                      ${priceString} Shipping
          </div>
        </div>
                </div>`;
  });

  return html;
}

function bindEvents() {
  document.querySelectorAll(".js-delete-link").forEach((link) => {
    link.addEventListener("click", () => {
      const { productId } = link.dataset;

      removeFromCart(productId);

      const container = link.closest(".cart-item-container");
      container.remove();
    });
  });

  document.querySelectorAll(".js-update-link").forEach((link) => {
    link.addEventListener("click", () => {
      const container = link.closest(".cart-item-container");
      const quantityInput = container.querySelector(".quantity-input");
      const saveLink = container.querySelector(".save-quantity-link");

      quantityInput.style.display = "inline-block";
      saveLink.style.display = "inline-block";
      link.style.display = "none";

      const currentQuantity =
        container.querySelector(".quantity-label").textContent;
      quantityInput.value = currentQuantity;
    });
  });

  document.querySelectorAll(".save-quantity-link").forEach((saveLink) => {
    saveLink.addEventListener("click", () => {
      const container = saveLink.closest(".cart-item-container");
      const quantityInput = container.querySelector(".quantity-input");
      const updateLink = container.querySelector(".js-update-link");
      const quantityLabel = container.querySelector(".quantity-label");
      const productId = updateLink.dataset.productId;

      const newQuantity = Number(quantityInput.value);

      if (newQuantity > 0) {
        updateQuantity(productId, newQuantity);
        quantityLabel.textContent = newQuantity;
      }

      quantityInput.style.display = "none";
      saveLink.style.display = "none";
      updateLink.style.display = "inline-block";
    });
  });

  document.querySelectorAll(".js-delivery-option").forEach((element) => {
    element.addEventListener("click", () => {
      const { productId, deliveryOptionId } = element.dataset;
      updateDeliveryOption(productId, deliveryOptionId);
      renderOrderSummary();
    });
  });
}