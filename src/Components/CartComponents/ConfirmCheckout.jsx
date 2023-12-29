import React from "react";
// import axios from "axios";

function ConfirmCheckout ({closeModal,onConfirm}) {
  const handleConfirm = () => {
    onConfirm();
    closeModal();
  };
  // const token = localStorage.getItem('token');
  // const cartId = localStorage.getItem('cartId');
 
  // const handleConfirm = async () => {
  //   try {
  //     const response = await axios.post(`${process.env.REACT_APP_API_URL}/order/create/${cartId}`, {
  //       shippingMethod: shippingMethod,
  //     },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     console.log(response.data);
  //     closeModal();
  //     updateCartData(response.data.updatedCart);

  //   } catch (error) {
  //     console.error("Error creating order:", error.message);
  //   }
  // };

  return (
    <div className="  flex items-center justify-center">
      
      <div className="text-center">
      <p className="text-right text-2xl mb-8"><button onClick={closeModal}>X</button></p>
      <div className="px-8">
        <p className="text-3xl m-12 mb-4 mx-auto">
          Are you sure you want to checkout?
        </p>
        <div className="flex justify-center p-6 items-center">
          <button 
          onClick={handleConfirm}
          className="bg-book text-white  py-1 px-2  w-40 text-3xl inline-block ">
            Checkout
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmCheckout;
