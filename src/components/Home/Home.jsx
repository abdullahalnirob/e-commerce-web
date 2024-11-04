import React from "react";
import Hero from "../Hero/Hero";
import { Hero_banner } from "../Hero_banner/Hero_banner";
import ProductPage from "../ProductPage/ProductPage";

const Home = () => {
  return (
    <div>
      <Hero />
      <Hero_banner />
      <ProductPage />
    </div>
  );
};

export default Home;
