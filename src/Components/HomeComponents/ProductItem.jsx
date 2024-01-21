import React, { useState, useRef, useEffect } from "react";
import "../css/ArrivalItem.css";
import SingleProduct from "../Pages/SingleProduct";

function ProductItem({saleBook}) {

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
        setIsTitleOverflowed(titleElement.scrollWidth > titleElement.clientWidth);
      }
    };

    checkTitleOverflow();


    window.addEventListener('resize', checkTitleOverflow);

    return () => {
      window.removeEventListener('resize', checkTitleOverflow);
    };
  }, []);

  if (!saleBook) {
    return null; 
  }

  let priceSection;

  if (saleBook.discount !== "-") {
    priceSection = (
      <div className="flex">
        <h4 className="text-2xl" style={{ textDecoration: 'line-through', color: 'red', marginRight: '8px' }}>
          ${saleBook.price}
        </h4>
        <h4 className="text-2xl" style={{ color: 'green' }}>
          ${saleBook.discountedPrice}
        </h4>
      </div>
    );
  } else {
    priceSection = <h4 className="text-2xl">${saleBook.price}</h4>;
  }

  let discountSection;
  if (saleBook.discount !== "-") {
    discountSection = (
    <div className="absolute top-0 right-0 bg-white my-4 font-sans py-1 px-4 z-10 shadow-xl font-bold" style={{ color: 'green' }}>
          {saleBook.discount}% off
    </div> );
  } else {
    discountSection = ('')
  }


  return (
    <div className="ArrivalItem-cont mb-12 font-lateef font-light w-fit">
      <div className="ArrivalItem-img-container relative w-fit ">
      {discountSection}
        <img
          src={saleBook.book_image}
          alt=""
          className="ArrivalItem-img"
          onClick={openModal}
        />
      </div>
      <div className="flex justify-between mt-2 w-60">
        <div className="relative">
        <h3
            ref={titleRef}
            className="text-left text-3xl w-52 overflow-hidden whitespace-nowrap overflow-ellipsis"
            onMouseEnter={isTitleOverflowed ? toggleTooltip : undefined}
            onMouseLeave={isTitleOverflowed ? toggleTooltip : undefined}
          >
            {saleBook.title}
          </h3>
          {isTooltipVisible && (
            <div className="absolute bottom-full left-0 w-full bg-white text-book my-4 font-sans py-1 px-4 z-10 shadow-xl font-bold">
              {saleBook.title}
            </div>
          )}
        </div>
        <div className="flex justify-end ">
          <img
            src="Images/Icons/shoppingcartblack.png"
            alt=""
            className="ArrivalItem-cart mr-1 h-7 w-6 "
            onClick={openModal}
          />
        </div>
      </div>
      <div className="">
        <h1 className="text-2xl">{saleBook.authorName}</h1>
        {priceSection}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-40 overflow-y-auto">
          <div className="fixed inset-0 bg-black opacity-50 productItem-shadow"></div>
          <div
            ref={modalRef}
            className="absolute bg-white px-8 rounded shadow-md productItem-modal"
          >
            <div className="flex productItem-modal-cont">
            <div className="productItem-x-responsive justify-end">
                <button className="text-4xl pt-4 " onClick={closeModal}>
                  X
                </button>
              </div>
              <SingleProduct saleBook = {saleBook} closeModal= {closeModal}/>
              <div className="productItem-x">
                <button className="text-4xl pt-4" onClick={closeModal}>
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

export default ProductItem;
