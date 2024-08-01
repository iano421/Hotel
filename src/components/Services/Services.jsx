import React from "react";
import Img2 from "../../assets/burger/burger2.png";
import Img3 from "../../assets/burger/burger3.png";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import { FaCartPlus } from "react-icons/fa";

const ServicesData = [
  {
    id: 9,
    img: Img2,
    name: "Burger",
    description: "The crunchiest burger in kenya",
    aosDelay: "100",
    price: 150,
  },
  {
    id: 2,
    img: Img3,
    name: "Fries & Burger",
    description: "A sandwich consisting of a patty made from ground chicken served in a bun",
    aosDelay: "300",
    price: 500,
  },
  {
    id: 5,
    img: Img2,
    name: "Veg Burger",
    description: "A burger without meat.",
    aosDelay: "500",
    price: 300,
  },
];

const Services = ({ addToCart }) => {
  return (
    <div className="bg-gray-100">
      <div className="py-12 lg:py-20">
        <div className="container">
          <HeaderTitle
            title="Services"
            subtitle="Our Services"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis delectus architecto error nesciunt."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-primary relative shadow-xl duration-300 group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="max-w-[200px] block mx-auto transform -translate-y-16 group-hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 duration-300 text-sm line-clamp-2">
                    {service.description}
                  </p>
                  <p className="font-semibold italic">Ksh {service.price}</p>
                </div>
                <div className="flex justify-center p-4">
                  <button
                    onClick={() => addToCart(service)}
                    className="bg-green-500 text-white py-3 px-4 rounded-md hover:scale-110 active:scale-90 transition-transform"
                  >
                    <FaCartPlus />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
