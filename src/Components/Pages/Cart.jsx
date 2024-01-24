import React, { useState, useRef, useEffect } from "react";
import CartDetails from "../CartComponents/CartDetails";
import CartEmpty from "../CartComponents/CartEmpty";
import CartTable from "../CartComponents/CartTable";
import CartAddress from "../CartComponents/CartAddress";
import ConfirmDelete from "../CartComponents/ConfirmDelete";
import NavBar from "../FrequentlyUsed/NavBar";
import Footer from "../FrequentlyUsed/Footer";
import ConfirmCheckout from "../CartComponents/ConfirmCheckout";
import { toast} from 'react-toastify';
import { useSelector, useDispatch } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import "../css/cart.css";
import { getAddress } from "../../redux/actions/users";


function Cart() {

  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    dispatch(getAddress(userId));
  }, [dispatch]);

  

  const address = useSelector((state) => state.users);

  const modalRef = useRef(null);
  const [cartKey, setCartKey] = useState(0);
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [cartDetails, setCartDetails]= useState(() => {
    const storedDetails = localStorage.getItem("cartDetails");
    return storedDetails ? JSON.parse(storedDetails) : [];
  })
 
  const [bookId, setBookId] = useState('');
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
    setBookId(bookId)
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
    updateCartKey()
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

  const updateCartKey = () => {
    setCartKey((prevKey) => prevKey + 1);
  };

  const removeItem = (bookId) => {
  const updatedCart = cart.filter((item) => item.bookId !== bookId);
  const updatedCartDetails = cartDetails.filter((item) => item.saleBook_id !== bookId);

  localStorage.setItem("cart", JSON.stringify(updatedCart));
  localStorage.setItem("cartDetails", JSON.stringify(updatedCartDetails));

  setCart(updatedCart);
  setCartDetails(updatedCartDetails);

  toast.success("Item removed from the cart.");
  setCartKey((prevKey) => prevKey + 1);
};


  
  return (
    <div key={cartKey}>
    <NavBar />
    <div className="max-w-screen-xl mx-auto p-4 font-lateef ">
      <div className="italic text-center md:text-left">
        <p href="" className="text-5xl ">
          My Cart
        </p>
      </div>

      { !localStorage.getItem("cartDetails") ? (
        <CartEmpty />
      ) : (
        <>
          <CartTable openModal={openDeleteModal}  updateCartKey={updateCartKey}/>
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
            <CartAddress closeModal={closeAddressModal} address = {address}/>
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
            <ConfirmDelete closeModal={closeDeleteModal} removeItem={removeItem} bookId={bookId} />
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
            <ConfirmCheckout  closeModal={closeConfirmModal} updateCartKey={updateCartKey} />
          </div>
        </div>
      )}
    </div>
    <Footer />
    </div>
  );
}

export default Cart;
