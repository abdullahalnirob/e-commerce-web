import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../../App";
import Home from "../Home/Home";
import ProductDetails from "../Product-details/ProductDetails";
import ProductPage from "../ProductPage/ProductPage";
import Cart from "../Cart/Cart";
import { useState } from "react";

// States
// const [isLogin, setisLogin] = useState(false);
// States

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/all",
        element: <ProductPage />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/product/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`https://fakestoreapi.com/products/${params.id}`),
      },
    ],
  },
]);
