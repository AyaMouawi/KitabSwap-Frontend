import React from "react";
import { useDispatch } from 'react-redux';
import { accept } from '../../redux/actions/tradeRequests';


function UserAccept ({closeAcceptModal, requestId }) {
  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch(accept(requestId));
    closeAcceptModal();
  };
  console.log("traderid",requestId)

  return (
    <div className="  flex items-center justify-center">
      
      <div className="text-center">
      <p className="text-right text-2xl mb-8"><button onClick={closeAcceptModal}>X</button></p>
      <div className="px-8">
        <p className="text-3xl m-12 mb-4 mx-auto">
          Are you sure you want to accept this trade?
        </p>
        <div className="flex justify-center p-6 items-center">
          <button 
          onClick={handleConfirm}
          className="bg-book text-white  py-1 px-2  w-40 text-3xl inline-block ">
            Accept
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAccept;
