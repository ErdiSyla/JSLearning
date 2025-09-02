function Cart(localStorageKey) {
  const cart = {
    cartItems: undefined,

    loadFromStorage() {
      this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));

      if (!this.cartItems) {
        this.cartItems = [
          {
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 2,
            deliveryOptionId: "1",
          },
          {
            productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity: 1,
            deliveryOptionId: "2",
          },
        ];
      }
    },
    saveToStorage() {
      localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },
    cartQuantity() {
      return this.cartItems.reduce(
        (total, cartItem) => (total += cartItem.quantity),
        0
      );
    },
    addToCart(productId, quantity) {
      const index = this.findProductIndex(productId);

      if (index != -1) {
        this.cartItems[index].quantity += quantity;
      } else {
        this.cartItems.push({ productId, quantity, deliveryOptionId: "1" });
      }

      this.saveToStorage();
    },

    addToCart(productId, quantity) {
      const index = this.findProductIndex(productId);

      if (index != -1) {
        this.cartItems[index].quantity += quantity;
      } else {
        this.cartItems.push({ productId, quantity, deliveryOptionId: "1" });
      }

      this.saveToStorage();
    },

    removeFromCart(productId) {
      const index = this.findProductIndex(productId);

      if (index !== -1) {
        this.cartItems.splice(index, 1);
      }

      this.saveToStorage();
    },

    updateQuantity(productId, newQuantity) {
      const index = this.findProductIndex(productId);

      if (index !== -1) {
        this.cartItems[index].quantity = newQuantity;
        this.saveToStorage();
      }
    },

    updateDeliveryOption(productId, deliveryOptionId) {
      const index = this.findProductIndex(productId);

      if (index !== -1) {
        this.cartItems[index].deliveryOptionId = deliveryOptionId;
        this.saveToStorage();
      }
    },

    findProductIndex(productId) {
      const index = this.cartItems.findIndex(
        (cartItem) => cartItem.productId === productId
      );

      return index;
    },
  };

  return cart;
}

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');

cart.loadFromStorage();
businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);
