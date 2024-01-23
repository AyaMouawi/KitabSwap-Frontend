import React from "react";
import { placeOrder } from "../../redux/actions/orders";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; 

function ConfirmCheckout({ closeModal, updateCartKey }) {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleConfirm = () => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      navigate("/SignIn");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const orderInfo = cart;

    dispatch(placeOrder(userId, orderInfo));
    closeModal();

    localStorage.removeItem("cart");
    localStorage.removeItem("cartDetails");

    updateCartKey();
  };

  return (
    <div className="flex items-center justify-center">
      <div className="text-center">
        <p className="text-right text-2xl mb-8">
          <button onClick={closeModal}>X</button>
        </p>
        <div className="px-8">
          <p className="text-3xl m-12 mb-4 mx-auto">
            Are you sure you want to checkout?
          </p>
          <div className="flex justify-center p-6 items-center">
            <button
              onClick={handleConfirm}
              className="bg-book text-white py-1 px-2 w-40 text-3xl inline-block border border-book hover:bg-white hover:text-book hover: border-book"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmCheckout;
