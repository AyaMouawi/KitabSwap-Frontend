import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {getById} from "../../../redux/actions/users";

function ViewCustomer({ userId }) {

  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(getById(userId));
 
 }, [dispatch]);

 const user = useSelector ((state) => state.users);
 console.log("userDetails", user);

 const fullNameArray = user.fullName ? user.fullName.split(" ") : [];
 const firstName = fullNameArray[0] || "";
 const lastName = fullNameArray.slice(1).join(" ") || "";

 const addressArray = user.address ? user.address.split(",") : [];
 const city = addressArray[0]?.trim() || "";


  return (
    <div className="flex items-center justify-center font-lateef w-[40rem]">
      <div className="text-left w-full">
        <p className="text-3xl text-center  underline text-book mb-8">
          Customer Info
        </p>
        <form className="py-4">
         
          <div className="flex flex-wrap mb-4 ">
            <p
             
              className=" md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-2xl text-black contactUs-input"
              required
            >{firstName} </p>
            <span className="contactUsDescription-span"></span>
            <p
             
             className=" md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-2xl text-black contactUs-input"
             required
           >{lastName} </p>
          </div>
          <div className="flex flex-wrap mb-4">
          <p
             
             className=" md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-2xl text-black contactUs-input"
             required
           >{user.email}</p>
            <span className="contactUsDescription-span"></span>
            <p
             
             className=" md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-2xl text-black contactUs-input"
             required
           >{user.phoneNumber} </p>
          </div>
          <div className="flex flex-wrap mb-4">
          <p
             
             className=" md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-2xl text-black contactUs-input"
             required
           >{city} </p>
            <span className="contactUsDescription-span"></span>
            <p
             
             className=" md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-2xl text-black contactUs-input"
             required
           >{user.address} </p>
          </div>
        
    
        </form>
      </div>
    </div>
  );
}

export default ViewCustomer;
