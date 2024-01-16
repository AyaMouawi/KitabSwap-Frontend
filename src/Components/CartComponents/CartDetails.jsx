import React, { useState, useEffect } from "react";
import "../css/CartDetails.css";

function CartDetails({ openModal, openConfirmModal }) {
  const [cart, setCart] = useState([]);
  const [selectedShipping, setSelectedShipping] = useState("pickup");

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);

    const storedShipping = localStorage.getItem("shipment") || "pickup";
    setSelectedShipping(storedShipping);
  }, []);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "cart") {
        const updatedCart = JSON.parse(event.newValue) || [];
        setCart(updatedCart);
      } else if (event.key === "shipment") {
        const updatedShipping = event.newValue || "pickup";
        setSelectedShipping(updatedShipping);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [cart]);

  const calculateSubtotal = () => {
    let subtotal = 0;
    for (const item of cart) {
      subtotal += parseFloat(item.totalPrice);
    }
    return subtotal.toFixed(2);
  };

  const calculateShipping = () => {
    return selectedShipping === "delivery" ? "3.00" : "0.00";
  };

  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal()) || 0;
    const total = selectedShipping === "delivery" ? subtotal + 3 : subtotal;

    return total.toFixed(2);
  };

  const handleShippingChange = (value) => {
    setSelectedShipping(value);
    localStorage.setItem("shipment", value);
  };

  return (
    <div className="cartDetails-cont p-8 scale-90 mt-4">
      <p className="text-4xl italic mb-9 ml-8 CartDetails-Title">
        Choose shipping method
      </p>
      <form>
        <div className="flex justify-between CartDetails-form">
          <div className="ml-12 CartDetails-input">
            <div className="mb-4">
              <label className="text-3xl">
                <input
                  type="radio"
                  className="mr-4"
                  name="shippingMethod"
                  value="delivery"
                  checked={selectedShipping === "delivery"}
                  onChange={() => handleShippingChange("delivery")}
                />
                delivery at home (under 5-7 days) - 3 ${" "}
                <p className="text-xl ml-8 italic">
                  Maktabi building, Clemenceau, Hamra{" "}
                  <a onClick={openModal} className="underline ml-4 not-italic">
                    edit address
                  </a>
                </p>
              </label>
            </div>
            <div className="mb-4">
              <label className="text-3xl">
                <input
                  type="radio"
                  className="mr-4"
                  name="shippingMethod"
                  value="pickup"
                  checked={selectedShipping === "pickup"}
                  onChange={() => handleShippingChange("pickup")}
                />
                store pickup (on Saturdays only) - free{" "}
                <p className="text-xl ml-8  italic">Betchay, Baabda</p>
              </label>
            </div>
          </div>
          <div className="flex gap-52 CartDetails-receipt">
            <div className="">
              <p className="text-2xl mb-4 italic">Subtotal</p>
              <p className="text-2xl mb-4 italic">Shipping</p>
              <p className="text-2xl mb-4 italic">Total</p>
            </div>
            <div>
              <p className="text-2xl mb-4 italic">${calculateSubtotal()}</p>
              <p className="text-2xl mb-4 italic">${calculateShipping()}</p>
              <p className="text-2xl mb-4 italic">${calculateTotal()}</p>
            </div>
          </div>
        </div>
      </form>
      <div className="flex justify-end">
        <button
          className="bg-book text-white py-3 px-2 w-80 text-3xl inline-block mt-5 flex justify-center"
          onClick={openConfirmModal}
        >
          <p>
            Checkout <span className="ml-12">{`$${calculateTotal()}`}</span>{" "}
          </p>
        </button>
      </div>
    </div>
  );
}

export default CartDetails;
