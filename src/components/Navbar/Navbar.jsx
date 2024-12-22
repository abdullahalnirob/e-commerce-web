import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const Navbar = () => {
  const { carts } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu on small screens
  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <nav className="flex fixed z-50 bg-blue-600 top-0 left-0 ring-0 w-full items-center px-6 py-4 md:px-10 justify-between shadow-lg transition-all ease-in-out duration-300">
        {/* Logo */}
        <Link to="/">
          <div className="text-3xl font-extrabold text-white hover:text-yellow-400 transition duration-300">
            LuLu Baba
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-6 text-white font-medium list-none">
            <Link to="/">
              <li className="cursor-pointer hover:text-yellow-400 transition duration-300">Home</li>
            </Link>
            <Link to="/all">
              <li className="cursor-pointer hover:text-yellow-400 transition duration-300">All Products</li>
            </Link>
            <li className="cursor-pointer hover:text-yellow-400 transition duration-300">Contact</li>
          </ul>
        </div>

        {/* Cart Icon */}
        <div className="flex items-center space-x-6">
          <li className="cursor-pointer list-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#fff"
              fill="none"
              className="transition duration-300 transform hover:scale-125"
            >
              <path
                d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
                stroke="currentColor"
                stroke-width="1.5"
              />
            </svg>
          </li>
          <Link to="/cart">
            <li className="relative list-none w-fit cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#fff"
                fill="none"
                className="transition duration-300 transform hover:scale-125"
              >
                <path
                  d="M7.5 8V6.36364C7.5 3.95367 9.51472 2 12 2C14.4853 2 16.5 3.95367 16.5 6.36364V8"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M13.8816 7.5H10.1184C6.22973 7.5 4.7255 8.48796 3.6501 12.2373C2.68147 15.6144 2.19716 17.3029 2.70352 18.6124C3.01361 19.4143 3.56418 20.1097 4.28549 20.6104C6.8944 22.4216 16.9865 22.5043 19.7145 20.6104C20.4358 20.1097 20.9864 19.4143 21.2965 18.6124C21.8028 17.3029 21.3185 15.6144 20.3499 12.2373C19.3173 8.63723 17.9313 7.5 13.8816 7.5Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M11 11H13"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
              {carts.length > 0 && (
                <span className="absolute -right-2 -top-2 flex items-center justify-center rounded-full bg-red-500 text-center text-[10px] text-white w-5 h-5">
                  {carts.length}
                </span>
              )}
            </li>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={handleMenuToggle} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="transition duration-300 transform hover:scale-110"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "top-16" : "-top-96"
        } fixed  z-40 left-0 w-full bg-blue-600 py-6 md:hidden flex flex-col items-start space-y-4 transition-all ease-in-out duration-300`}
      >
        <Link to="/">
          <li className="list-none mx-6 cursor-pointer text-white font-medium hover:text-yellow-400 transition duration-300">
            Home
          </li>
        </Link>
        <Link to="/all">
          <li className="list-none mx-6 cursor-pointer text-white font-medium hover:text-yellow-400 transition duration-300">
            All Products
          </li>
        </Link>
        <li className="list-none mx-6 cursor-pointer text-white font-medium hover:text-yellow-400 transition duration-300">
          Contact
        </li>
      </div>
    </div>
  );
};

export default Navbar;
