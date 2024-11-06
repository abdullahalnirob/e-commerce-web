import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./Context/CartContext";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <CartProvider>
        <Navbar />
        <div className="py-32">
          <Outlet />
        </div>
      </CartProvider>
      <Footer />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
};

export default App;
