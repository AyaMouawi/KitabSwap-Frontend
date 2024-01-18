import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import "../css/wishlistTable.css";
import { getAllAvailableSaleBooks } from "../../redux/actions/saleBooks";

function CartTable({ openModal,updateCartKey }) {

  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(getAllAvailableSaleBooks());
  }, [dispatch]);

  const saleBooks = useSelector((state) => state.saleBooks);

  console.log("cartSaleBooks", saleBooks)

  const [cartDetails, setCartDetails] = useState(() => {
    const cartDetailsString = localStorage.getItem("cartDetails");
    return cartDetailsString ? JSON.parse(cartDetailsString) : [];
  });

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart
      ? JSON.parse(storedCart)
      : cartDetails.map((item) => ({
          bookId: item.saleBook_id,
          quantity: 1,
          totalPrice: item.discountedPrice || item.originalPrice,
        }));
  });

  useEffect(() => {
    
    const handleStorageChange = () => {
      const cartDetailsString = localStorage.getItem("cartDetails");
      setCartDetails(cartDetailsString ? JSON.parse(cartDetailsString) : []);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity <= 0) {
      toast.error("Quantity must be greater than 0");
      return;
    }
  
    if (newQuantity <= cartDetails[index].quantity) {
      setCart((prevCart) => {
        const updatedCart = prevCart.map((item, i) =>
          i === index
            ? {
                ...item,
                quantity: newQuantity,
                totalPrice: (
                  newQuantity *
                  parseFloat(cartDetails[index].discountedPrice || cartDetails[index].originalPrice)
                ).toFixed(2),
              }
            : item
        );
  
        const updatedCartDetails = [...cartDetails];
        updatedCartDetails[index].quantity -= newQuantity;
  
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        localStorage.setItem("cartDetails", JSON.stringify(updatedCartDetails));
  
        updateCartKey(); 
  
        return updatedCart; 
      });
    } else {
      toast.error("Not enough quantity in stock");
    }
  };

  const filteredSaleBooks = saleBooks.filter((book) =>
  cart.some((cartItem) => cartItem.bookId === book.saleBook_id)
);

console.log("cartSaleBooksfiltered", filteredSaleBooks)


  return (
    <div className="mt-8 wishlistTable-table">
      <div className="flex italic justify-end mb-8">
       <Link to={"/Shop"}> <a href="" className="text-3xl hover:text-book">
          Continue Shopping <span className="ml-2 text-3xl">&#8594;</span>
        </a></Link>
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
          {cart.map((item, index) => (
            <tr key={item.bookId}>
              <td className="p-4 text-center">
                <img
                  src={cartDetails[index]?.book_image}
                  alt="Product"
                  className="w-32 h-52 object-cover mx-auto"
                />
              </td>
              <td className="p-4 text-center text-2xl">{cartDetails[index]?.title}</td>
              <td className="p-4 text-center text-2xl">
                {cartDetails[index]?.discountedPrice !== null ? (
                  <>
                    <p className="line-through text-red-500">${cartDetails[index]?.originalPrice}</p>
                    <p className="text-green-500">${cartDetails[index]?.discountedPrice}</p>
                  </>
                ) : (
                  <p>${cartDetails[index]?.originalPrice}</p>
                )}
              </td>
              <td className="p-4 text-center text-2xl">
                {cartDetails[index]?.discount !== "-" ? <p>{cartDetails[index]?.discount}%</p> : <p>-</p>}
              </td>
              <td className="p-4 text-center text-2xl">
                <input
                  type="number"
                  value={item.quantity}
                  min={1}
                  max={cartDetails[index]?.quantity}
                  onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                  className="w-8 border-none text-center"
                />
              </td>
              <td className="p-4 text-center text-2xl">${item.totalPrice}</td>
              <td className="p-4 text-2xl text-center">
                <button onClick={() => openModal(item.bookId)}>x</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartTable;