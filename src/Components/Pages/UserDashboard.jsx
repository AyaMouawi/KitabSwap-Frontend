import React, { useState, useRef, useEffect } from "react";
import Footer from "../FrequentlyUsed/Footer";
import NavBar from "../FrequentlyUsed/NavBar";
import UserItem from "../UserDashComponents/UserItem";
import PostTrading from "../UserDashComponents/PostTrading";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getByOwnerId } from "../../redux/actions/tradeBook";
import { hourglass } from 'ldrs';
import UserDashEmpty from "../UserDashComponents/UserDashEmpty";

function UserDashboard() {

    hourglass.register();
    const dispatch = useDispatch();
  

    // GET USER ID FROM LOCAL STORAGE
    const userId = localStorage.getItem("userId");
  


    const modalRef = useRef(null);
    // Post Trade MODAL
const [isPostTradeModalOpen, setPostTradeModalOpen] = useState(false);
  
const openPostTradeModal = () => {
  setPostTradeModalOpen(true);
};

const closePostTradeModal = () => {
  setPostTradeModalOpen(false);
};
useEffect(() => {
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closePostTradeModal();
    }
  };

  if (isPostTradeModalOpen) {
    document.addEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [isPostTradeModalOpen]);

useEffect(() => {
  
   dispatch(getByOwnerId(userId));
     

}, [dispatch]);

const ownerBooks = useSelector ((state) => state.tradeBooks);

const filteredOwnerBooks = ownerBooks.filter((book) => book.owner_id === parseInt(userId));



return (
  <>
    <NavBar />
    <div className="font-lateef">
      <div className="flex justify-start mb-12">
        <button
          className="bg-book text-white border border-book  py-1 px-8  text-3xl inline-block mt-5 flex ml-24 justify-center hover:bg-white hover:text-book hover: border-book"
          onClick={openPostTradeModal}
        >
          Post A Trading
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-start gap-4 HomeArrival-items-cont mx-24">
        {filteredOwnerBooks.length === 0 ? (
          <UserDashEmpty />
        ) : (
          filteredOwnerBooks.map((book, index) => (
            <UserItem key={index} tradeBook={book} />
          ))
        )}
      </div>
    </div>
    {isPostTradeModalOpen && (
      <div className="w-screen fixed inset-0 flex items-center justify-center z-40">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div
          ref={modalRef}
          className="absolute bg-white p-8 rounded shadow-md w-fit"
        >
          <PostTrading closeModal={closePostTradeModal} />
        </div>
      </div>
    )}
    <Footer />
  </>
);
}

export default UserDashboard;
