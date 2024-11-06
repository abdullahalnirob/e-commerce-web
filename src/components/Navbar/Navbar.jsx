import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const Navbar = () => {
  const { carts } = useContext(CartContext);
  return (
    <div>
      <nav className="flex fixed z-50 bg-white top-0 left-0 ring-0 w-full items-center px-5 md:px-0 justify-around py-3 md:py-6 shadow-md">
        <Link to='/'>
          <div className="text-2xl">
            LuLu Baba
          </div>
        </Link>
        <div>
          <ul className="flex items-center space-x-5">
            <Link to='/'><li className="cursor-pointer">Home</li></Link>
            <Link to='/all'><li className="cursor-pointer">All products</li></Link>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
        <div className="flex ite space-x-5 list-none">
          <li className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#0f0f0f"
              fill="none"
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
          <Link to='/cart'>
            <li className="relative w-fit cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#0f0f0f"
                fill="none"
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
              <span className="absolute -right-3 -top-2 flex size-5 items-center justify-center rounded-full bg-red-500 text-center text-[10px] text-white">{carts.length}</span>
            </li>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
