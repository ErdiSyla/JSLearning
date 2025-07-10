const basketball = {
    name: 'basketball',
    price: 2095
};
console.log(basketball);

basketball.price += 500;
console.log(basketball);

basketball['delivery-time'] = '3 days';
console.log(basketball);

function comparePrice(product1 , product2){
    return product1.price > product2.price ? product2 : product1;
}

function isSameProducts(product1, product2){
    return (product1.name === product2.name) && (product1.price === product2.price) ? true : false;
}

const product1 = {
    name: 'product',
    price: 5000
};

const product2 = {
    price: 4000
};

const product3 = {
    name: 'product',
    price: 5000
};

console.log(comparePrice(product1, product2));
console.log(isSameProducts(product1, product3));

console.log('Good Morning'.toLowerCase());
console.log('test'.repeat(2));