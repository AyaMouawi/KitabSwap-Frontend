import React, { useState, useRef, useEffect } from "react";
import UserAccept from "./UserAccept";
import UserDecline from "./UserDecline";
import RequestDetails from "./RequestDetails";
import PostTrading from "./PostTrading";
import { getByBookId } from "../../redux/actions/tradeRequests";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { hourglass } from 'ldrs'

const UserTradeRequests = ({bookId , bookName, postingDate }) => {

  hourglass.register();
  const dispatch = useDispatch();
  const [selectedUserId , setSelectedUserId ] = useState('');
  const [selectedRequestId, setSelectedRequestId] = useState('');
  const [isLoading, setIsLoading] = useState (true);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        setIsLoading(true);
        await dispatch(getByBookId(bookId));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching requests:", error);
        setIsLoading(false);
      }
    };
    fetchBookData();
  }, [dispatch]);

  const tradeRequests = useSelector ((state) => state.tradeRequest )
  console.log("tradeRequests", tradeRequests)

    const modalRef = useRef(null);
    // User Accept MODAL
    const [isUserAcceptModalOpen, setUserAcceptModalOpen] = useState(false);
  
    const openUserAcceptModal = (requestId) => {
      setUserAcceptModalOpen(true);
      setSelectedRequestId(requestId);
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
  
const openUserDeclineModal = (requestId) => {
  setUserDeclineModalOpen(true);
  setSelectedRequestId(requestId);
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
  
const openRequestDetailsModal = (userId) => {
  setRequestDetailsModalOpen(true);
  setSelectedUserId(userId);
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
        <p className="text-6xl font-bold mb-4">{bookName}</p>
        <p className="text-4xl font-bold font-love-light italic mb-4">
          Posting Date: {postingDate}
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
          {tradeRequests.map((request, index) => (
            <tr key={request.tradeRequest_id} className="border-b border-black text-2xl">
              <td className="py-2 text-center">Request {index + 1}</td>
              <td className="py-2 text-center">{request.requestDate}</td>
              <td className="py-2 text-center">{request.bookName}</td>
              <td className="py-2 text-center">{request.location}</td>
              <td className="py-2 text-center">
                <div className="flex justify-center">
                  <img src={request.bookImage} alt="" className="w-28" />
                </div>
              </td>
              <td className="py-2 text-center text-2xl text-book w-40">
                <button className="italic" onClick={() => openRequestDetailsModal(request.userRequested_id)}> View Details </button>
              </td>
              <td className="py-2 text-center">
                {request.status === 'pending' ? (
                  <>
                    <td className="py-2 text-center">
                <button className="bg-book text-white py-0 px-4 text-3xl inline-block flex justify-center" onClick={() => openUserAcceptModal(request.tradeRequest_id)}>
                  Accept
                </button>
              </td>
              <td className="py-2 text-center">
                <button className="bg-book text-white py-0 px-4 text-3xl inline-block flex justify-center" onClick={()=> openUserDeclineModal(request.tradeRequest_id)}>
                  Decline
                </button>
              </td>
                  </>
                ) : (
                  <span className="text-book">{request.status}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isUserAcceptModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-40">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div
            ref={modalRef}
            className="absolute bg-white p-8 rounded shadow-md"
          >
            <UserAccept closeAcceptModal={closeUserAcceptModal} requestId={selectedRequestId}/>
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
            <UserDecline closeDeclineModal={closeUserDeclineModal} requestId={selectedRequestId} />
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
            <RequestDetails userId={selectedUserId} closeRequestModal={closeRequestDetailsModal} />

          </div>
        </div>
      )}
      
    </div>
  );
};

export default UserTradeRequests;
