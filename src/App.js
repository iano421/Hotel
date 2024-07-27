import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import OrdersTable from "./components/orders/OrdersTable"

const App = () => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const addToCart = (service) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = [...prevCartItems, service];
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      console.log(cartItems)
      return updatedCartItems;
    });
  };

  const removeFromCart = (serviceId) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.filter((service) => service.id !== serviceId);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
        />
        <Route path="/" element={<Hero addToCart={addToCart} />} />
        <Route path="/orders" element={<OrdersTable/>} />
        </Routes>
      <Footer />
    </>
  );
};

export default App;
