import React from "react";
import "../css/CartDetails.css";

function CartDetails({ openModal, openConfirmModal }) {

  
  return (
    <div className="cartDetails-cont p-8 scale-90 mt-4">
      {/* added CartDetails-Title */}
      <p className="text-4xl italic mb-9 ml-8 CartDetails-Title">Choose shipping method</p>
      <form>
          {/* added CartDetails-form */}
        <div className="flex justify-between CartDetails-form">
            {/* added CartDetails-input */}
          <div className="ml-12 CartDetails-input"> 
            <div className="mb-4">
              <label className="text-3xl">
                <input type="radio" className="mr-4" name="shippingMethod" />
                delivery at home (under 5-7 days) - 3 ${" "}
                <p className="text-xl ml-8 italic">
                  Maktabi building, Clemenceau, Hamra <a onClick={openModal}  className="underline ml-4 not-italic">edit address</a>
                </p>
              </label>
              
            </div>
            <div className="mb-4">
              <label className="text-3xl">
                <input type="radio" className="mr-4" name="shippingMethod" />
                store pickup (on Saturdays only) - free{" "}
                <p className="text-xl ml-8  italic">Betchay, Baabda</p>
              </label>
            </div>
          </div>
              {/* added CartDetails-receipt */}
          <div className="flex gap-52 CartDetails-receipt">
            <div className="">
              <p className="text-2xl mb-4 italic">Subtotal</p>
              <p className="text-2xl mb-4 italic">Shipping</p>
              <p className="text-2xl mb-4 italic">Total</p>
             
            
            </div>
            <div>
              <p className="text-2xl mb-4 italic">$100</p>
              <p className="text-2xl mb-4 italic">$10</p>
              <p className="text-2xl mb-4 italic">$110</p>
            </div>
          </div>
        </div>
        </form>
        <div className="flex justify-end">
        <button className="bg-book text-white  py-3 px-2  w-80 text-3xl inline-block mt-5 flex justify-center" onClick={openConfirmModal}>
                <p>Checkout  <span className="ml-12">163$  </span> </p>
              </button>
              </div>
      
     
    </div>
  );
}

export default CartDetails;