import React, { useState, useRef, useEffect } from "react";
import SingleTradeData from "./SingleTradeData";

import "../css/SingleProduct.css";
import TradeRequest from "./TradeRequest";

function SingleTradeItem({tradeBook}) {
  const modalRef = useRef(null);
  // Trade Request MODAL
  const [isTradeRequestModalOpen, setTradeRequestModalOpen] = useState(false);

  const openTradeRequestModal = () => {
    setTradeRequestModalOpen(true);
  };

  const closeTradeRequestModal = () => {
    setTradeRequestModalOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeTradeRequestModal();
      }
    };

    if (isTradeRequestModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isTradeRequestModalOpen]);

  return (
    <div className="max-w-screen-xl flex flex-wrap mx-auto p-4 justify-center gap-44 bg-white h-fit mb-4">
      <div className="h-fit">
        <div className="mr-11 italic mb-16   text-center flex ">
          <p className="text-5xl">Genre / {tradeBook.genreName}</p>
        </div>
        <img src={tradeBook.bookImage} alt="" className="w-[25rem] h-[35rem]" />
      </div>
        <div className="font-lateef mt-24 flex flex-col">
        <div className="mb-5">
          <p className="text-6xl font-bold mb-4">{tradeBook.title}</p>
          <p className="text-4xl font-love-light">{tradeBook.authorName}</p>
         <div className="flex items-center"> <p className="text-4xl italic mb-2 underline">Owner: </p><span className="text-3xl ml-2 italic"> {tradeBook.ownerFullName}</span></div>
         <div className="flex items-center"> <p className="text-4xl italic mb-2 underline">Email: </p> <span className="text-3xl ml-2  italic"> {tradeBook.ownerEmail}</span></div>
         <div className="flex items-center"> <p className="text-4xl italic mb-2 underline">Phone: </p> <span className="text-3xl ml-2  italic"> {tradeBook.ownerPhone}</span></div>
         <div className="flex items-center"> <p className="text-4xl italic underline">Location: </p> <span className="text-4xl ml-2  italic"> {tradeBook.ownerCity}</span></div> 
        </div>
  

        <div className="mb-4 w-96 text-3xl">
        {tradeBook.description}
          
        </div>
  
        <div className="mt-auto">
          <button className="bg-book text-white py-3 px-6  text-3xl w-full" onClick={openTradeRequestModal}>
           Request to Trade
          </button>
        </div>
        
      </div>
     
        {isTradeRequestModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-40">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div
            ref={modalRef}
            className="absolute bg-white p-8 rounded shadow-md"
          >
            <TradeRequest closeRequestModal={closeTradeRequestModal} />
          </div>
        </div>
      )}

    </div>
  );
}

export default SingleTradeItem;
