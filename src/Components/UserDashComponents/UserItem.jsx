import React, { useState, useRef, useEffect } from "react";
import "../css/ArrivalItem.css";
import UserTradeRequests from "./UserTradeRequests";

function UserItem({tradeBook}) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const modalRef = useRef(null);

  const titleRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const toggleTooltip = () => {
    setIsTooltipVisible(!isTooltipVisible);
  };
  const [isTitleOverflowed, setIsTitleOverflowed] = useState(false);

  useEffect(() => {
    const checkTitleOverflow = () => {
      const titleElement = titleRef.current;
      if (titleElement) {
        setIsTitleOverflowed(
          titleElement.scrollWidth > titleElement.clientWidth
        );
      }
    };

    checkTitleOverflow();

    window.addEventListener("resize", checkTitleOverflow);

    return () => {
      window.removeEventListener("resize", checkTitleOverflow);
    };
  }, []);

 

  return (
    <div className="ArrivalItem-cont mb-12 font-lateef font-light w-fit">
      <div className="ArrivalItem-img-container relative w-fit">
        <img
          src={tradeBook.bookImage}
          alt=""
          className="ArrivalItem-img"
          onClick={openModal}
        />
      </div>
      <div className="flex justify-between mt-2 w-60">
        <div className="relative">
          <h3
            ref={titleRef}
            className="text-left text-3xl w-60 overflow-hidden whitespace-nowrap overflow-ellipsis"
            onMouseEnter={isTitleOverflowed ? toggleTooltip : undefined}
            onMouseLeave={isTitleOverflowed ? toggleTooltip : undefined}
          >
            {tradeBook.title}
          </h3>
          {isTooltipVisible && (
            <div className="absolute bottom-full left-0  bg-white text-book my-4 w-52 font-sans py-1 px-4 z-10 shadow-xl font-bold">
              {tradeBook.title}
            </div>
          )}
        </div>
      </div>
      <div className="">
        <h1 className="text-2xl w-60 overflow-hidden whitespace-nowrap overflow-ellipsis">
          Owner: {tradeBook.ownerFullName}
        </h1>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-40 ">
          <div
            ref={modalRef}
            className="absolute bg-white shadow-md w-screen p-8 h-screen"
          >
            <div className="flex">
              <UserTradeRequests bookId={tradeBook.tradeBook_id} bookName = {tradeBook.title} postingDate = {tradeBook.postDate}/>
              <div>
                <button className="text-4xl" onClick={closeModal}>
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default UserItem;
