import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
const ProductDetails = () => {
  const [count, setcount] = useState(1)
  const productDetails = useLoaderData()
  console.log(productDetails)
  const { image, price, title, description, rating } = productDetails

  return (
    <div>
      {/* modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div>
            <form action="" className="flex flex-col space-y-2">
              <center className="my-3">
                <h1 className="font-bold text-3xl">Ordering...</h1>
              </center>
              <label htmlFor="">Product name:</label>
              <input
                value={title}
                type="text"
                className="input  input-bordered w-full" />
              <div className="flex items-center justify-around space-x-2 py-2">
                <label htmlFor="" className="text-sm">Price$:</label>
                <input
                  value={price}
                  type="text" className="input input-bordered w-full" />
                <label htmlFor="" className="text-sm">Qty:</label>
                <input
                  value={count}
                  type="text" className="input input-bordered w-full" />
              </div>
              <label htmlFor="">Your Phone Number:</label>
              <input type="text" placeholder="Enter your phone number" className="input input-bordered w-full" />
              <label htmlFor="">Your Address: </label>
              <textarea className="textarea textarea-bordered" placeholder="Enter your Address.."></textarea>
              <br />
              <button className="active:scale-95 duration-300 py-2 px-2 rounded-md text-white bg-blue-600">Order</button>
            </form>
          </div>
        </div>
      </dialog>
      {/* Modal */}
      <div className="flex flex-col md:flex-row justify-around mx-10 md:mx-20 my-32">
        <div className="mb-20 md:mb-0">
          <img src={image} alt=""
            className="w-60 h-44"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-2xl font-semibold">
            {title}
          </h1>
          <h1>
            {description.slice(0, 170)}....
          </h1>
          <div className="flex flex-col md:flex-row md:justify-between ">
            <div className="space-y-3">
              <h1 className="text-xl">
                ${price}
              </h1>
              <h1 className="text-xl">
                <span className="font-bold text-xl">Rating: </span>
                {rating.rate}
              </h1>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex my-5 md:my-0 items-center space-x-1">
                <button
                  onClick={() => setcount(prevCount => (prevCount > 1 ? prevCount - 1 : 1))}
                  className="bg-blue-600 px-2 text-white">-</button>
                <input
                  value={count}
                  type="text" className="ring-1 text-center rounded ring-black w-1/3 md:w-1/2" />
                <button
                  onClick={() => setcount(count + 1)}
                  className="bg-blue-600 px-2 text-white">+</button>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => document.getElementById('my_modal_3').showModal()}
                  className="px-5 py-2 rounded bg-blue-600 hover:bg-blue-700 active:scale-90 duration-300 text-white">Buy now</button>
                <button
                  className="px-5 py-2 rounded bg-blue-600 hover:bg-blue-700 active:scale-90 duration-300 text-white">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
