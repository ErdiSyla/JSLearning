import { addToCart, cart, loadFromStorage, removeFromCart, updateDeliveryOption } from "../../data/cart.js";

describe('Test suite: addToCart', () =>{
    beforeEach(() => {
        spyOn(localStorage, 'setItem');
    });

    it('adds an exisiting product to the cart', () =>{
        
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: '83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
                quantity: 1,
                deliveryOptionId: '1'
            }]);
        });
        loadFromStorage();

        addToCart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e', 1);
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
        expect(cart[0].quantity).toEqual(2);
        expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify(cart));
    });

    it('adds a new product to the cart', () => {

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });

        loadFromStorage();

        addToCart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e', 1);
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
        expect(cart[0].quantity).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify(cart));
    }); 
});

describe('Test suite: removeFromCart', () =>{
    beforeEach(() =>{
        spyOn(localStorage, 'setItem');

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: '83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
                quantity: 1,
                deliveryOptionId: '1'
            }]);
        });
    })

    it('removes and existing product from the cart', () =>{
        loadFromStorage();

        removeFromCart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
        expect(cart.length).toEqual(0);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify(cart));
    });

    it('tries to remove a non existent product from the cart', () =>{
        loadFromStorage();

        removeFromCart('1');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify(cart));
    });
});

describe('Test suite: updateDeliverOption', () => {
    beforeEach(() =>{
        spyOn(localStorage, 'setItem');

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: '83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
                quantity: 1,
                deliveryOptionId: '1'
            }]);
        });
    });

    it('update delivery option of product in cart', () => {
        loadFromStorage();

        updateDeliveryOption('83d4ca15-0f35-48f5-b7a3-1ea210004f2e', '3');
        expect(cart.length).toEqual(1);
        expect(cart[0].deliveryOptionId).toEqual('3');
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify(cart));
    });

    it('update delivery option of a non-product in cart', () => {
        loadFromStorage();

        updateDeliveryOption('1', 3);
        expect(cart.length).toEqual(1);
        expect(cart[0].deliveryOptionId).toEqual('1');
        expect(localStorage.setItem).toHaveBeenCalledTimes(0);
    });
});