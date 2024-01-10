import { useState, useEffect } from "react";

function ViewCustomer({ closeEditBannerModal }) {
  const handleSubmit = () => {
    closeEditBannerModal();
  };

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
            >John </p>
            <span className="contactUsDescription-span"></span>
            <p
             
             className=" md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-2xl text-black contactUs-input"
             required
           >Doe </p>
          </div>
          <div className="flex flex-wrap mb-4">
          <p
             
             className=" md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-2xl text-black contactUs-input"
             required
           >johndoe@gmail.com </p>
            <span className="contactUsDescription-span"></span>
            <p
             
             className=" md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-2xl text-black contactUs-input"
             required
           >123456 </p>
          </div>
          <div className="flex flex-wrap mb-4">
          <p
             
             className=" md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-2xl text-black contactUs-input"
             required
           >Antelias </p>
            <span className="contactUsDescription-span"></span>
            <p
             
             className=" md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-2xl text-black contactUs-input"
             required
           >Building xxx, xxxx street, 2nd floor </p>
          </div>
          <div className="flex flex-wrap mb-4">
          <p
             
             className=" md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-2xl text-black contactUs-input"
             required
           >1 order </p>
          
          </div>
    
        </form>
      </div>
    </div>
  );
}

export default ViewCustomer;
