import React, { useState, useRef, useEffect } from "react";
import SingleTradeData from "./SingleTradeData";

import "../css/SingleProduct.css";
import TradeRequest from "./TradeRequest";

function SingleTradeItem() {
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
          <p className="text-5xl">Genre / Fantasy</p>
        </div>
        <img src="Images/harrypotter1.webp" alt="" className="w-[25rem] h-[35rem]" />
      </div>
   
        <SingleTradeData openRequestModal={openTradeRequestModal} />
     
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
