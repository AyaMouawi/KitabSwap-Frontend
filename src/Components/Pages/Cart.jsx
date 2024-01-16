import React, { useState, useRef, useEffect } from "react";
import CartDetails from "../CartComponents/CartDetails";
import CartEmpty from "../CartComponents/CartEmpty";
import CartTable from "../CartComponents/CartTable";
import CartAddress from "../CartComponents/CartAddress";
import ConfirmDelete from "../CartComponents/ConfirmDelete";
import NavBar from "../FrequentlyUsed/NavBar";
import Footer from "../FrequentlyUsed/Footer";
import ConfirmCheckout from "../CartComponents/ConfirmCheckout";
import "../css/cart.css";

function Cart() {
  const modalRef = useRef(null);
  const cart = localStorage.getItem("cart");
const cartDetails = localStorage.getItem("cartDetails");
  // ADDRESS MODAL
  const [isAddressModalOpen, setAddressModalOpen] = useState(false);

  const openAddressModal = () => {
    setAddressModalOpen(true);
  };

  const closeAddressModal = () => {
    setAddressModalOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeAddressModal();
      }
    };

    if (isAddressModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAddressModalOpen]);
  // DELETE MODAL
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const openDeleteModal = (bookId) => {
    setDeleteModalOpen(true);
   
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeDeleteModal();
      }
    };

    if (isDeleteModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDeleteModalOpen]);
  // CONFIRM MODAL
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);

  const openConfirmModal = () => {
    setConfirmModalOpen(true);
  };

  const closeConfirmModal = () => {
    setConfirmModalOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeConfirmModal();
      }
    };

    if (isConfirmModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isConfirmModalOpen]);

  return (
    <div>
    <NavBar />
    <div className="max-w-screen-xl mx-auto p-4 font-lateef ">
      <div className="italic">
        <p href="" className="text-5xl ">
          My Cart
        </p>
      </div>

      {(!cart || !cartDetails) ? (
        <CartEmpty />
      ) : (
        <>
          <CartTable openModal={openDeleteModal} />
          <CartDetails
            openModal={openAddressModal}
            openConfirmModal={openConfirmModal}
          />
        </>
      )}
      {isAddressModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-40">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div
            ref={modalRef}
            className="absolute bg-white p-8 rounded shadow-md"
          >
            <CartAddress closeModal={closeAddressModal} />
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-40">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div
            ref={modalRef}
            className="absolute bg-white p-8 rounded shadow-md"
          >
            <ConfirmDelete closeModal={closeDeleteModal} />
          </div>
        </div>
      )}
      {isConfirmModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-40">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div
            ref={modalRef}
            className="absolute bg-white p-8 rounded shadow-md"
          >
            <ConfirmCheckout closeModal={closeConfirmModal} />
          </div>
        </div>
      )}
    </div>
    <Footer />
    </div>
  );
}

export default Cart;
