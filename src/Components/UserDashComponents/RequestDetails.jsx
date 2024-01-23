import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getById } from "../../redux/actions/users";

function RequestDetails({ userId, closeRequestModal }) {
 
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getById(userId));
      } catch (error) {
        console.error("Error fetching requests:", error)
      }
    };
    fetchData();
  }, [dispatch]);

  const users = useSelector ((state) => state.users )


  return (
    <div className="  flex items-center justify-center">
      <div className="text-center ">
        <p className="text-right text-2xl mb-8">
          <button onClick={closeRequestModal}>X</button>
        </p>
        <p className="text-3xl text-center  underline text-book mb-8">
          Request Details
        </p>
        <form className="py-4">
          <div className="flex flex-wrap mb-4">
            <p
            
              className="italic md:mt-0 px-4 py-2 bg-gray-100 italic focus:outline-none text-2xl text-black contactUs-input"
             
            > Name : {users.fullName}</p>
          </div>
          <div className="flex flex-wrap mb-4">
          <p
            
            className="italic md:mt-0 px-4 py-2 bg-gray-100 italic focus:outline-none text-2xl text-black contactUs-input"
           
          > Phone Number : {users.phoneNumber}</p>
            <span className="contactUsDescription-span"></span>
            <p
            
            className="italic md:mt-0 px-4 py-2 bg-gray-100 italic focus:outline-none text-2xl text-black contactUs-input"
           
          > Email : {users.email}</p>
          </div>
          <p
            className="w-[40vw] italic px-4 py-2 h-28 bg-gray-100 focus:outline-none  text-2xl text-black text-start"
           
          >Location : {users.address}, {users.additionalDescription}</p>
        </form>
      </div>
    </div>
  );
}

export default RequestDetails;
