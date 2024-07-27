import React from "react";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Cart",
    link: "/cart",
  },
  {
    id: 4,
    name: "Services",
    link: "/services",
  },
];
const Navbar = () => {
  return (
    <>
      <div className="shadow-xl">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
                KFC
              </a>
            </div>
            <div className="flex justify-between items-center gap-4">
              <ul className="hidden sm:flex items-center gap-4">
                  <li >
                  <a
                      href="/cart"
                      className="inline-block py-4 px-4 hover:text-primary duration-300"
                    >
                     Cart
                    </a>  <a
                      href="/orders"
                      className="inline-block py-4 px-4 hover:text-primary duration-300"
                    >
                     Orders
                    </a>
                  </li>
              </ul>
              <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full">
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
