import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../../App";
import Home from "../Home/Home";
import ProductDetails from "../Product-details/ProductDetails";
import ProductPage from "../ProductPage/ProductPage";

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
        path: "/product/:id",
        element: <ProductDetails />,
        loader:({params})=>fetch(`https://fakestoreapi.com/products/${params.id}`)
      },
    ],
  },
]);
