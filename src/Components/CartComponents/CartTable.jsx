import React from "react";
import "../css/wishlistTable.css"

function CartTable({ openModal }) {
  return (
    /* added wishlistTable-table */
    <div className="mt-8 wishlistTable-table">
        <div className="flex italic justify-end mb-8">
        <a href="" className="text-3xl hover:text-book ">
          Continue Shopping <span className="ml-2 text-3xl">&#8594;</span>
        </a>
        <span className="w-24"></span>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="border-b border-black p-4 text-center font-thin text-2xl">Product</th>
            <th className="border-b border-black p-4 text-center font-thin text-2xl">Name</th>
            <th className="border-b border-black p-4 text-center font-thin text-2xl">Price</th>
            <th className="border-b border-black p-4 text-center font-thin text-2xl">Discount</th>
            <th className="border-b border-black p-4 text-center font-thin text-2xl">Quantity</th>
            <th className="border-b border-black p-4 text-center font-thin text-2xl">Total</th>
            <th className="p-4 text-center"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 text-center">
              <img
                src="Images/harrypotter1.webp"
                alt="Product"
                className="w-32 h-52 object-cover mx-auto"
              />
            </td>
            <td className="p-4 text-center text-2xl">
              Harry YUHYUH
            </td>
            <td className="p-4 text-center text-2xl">
              <p>106$</p>
            </td>
            <td className="p-4 text-center text-2xl">
              <p>30%</p>
            </td>
            <td className="p-4 text-center text-2xl">
              <input type="text " defaultValue={1} className="w-8 border-none text-center"/>
            </td>
            <td className="p-4 text-center text-2xl ">
           106$
            </td>
            <td className="p-4 text-2xl text-center">
            <button onClick={openModal}>x</button>
            </td>
          </tr>
      
        </tbody>
      </table>
    </div>
  );
}

export default CartTable;
