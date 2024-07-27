import React, { useState, useEffect } from "react";

export default function Checkout({ onClose, getTotalPrice, cartItems }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isMpesaSelected, setIsMpesaSelected] = useState(false);
  const [confirmPayment, setConfirmPayment] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMpesaClick = () => {
    setIsMpesaSelected(true);
  };

  const handleConfirmPayment = async () => {
    const orderData = {
      total_price: getTotalPrice(),
      payment_method: "mpesa",
      phone_number: phoneNumber,
      order_items_attributes: cartItems.map(item => ({
        name: item.name,
        price: item.price,
        quantity: 1, // Assuming quantity is 1 for simplicity
      })),
    };

    try {
      const response = await fetch("https://kfc-9d511ad56f48.herokuapp.com//orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ order: orderData }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Payment and order successfully processed:", data);
      setConfirmPayment(true);
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  return (
    <div
      className={`bg-blue-500 h-full w-1/4 p-8 border-4 border-green-500 rounded-lg p-4 overflow-hidden ${
        isMounted ? "slide-in" : ""
      }`}
      style={{ position: "absolute", top: 76, right: 0 }}
    >
      <div className="flex text-3xl font-bold mb-9 text-white border-b-[8px] border-blue-600 pb-2">
        <h2>Payment Method</h2>
        <h2
          className="text-white ml-16 align-right text-red-500 hover:text-red-800 cursor-pointer"
          onClick={onClose}
        >
          X
        </h2>
      </div>

      {!isMpesaSelected && !confirmPayment && (
        <div className="justify-center ml-11">
          <ul className="flex-col text-white justify-center">
            <li className="mb-11">
              <button
                className="px-5 py-3 bg-green-500 text-white rounded-md hover:scale-110 duration-300 active:scale-95"
                onClick={handleMpesaClick}
              >
                M-pesa
              </button>
            </li>
            <li className="mb-11">
              <button className="px-5 py-3 bg-orange-700 text-white rounded-md hover:scale-110 duration-300 active:scale-95">
                Mastercard
              </button>
            </li>
            <li className="mb-11">
              <button className="px-5 py-3 bg-white text-green-500 rounded-md hover:scale-110 duration-300 active:scale-95">
                Other
              </button>
            </li>
          </ul>
        </div>
      )}

      {isMpesaSelected && !confirmPayment && (
        <div className="ml-11">
          <ul className="flex-wrap ml-10 text-white">
            <li>
              <h1 className="font-extrabold text-green-300">
                You have {cartItems.length} items in your cart.
              </h1>
            </li>
          </ul>
          <div className="flex mt-5">
            <h1 className="text-black font-bold">Total Price:</h1>
            <h2 className="font-custom hover:scale-110">
              <span className="text-green-200 font-bold">Ke$:{getTotalPrice()}</span>
            </h2>
          </div>
          <div>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Phone Number"
                className="rounded-md bg-cyan-200 p-2 placeholder-black"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </form>
          </div>
          <button
            className="px-6 py-4 ml-16 bg-green-600 text-white rounded-md mt-5 transform hover:scale-110 active:scale-95 transition-transform"
            onClick={handleConfirmPayment}
          >
            Confirm Payment
          </button>
        </div>
      )}


      {confirmPayment && (
        <div className="ml-11 cursor-pointer">
          <h1 className="text-green-300 font-bold mb-4 text-4xl">
            Payment confirmed!
          </h1>
          <h1 className="font-custom text-white text-2xl w-[319px]">
            Please check your order{" "}
            <a
              href="/myorders"
              className="font-bold text-red-200 hover:text-red-500"
            >
              here
            </a>
          </h1>
        </div>
      )}
    </div>
  );
}
