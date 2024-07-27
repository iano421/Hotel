import { useState } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    console.log("Adding item to cart:", item);
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    console.log("Removing item from cart:", item);
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem.quantity > 1) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    } else {
      setCart(cart.filter((cartItem) => cartItem.id !== item.id));
    }
  };

  const updateQuantity = (item, quantity) => {
    console.log("Updating item quantity:", item, quantity);
    if (quantity <= 0) {
      setCart(cart.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity } : cartItem
        )
      );
    }
  };

  return { cart, addToCart, removeFromCart, updateQuantity };
};

export default useCart;
