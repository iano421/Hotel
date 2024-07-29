import React from "react";
import BiryaniImg1 from "../../assets/burger/burger1.png";
import Services from "../Services/Services";
import Banner from "../Banner/Banner";
import Testimonial from "../Testimonial/Testimonial";

const Hero = ({ addToCart }) => {
  return (
    <>
      <div className="min-h-[650px] bg-cyan-100">
        <div className="min-h-[650px] backdrop-blur-md flex justify-center items-center">
          <div className="container pb-8 sm:pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                <h1 data-aos="zoom-out" className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                  Welcome to
                  <br />
                  Kenya Fried Chicken (KFC)
                </h1>
                <p  className="text-sm">
                  Wachana na Kentucky, Hapa tukona Kuku kienyeji
                </p>
                <div data-aos-delay="300">
                  <button className="bg-gradient-to-r from-primary to-white hover:scale-105 duration-200 text-black font-bold py-2 px-4 rounded-full border-2 border-white">
                    Order Now
                  </button>
                </div>
              </div>
              <div className="min-h-[400px] flex justify-center items-center relative order-1 sm:order-2">
                <div data-aos="fade-left" data-aos-delay="300">
                  <img
                    src={BiryaniImg1}
                    alt="biryani img"
                    className="max-w-[430px] hover:scale-105 duration-300 w-full mx-auto drop-shadow-[-6px_20px_15px_rgba(0,0,0,1)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services addToCart={addToCart} />
      <Banner />
      <Testimonial />
    </>
  );
};



export default Hero;
