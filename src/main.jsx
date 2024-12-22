import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./Context/CartContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/router/router.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <CartProvider>
        <App />
      </CartProvider>
    </RouterProvider>
  </StrictMode>
);
