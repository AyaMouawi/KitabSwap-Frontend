import React, { useState, useRef, useEffect } from "react";
import UserAccept from "./UserAccept";
import UserDecline from "./UserDecline";
import RequestDetails from "./RequestDetails";
import PostTrading from "./PostTrading";

const UserUserAccepts = () => {

    const modalRef = useRef(null);
    // User Accept MODAL
    const [isUserAcceptModalOpen, setUserAcceptModalOpen] = useState(false);
  
    const openUserAcceptModal = () => {
      setUserAcceptModalOpen(true);
    };
  
    const closeUserAcceptModal = () => {
      setUserAcceptModalOpen(false);
    };
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          closeUserAcceptModal();
        }
      };
  
      if (isUserAcceptModalOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isUserAcceptModalOpen]);

// User Decline MODAL
const [isUserDeclineModalOpen, setUserDeclineModalOpen] = useState(false);
  
const openUserDeclineModal = () => {
  setUserDeclineModalOpen(true);
};

const closeUserDeclineModal = () => {
  setUserDeclineModalOpen(false);
};
useEffect(() => {
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeUserDeclineModal();
    }
  };

  if (isUserDeclineModalOpen) {
    document.addEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [isUserDeclineModalOpen]);

// Request Details MODAL
const [isRequestDetailsModalOpen, setRequestDetailsModalOpen] = useState(false);
  
const openRequestDetailsModal = () => {
  setRequestDetailsModalOpen(true);
};

const closeRequestDetailsModal = () => {
  setRequestDetailsModalOpen(false);
};
useEffect(() => {
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeRequestDetailsModal();
    }
  };

  if (isRequestDetailsModalOpen) {
    document.addEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [isRequestDetailsModalOpen]);

  return (
    <div className="w-screen p-6">
      <div className="mb-20">
        <p className="text-6xl font-bold mb-4">Harry Potter</p>
        <p className="text-4xl font-bold font-love-light italic mb-4">
          Posting Date: 12/7/2023
        </p>
      </div>
      <table className="w-full border-t border-b border-black">
        <thead>
          <tr className="border-b border-black text-2xl">
            <th className="py-2  text-center">Request</th>
            <th className="py-2  text-center">Date</th>
            <th className="py-2  text-center">Book</th>
            <th className="py-2  text-center">Location</th>
            <th className="py-2  text-center w-28">Image</th>
            <th className="py-2  text-center w-28"></th>
            <th className="py-2  text-center w-28"></th>
            <th className="py-2  text-center w-28"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-black text-2xl">
            <td className="py-2 text-center">Request 1</td>
            <td className="py-2 text-center">2023-12-27</td>
            <td className="py-2 text-center">The Idiot</td>
            <td className="py-2 text-center">Location 1</td>
            <td className="py-2 text-center">
              <div className="flex justify-center">
                <img src="Images/harrypotter1.webp " alt="" className="w-28" />
              </div>
            </td>
            <td className="py-2 text-center text-2xl text-book w-40">
              <button className="italic" onClick={openRequestDetailsModal}> View Details </button>
            </td>
            <td className="py-2 text-center">
              <button className="bg-book text-white  py-0 px-4  text-3xl inline-block flex justify-center" onClick={openUserAcceptModal}>
                Accept
              </button>
            </td>
            <td className="py-2 text-center">
              <button className="bg-book text-white  py-0 px-4  text-3xl inline-block flex justify-center" onClick={openUserDeclineModal}>
                Decline
              </button>
            </td>
          </tr>
          <tr className="border-b border-black text-2xl">
            <td className="py-2 text-center ">Request 2</td>
            <td className="py-2 text-center ">2023-12-28</td>
            <td className="py-2 text-center ">The Idiot</td>
            <td className="py-2 text-center ">Location 2</td>
            <td className="py-2 text-center">
              <div className="flex justify-center">
                <img src="Images/harrypotter1.webp " alt="" className="w-28" />
              </div>
            </td>
            <td className="py-2 text-center text-2xl text-book w-40">
              <button className="italic" onClick={openRequestDetailsModal}> View Details </button>
            </td>
            <td className="py-2 text-center">
              <button className="bg-book text-white  py-0 px-4  text-3xl inline-block flex justify-center" onClick={openUserAcceptModal}>
                Accept
              </button>
            </td>
            <td className="py-2 text-center">
              <button className="bg-book text-white  py-0 px-4  text-3xl inline-block flex justify-center" onClick={openUserDeclineModal}>
                Decline
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {isUserAcceptModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-40">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div
            ref={modalRef}
            className="absolute bg-white p-8 rounded shadow-md"
          >
            <UserAccept closeAcceptModal={closeUserAcceptModal} />
          </div>
        </div>
      )}
      {isUserDeclineModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-40">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div
            ref={modalRef}
            className="absolute bg-white p-8 rounded shadow-md"
          >
            <UserDecline closeDeclineModal={closeUserDeclineModal} />
          </div>
        </div>
      )}

{isRequestDetailsModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-40">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div
            ref={modalRef}
            className="absolute bg-white p-8 rounded shadow-md"
          >
            <RequestDetails closeRequestModal={closeRequestDetailsModal} />
          </div>
        </div>
      )}
      
    </div>
  );
};

export default UserUserAccepts;
