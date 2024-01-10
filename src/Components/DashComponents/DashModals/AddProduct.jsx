import { useState, useEffect } from "react";

function AddProduct({ closeAddProductModal }) {
  const [applyDiscount, setApplyDiscount] = useState(false);
  const [discountPercentage, setDiscountPercentage] = useState("");

  const handleSubmit = () => {
    closeAddProductModal();
  };

  const handleCheckboxChange = (e) => {
    setApplyDiscount(e.target.checked);
    if (!e.target.checked) {
      setDiscountPercentage("");
    }
  };

  return (
    <div className="font-lateef w-[32rem] px-12">
      <p className="text-book text-3xl text-center underline my-5">
        Add Product
      </p>
      <div className="text-center">
        <form className="py-4" onSubmit={handleSubmit}>
          <div className="flex mb-4">
  
            <div className="flex flex-grow mb-4">
              <select className=" px-4 py-2 mr-4 bg-gray-100 focus:outline-none text-xl text-black w-full">
                <option value="">Select Genre</option>

                <option className=" capitalize " value={"All"}>All</option>
                <option className=" capitalize " value={"Fantasy"}>Fantasy</option>
                <option className=" capitalize " value={"Romance"}>Romance</option>
                <option className=" capitalize " value={"Mystery"}>Mystery</option>
                <option className=" capitalize " value={"Tragedy"}>Tragedy</option>
                <option className=" capitalize " value={"Poetry"}>Poetry</option>
                <option className=" capitalize " value={"Drama"}>Drama</option>
                <option className=" capitalize " value={"Horror"}>Horror</option>
              </select>
            </div>
            <div className="flex flex-grow mb-4">
              <select
                // value={role}
                // onChange={handleRoleChange}
                className=" px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black w-full"
              >
                <option value="">Status</option>
                <option value="available">Available</option>
                <option value="sold out">Sold out</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <div class="">
              <input className="opacity-0 hidden" type="file" id="file" />
              <label
                className="flex  px-4 py-2 bg-gray-100  text-gray-400 text-xl cursor-pointer "
                for="file"
              >
                Image input fields
              </label>
            </div>
          </div>
          <div className="mb-4">
            <div class="">
            <input
              type="text"
              name="authorName"
              placeholder="Author Name"
              className="flex flex-grow w-full md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black"
              required
            />
            </div>
          </div>
          <div className="mb-4">
            <div class="">
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              className="flex flex-grow w-full md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black"
              required
            />
            </div>
          </div>
          <div className="flex mb-4">
            <textarea
              rows={5}
              placeholder="Description"
              // value={description}
              // onChange={(e) => setDescription(e.target.value)}
              className="flex-1 px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black resize-none"
            />
          </div>
          <div className="mb-4">
            <div class="">
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="flex flex-grow w-full md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black"
              required
            />
            </div>
          </div>
          <div className="flex mb-4">
            <div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={applyDiscount}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <p className="text-black text-xl">Apply discount percentage</p>
              </div>
              {applyDiscount && (
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Discount percentage %"
                    value={discountPercentage}
                    className="px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black"
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

export default AddProduct;
