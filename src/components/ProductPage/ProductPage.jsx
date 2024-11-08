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
              <div class="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5">
                {filteredProducts.map((p) => {
                  const { id, title, image, price,rating } = p
                  return (
                    // <div key={id} className="w-full shadow-md ring-1 md:px-2 ring-gray-400 rounded-md">
                    //   <a className="block relative h-48 rounded overflow-hidden">
                    //     <img
                    //       alt="ecommerce"
                    //       className="w-full p-6 h-full block hover:scale-105 duration-300"
                    //       src={image}
                    //     />
                    //   </a>
                    //   <div className="mt-4 m-2">
                    //     <h2 className="text-gray-900 h-20 md:h-16 title-font font-medium">
                    //       {title.slice(0, 28) + "..."}
                    //     </h2>
                    //     <div className="flex flex-col justify-between mx-2">
                    //       <p className="mt-1">${price}</p>
                    //       <div className="flex items-center space-x-1 text-yellow-400">
                    //         <FaStar />
                    //         <FaStar />
                    //         <FaStar />
                    //         <FaStar />
                    //         <FaStar />
                    //       </div>
                    //     </div>
                    //     <div className="flex items-center space-x-1">
                    //       <Link to={`/product/${id}`}>
                    //         <button className="bg-blue-600 hover:bg-blue-700 duration-300 active:scale-95 px-3 py-2 my-4 text-white">
                    //           Buy Now
                    //         </button>
                    //       </Link>
                    //       <button
                    //         onClick={() => AddToCart(p)}
                    //         className="bg-blue-600 hover:bg-blue-700 duration-300 active:scale-95 px-3 py-2 my-4  text-white">
                    //         <FaCartShopping className="text-2xl" />
                    //       </button>
                    //     </div>
                    //   </div>
                    // </div>
                    <div className="relative border bg-white border-gray-200 rounded-xl">
                      <span className="absolute top-0 left-0 text-[11px] bg-red-500 text-white p-2 rounded-br-xl rounded-tl-xl">
                        {rating.rate}% OFF
                      </span>
                      <img className="w-[200px] h-[200px] bg-white object-contain rounded-t-xl" src={image} alt="" />
                      <div className="p-5">
                        <h2 className="text-lg">{title.slice(0, 10) + "..."}</h2>
                        <h4 className="text-gray-500 text-sm">${price} <span class="line-through text-sm text-red-500">$15.99</span></h4>
                      </div>
                      <div className="flex justify-around">
                        <Link to={`/product/${id}`} className="w-full">
                          <button className="py-3 w-5/6 bg-blue-500 hover:bg-blue-600 duration-200 rounded-bl-xl text-white">Buy Now</button>
                        </Link>
                        <Link className="w-1/4">
                          <button
                            onClick={() => AddToCart(p)}
                            className="py-3 rounded-br-xl text-blue-400 hover:text-blue-500 duration-300 font-extrabold flex justify-center">
                            <FaCartShopping className="text-3xl" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          )
      }
    </div >
  );
};

export default ProductPage;