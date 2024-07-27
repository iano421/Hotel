import React, { useState } from "react";
import { BsFillCartXFill } from "react-icons/bs";
import Checkout from "./Checkout";

export default function Cart({ cartItems, removeFromCart }) {
  const [isCheckoutVisible, setCheckoutVisible] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleRemoveFromCart = (serviceId) => {
    removeFromCart(serviceId);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, service) => total + service.price, 0).toFixed(2);
  };

  const handlePaymentButtonClick = () => {
    if (cartItems.length === 0) {
      setShowError(true);
    } else {
      setShowError(false);
      setCheckoutVisible(!isCheckoutVisible);
    }
  };

  return (
    <section className="myserv px-5 py-32 text-green-600">
      <h1 className="text-5xl lg:text-7xl text-lime-600 text-center font-bold border-b-[5px] w-[311px] border-indigo-600 pb-2 mb-8">
        My Cart.
      </h1>
      <div className="p-4">
        {cartItems.length > 0 ? (
          <ul className="flex-wrap ml-6 text-white">
            {cartItems.map((service) => (
              <li
                key={service.id}
                className="flex items-center space-x-6 mb-6 hover:scale-95"
              >
                <img
                  src={service.img}
                  alt="service Avatar"
                  className="w-16 h-16 rounded-full hover:scale-110"
                />
                <div>
                  <h2 className="text-3xl font-bold mb-2 text-black ml-10">
                    {service.name}
                  </h2>
                </div>
                <p className="text-gray-300 font-bold text-green-700 text-2xl ml-10">
                  Ke$ {service.price}
                </p>
                <div className="flex">
                  <button
                    className="px-10 py-2 bg-red-500 text-white rounded-md hover:bg-red-900 ml-10"
                    onClick={() => handleRemoveFromCart(service.id)}
                  >
                    <BsFillCartXFill />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-red-500 font-bold">Your cart is empty.</p>
        )}
        <h2 className="font-bold mb-2 text-green-700 text-2xl">
          Total Price: Ke$ {getTotalPrice()}
        </h2>
        <div className="flex justify-between items-center">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md mt-5 transform hover:scale-110 active:scale-95 transition-transform"
            onClick={handlePaymentButtonClick}
          >
            Payment
          </button>
        </div>
        {showError && <p className="text-red-500 mt-5">Please add items to the cart.</p>}
      </div>
      {isCheckoutVisible && (
        <Checkout onClose={() => setCheckoutVisible(false)} getTotalPrice={getTotalPrice} cartItems={cartItems} />
      )}
    </section>
  );
}
