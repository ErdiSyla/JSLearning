import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import '../data/cart-oop.js';

export function renderCheckOut(){
    renderOrderSummary();
    renderPaymentSummary();
}

renderCheckOut();