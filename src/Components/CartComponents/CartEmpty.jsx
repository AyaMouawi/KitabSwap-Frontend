function CartEmpty() {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <div className="text-center">
        
          <p className="text-4xl">Your cart is empty.</p>
          <button className="bg-book text-white py-1 px-2  w-full text-3xl inline-block mt-5">
            Shop Now
          </button>
        </div>
      </div>
    );
  }
  
  export default CartEmpty;