import React, { useContext } from 'react';
import { CartContext } from "../../Context/CartContext";
import { IoMdWarning } from 'react-icons/io';

const Cart = () => {
    const { carts } = useContext(CartContext);

    return (
        <div>
            {/* {carts.map((cart, i) => (
                <div key={i} className='my-20'>
                    <p className='text-4xl'>{cart.title}</p>
                </div>
            ))} */}
            {
                carts.length == 0 ? (
                    <div className='my-20'>
                        <center>
                            <IoMdWarning className='text-5xl text-yellow-400' />
                            <h1>No product Added....</h1>
                        </center>
                    </div>
                ) :
                    (
                        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                            <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-xs">
                                    <colgroup>
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                        <col className="w-24" />
                                    </colgroup>
                                    <thead className="dark:bg-gray-300">
                                        <tr className="text-left">
                                            <th className="p-3">Image</th>
                                            <th className="p-3">Name</th>
                                            <th className="p-3">Price</th>
                                            <th className="p-3">Qty</th>
                                            <th className="p-3">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            carts.map((cart, i) => (
                                                <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                                    <td className="p-3">
                                                        <p>
                                                            <img src={cart.image} alt="" className='w-[50px] h-[50px]' />
                                                        </p>
                                                    </td>
                                                    <td className="p-3">
                                                        <p>{cart.title}</p>
                                                    </td>
                                                    <td className="p-3">
                                                        <p>${cart.price}</p>
                                                    </td>
                                                    <td className="p-3">
                                                        <p>{1}</p>
                                                    </td>
                                                    <td className="p-3">
                                                        <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                                            <span>Pending</span>
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )
            }
        </div>
    );
}

export default Cart;
