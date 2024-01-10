import { useState } from "react";

function AddCategory({ closeAddCategoryModal }) {
  const [applyDiscount, setApplyDiscount] = useState(false);
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(true);

  const handleSubmit = (e) => {
    closeAddCategoryModal();
  };

  const handleCheckboxChange = (e) => {
    setApplyDiscount(e.target.checked);
    if (!e.target.checked) {
      setDiscountPercentage("");
    }
  };

  const handleDiscountChange = (e) => {
    setDiscountPercentage(e.target.value);
  };

  return (
    <div className="font-lateef">
      <p className="text-book text-4xl text-center underline my-5">
        Add Category
      </p>
      <div className="text-center">
        <form className="py-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="flex-1 h-12">
              <input
                type="text"
                placeholder="Category name"
                className="w-[32rem] px-4 py-2 bg-gray-100 focus:outline-none text-2xl text-black"
              />
            </div>
            <span className="mx-4"></span>
            <div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={applyDiscount}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <p className="text-black w-64 text-2xl text-start">
                  Apply discount on all products of this category
                </p>
              </div>
              {applyDiscount && (
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Discount percentage %"
                    value={discountPercentage}
                    onChange={handleDiscountChange}
                    className="px-4 py-2 bg-gray-100 w-64 focus:outline-none text-2xl text-black"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-start">
            <button className="text-book border border-book px-4 py-2 hover:bg-book hover:text-white text-xl">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCategory;
