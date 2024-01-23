function ConfirmDelete({ closeModal, removeItem, bookId}) {
  
    const handleConfirm = () => {
      removeItem(bookId);
      closeModal();
    };
  
    return (
      <div className="flex items-center justify-center">
        <div className="text-center">
        <p className="text-right text-2xl mb-8"><button onClick={closeModal}>X</button></p>
          <p className="text-3xl m-12 w-2/3 mx-auto mb-4">
          Are you sure you want to remove this product from your cart ?
          </p>
          <div className="flex justify-center p-6 items-center">

            <button
              onClick={handleConfirm}
              className="bg-book text-white py-1 px-2 w-40 text-3xl inline-block border border-book hover:bg-white hover:text-book hover: border-book "
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ConfirmDelete;
  