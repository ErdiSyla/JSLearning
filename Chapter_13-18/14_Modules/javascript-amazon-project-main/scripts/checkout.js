import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";

export function renderCheckOut(){
    renderOrderSummary();
    renderPaymentSummary();
}

renderCheckOut();