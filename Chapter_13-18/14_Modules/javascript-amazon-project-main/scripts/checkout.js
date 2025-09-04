import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

async function loadPage(){
    console.log('load page');
    return 'value 2';
}

loadPage().then((value) => {
    console.log('next step');
    console.log(value);
})

export function renderCheckOut(){
    renderOrderSummary();
    renderPaymentSummary();
}

renderCheckOut();