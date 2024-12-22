import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaSearch, FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

// Context API
import { CartContext } from "../../Context/CartContext";

const ProductPage = () => {
  const { AddToCart } = useContext(CartContext);

  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    const sortedProducts = [...products].sort((a, b) => {
      if (order === "low-to-high") {
        return a.price - b.price;
      } else if (order === "high-to-low") {
        return b.price - a.price;
      }
      return 0;
    });

    setProducts(sortedProducts);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filtered products based on search term and sort order
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div id="products" className="bg-gray-50 min-h-screen">
      <div className="flex flex-wrap items-center justify-between mx-5 md:mx-20 my-6 gap-4">
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="ring-2 ring-blue-500 py-2 md:py-1 px-3 outline-none rounded shadow-sm text-gray-600 hover:ring-blue-700 focus:ring-blue-700 transition duration-200"
        >
          <option value="">Sort by Price</option>
          <option value="high-to-low">High to Low</option>
          <option value="low-to-high">Low to High</option>
        </select>
        <div className="relative flex items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-4 py-2 w-40 md:w-60 bg-gray-100 rounded-l-lg shadow-md border-t border-b border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Search..."
          />
          <FaSearch className="absolute right-3 text-gray-500" />
        </div>
      </div>

      {loading ? (
        <center className="my-20">
          <div className="loading-wave flex justify-center space-x-2">
            <div className="loading-bar bg-blue-500 animate-pulse w-2 h-8 rounded"></div>
            <div className="loading-bar bg-blue-500 animate-pulse w-2 h-8 rounded"></div>
            <div className="loading-bar bg-blue-500 animate-pulse w-2 h-8 rounded"></div>
            <div className="loading-bar bg-blue-500 animate-pulse w-2 h-8 rounded"></div>
          </div>
        </center>
      ) : (
        <section className="body-font mx-2 md:mx-10 my-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
            {filteredProducts.map((p) => {
              const { id, title, image, price, rating } = p;
              return (
                <div
                  key={id}
                  className="relative border bg-white border-gray-200 rounded-xl shadow-lg transform transition hover:scale-105 duration-200 h-auto sm:h-[350px] md:h-[400px]"
                >
                  <span className="absolute top-0 left-0 text-[11px] bg-red-500 text-white py-1 px-2 rounded-br-xl rounded-tl-xl">
                    {rating.rate} / 5 ★
                  </span>
                  <img
                    className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-gray-100 object-contain rounded-t-xl mx-auto"
                    src={image}
                    alt="product"
                  />
                  <div className="p-3 sm:p-4 md:p-5">
                    <h2 className="text-sm sm:text-lg font-semibold text-gray-700 hover:text-blue-500">
                      {title.slice(0, 25) + (title.length > 25 ? "..." : "")}
                    </h2>
                    <h4 className="text-gray-500 text-xs sm:text-sm my-2">
                      ${price.toFixed(2)}
                      <span className="line-through text-sm text-red-500 ml-2">
                        $15.99
                      </span>
                    </h4>
                  </div>
                  <div className="flex justify-between items-center border-t p-2">
                    <Link
                      to={`/product/${id}`}
                      className="flex-1 text-center py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs sm:text-sm font-medium rounded-bl-xl"
                    >
                      Buy Now
                    </Link>
                    <button
                      onClick={() => AddToCart(p)}
                      className="flex items-center justify-center text-blue-500 hover:text-blue-600 text-2xl px-4"
                    >
                      <FaCartShopping />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductPage;
