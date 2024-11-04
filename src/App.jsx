import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-[25%] sm:mt-[15%] md:mt-[10%]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
