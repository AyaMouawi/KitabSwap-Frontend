import React, { useState, useEffect } from "react";
import {  useDispatch } from "react-redux";
import { updateAddress } from "../../redux/actions/users";

function CartAddress({ closeModal, address }) {

  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");

  const [floor, setFloor] = useState(address.floor || "");
  const [building, setBuilding] = useState(address.building || "");
  const [city, setCity] = useState(address.city || "");
  const [street, setStreet] = useState(address.street || "");
  const [additionalDescription, setAdditionalDescription] = useState(
    address.additionalDescription || ""
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedAddress = {
      floor,
      building,
      city,
      street,
      additionalDescription,
    };

    try {
      await dispatch(updateAddress(userId, updatedAddress));
      const updatedUserAddress = `${city} ${street} ${building} ${floor}`;
      localStorage.setItem("userAddress", updatedUserAddress);
      closeModal();
    } catch (error) {
      console.log("Failed to update address:", error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="text-center">
        <p className="text-right text-2xl mb-8">
          <button onClick={closeModal}>X</button>
        </p>
        <p className="text-3xl text-center underline text-book mb-8">
          Edit Address
        </p>
        <form className="py-4" onSubmit={handleSubmit}>
          <div className="flex flex-wrap mb-4">
            <input
              type="number"
              name="floor"
              placeholder="Floor"
              className="px-4 py-2 bg-gray-100 focus:outline-none text-2xl text-black contactUs-input"
              required
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
            />
            <span className="contactUsDescription-span"></span>
            <input
              type="text"
              name="building"
              placeholder="Building"
              className="md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-2xl text-black contactUs-input"
              required
              value={building}
              onChange={(e) => setBuilding(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap mb-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              className="px-4 py-2 bg-gray-100 focus:outline-none text-2xl text-black contactUs-input"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <span className="contactUsDescription-span"></span>
            <input
              type="text"
              name="street"
              placeholder="Street"
              className="md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-2xl text-black contactUs-input"
              required
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
          <textarea
            className="w-full px-4 py-2 h-28 bg-gray-100 focus:outline-none text-2xl text-black"
            placeholder="Additional Description"
            name="message"
            required
            value={additionalDescription}
            onChange={(e) => setAdditionalDescription(e.target.value)}
          ></textarea>
          <button
            className="bg-book text-white py-1 px-8 text-3xl inline-block mt-5 flex ml-auto justify-center"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CartAddress;
