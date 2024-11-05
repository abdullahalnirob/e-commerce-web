import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaSearch, FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";


// context api
import { CartContext } from "../../Context/CartContext";
// context api
const ProductPage = () => {
  const { AddToCart } = useContext(CartContext);

  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true)
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
    <div id="products">
      <div className="flex items-center justify-between mx-5 md:mx-20 my-4">
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="ring-1 ring-gray-500 py-2 md:py-1 px-3 outline-none rounded"
        >
          <option value="">Sort by Price</option>
          <option value="high-to-low">High to Low</option>
          <option value="low-to-high">Low to High</option>
        </select>
        <div className="flex items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-3 py-2 w-32 md:w-[unset]   bg-gray-200"
            placeholder="Search..."
          />
          <FaSearch className="relative -left-8 text-gray-500" />
        </div>
      </div>
      {
        loading ? (
          <center className="my-10">
            <div className="loading-wave">
              <div className="loading-bar"></div>
              <div className="loading-bar"></div>
              <div className="loading-bar"></div>
              <div className="loading-bar"></div>
            </div>
          </center>
        ) :
          (
            <section className="body-font mx-2 md:mx-10 my-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-10">
                {filteredProducts.map((p) => {
                  const { id, title, image, price } = p
                  return (
                    <div key={id} className="w-full shadow-md ring-1 md:px-2 ring-gray-400 rounded-md">
                      <a className="block relative h-48 rounded overflow-hidden">
                        <img
                          alt="ecommerce"
                          className="w-full p-6 h-full block hover:scale-105 duration-300"
                          src={image}
                        />
                      </a>
                      <div className="mt-4 m-2">
                        <h2 className="text-gray-900 h-20 md:h-16 title-font font-medium">
                          {title.slice(0, 28) + "..."}
                        </h2>
                        <div className="flex flex-col justify-between mx-2">
                          <p className="mt-1">${price}</p>
                          <div className="flex items-center space-x-1 text-yellow-400">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Link to={`/product/${id}`}>
                            <button className="bg-blue-600 hover:bg-blue-700 duration-300 active:scale-95 px-3 py-2 my-4 text-white">
                              Buy Now
                            </button>
                          </Link>
                          <button
                            onClick={() => AddToCart(p)}
                            className="bg-blue-600 hover:bg-blue-700 duration-300 active:scale-95 px-3 py-2 my-4  text-white">
                            <FaCartShopping className="text-2xl" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          )
      }
      <center>
        <button className="px-3 my-7 py-2 bg-blue-600 hover:bg-blue-700 text-white">
          View All Product
        </button>
      </center>

    </div>
  );
};

export default ProductPage;