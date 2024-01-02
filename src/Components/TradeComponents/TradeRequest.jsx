import React, { useState, useRef, useEffect } from "react";

function TradeRequest({ closeRequestModal }) {
  return (
    <div className="  flex items-center justify-center">
      <div className="text-center ">
        <p className="text-right text-2xl mb-8">
          <button onClick={closeRequestModal}>X</button>
        </p>
        <p className="text-3xl text-center  underline text-book mb-8">
          Trading Request
        </p>
        <form className="py-4">
          <div className="flex flex-wrap mb-4">
            <input
              type="text"
              name="bookname"
              placeholder="Book Name"
              className=" md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-2xl text-black contactUs-input"
              required
            />
          </div>
          <div className="flex flex-wrap mb-4">
            
              <div class="contactUs-input">
                <input className="opacity-0 hidden" type="file" id="file" />
                <label
                  className="flex justify-center px-4 py-2 bg-gray-100  text-gray-400 text-2xl cursor-pointer "
                  for="file"
                >
                  Insert a picture of your book
                </label>
              
            </div>
            <span className="contactUsDescription-span"></span>
            <input
              type="text"
              name="location"
              placeholder="Location"
              className=" md:mt-0 px-4 py-2 bg-gray-100 px-4 py-2 bg-gray-100 focus:outline-none text-2xl text-black contactUs-input"
              required
            />
          </div>
          <textarea
            className="w-full px-4 py-2 h-28 bg-gray-100 focus:outline-none  text-2xl text-black"
            placeholder="Additional Description"
            name="message"
            required
          ></textarea>
          <button
            className="bg-book text-white  py-1 px-8  text-3xl inline-block mt-5 flex ml-auto justify-center"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default TradeRequest;
