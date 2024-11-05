import React, { createContext, useState } from "react";
import toast from "react-hot-toast";
export const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);

  console.log(carts);
  const AddToCart = (data) => {
    toast.success('Product Added!')
    setCarts([...carts, data]);
  };
  return (
    <CartContext.Provider value={{ carts, AddToCart }}>
      {children}
    </CartContext.Provider>
  );
};

