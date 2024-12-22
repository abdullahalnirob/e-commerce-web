import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const [count, setcount] = useState(1);
  const productDetails = useLoaderData();
  const { image, price, title, description, rating } = productDetails;

  return (
    <div>
      {/* Modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box relative max-w-lg bg-white shadow-lg rounded-lg">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div>
            <form action="" className="flex flex-col space-y-4">
              <center className="my-3">
                <h1 className="font-bold text-3xl text-blue-600">Ordering...</h1>
              </center>
              <label className="font-semibold">Product Name:</label>
              <input value={title} type="text" className="input input-bordered w-full" disabled />
              <div className="flex items-center justify-around space-x-2 py-2">
                <label className="text-sm">Price$:</label>
                <input value={price} type="text" className="input input-bordered w-full" disabled />
                <label className="text-sm">Qty:</label>
                <input value={count} type="text" className="input input-bordered w-full" disabled />
              </div>
              <label className="font-semibold">Your Phone Number:</label>
              <input type="text" placeholder="Enter your phone number" className="input input-bordered w-full" />
              <label className="font-semibold">Your Address:</label>
              <textarea className="textarea textarea-bordered" placeholder="Enter your Address..." />
              <br />
              <button className="bg-blue-600 hover:bg-blue-700 active:scale-95 duration-300 py-2 px-4 rounded-md text-white">Order</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* Product Details */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between mx-5 md:mx-32 my-20 space-y-12 md:space-y-0">
        {/* Product Image */}
        <div className="mb-10 md:mb-0">
          <div className="mb-10 md:mb-0 flex flex-col items-center">
            <img
              src={image}
              alt={title}
              className="w-60 h-48 object-cover rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 md:w-80 md:h-64"
            />
          </div>
        </div>

        {/* Product Information */}
        <div className="md:w-1/2 space-y-3">
          <h1 className="text-xl md:text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-sm md:text-lg text-gray-600">{description.slice(0, 170)}....</p>

          {/* Price & Rating */}
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <h1 className="text-lg md:text-2xl font-semibold text-blue-600">${price}</h1>
              <h2 className="text-sm md:text-xl text-gray-700">
                <span className="font-bold">Rating:</span> {rating.rate} / 5
              </h2>
            </div>

            {/* Quantity Control */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setcount(prevCount => (prevCount > 1 ? prevCount - 1 : 1))}
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 duration-300"
              >
                -
              </button>
              <input
                value={count}
                type="text"
                className="ring-2 ring-gray-400 text-center rounded-md w-16 md:w-24"
                readOnly
              />
              <button
                onClick={() => setcount(count + 1)}
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 duration-300"
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 mt-6">
            <button
              onClick={() => document.getElementById('my_modal_3').showModal()}
              className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 active:scale-95 duration-300 text-white"
            >
              Buy Now
            </button>
            <button className="px-6 py-3 rounded-md bg-gray-600 hover:bg-gray-700 active:scale-95 duration-300 text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
