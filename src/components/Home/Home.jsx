import React from "react";
import Hero from "../Hero/Hero";
import { Hero_banner } from "../Hero_banner/Hero_banner";
import ProductPage from "../ProductPage/ProductPage";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Hero />
      <Hero_banner />
      <ProductPage />
      <center>
        <Link to='/all'>
          <button className="px-3 my-7 py-2 bg-blue-600 hover:bg-blue-700 text-white">
            View All Product
          </button>
        </Link>
      </center>

    </div>
  );
};

export default Home;
