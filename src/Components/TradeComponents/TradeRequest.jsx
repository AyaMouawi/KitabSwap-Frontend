import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { requestTrade } from "../../redux/actions/tradeRequests";
import { hourglass } from 'ldrs'

function TradeRequest({ tradeBookId, closeRequestModal }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    bookName: "",
    location: "",
    description: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: imageFile,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userRequested_id = 15;

    const formDataWithImage = new FormData();
    formDataWithImage.append("image", formData.image);
    formDataWithImage.append("bookName", formData.bookName);
    formDataWithImage.append("location", formData.location);
    formDataWithImage.append("description", formData.description);
    formDataWithImage.append("tradebook_id", tradeBookId);
    formDataWithImage.append("userRequested_id", userRequested_id);

    setLoading(true);

    try {
      setLoading(true);
      await dispatch(requestTrade(formDataWithImage));
    } catch (error) {
      console.error("Error in trade request:", error);
    } finally {
      setLoading(false);
      // closeRequestModal();
    }
  };

  console.log("s", loading)
  return (
    <div className="  flex items-center justify-center">
      <div className="text-center ">
        <p className="text-right text-2xl mb-8">
          <button onClick={closeRequestModal}>X</button>
        </p>
        <p className="text-3xl text-center  underline text-book mb-8">
          Trading Request
        </p>
        {loading && (
          // <l-hourglass
          //   size="40"
          //   bg-opacity="0.1"
          //   speed="1.75"
          //   color="rgb(183,86,66)"
          // ></l-hourglass>
          <div>
            {/* Display any loading indicator here */}
            Loading...
          </div>
        )}

        {!loading && (
        <form className="py-4" onSubmit={handleSubmit}>
          <div className="flex flex-wrap mb-4">
            <input
              type="text"
              name="bookName"
              placeholder="Book Name"
              className=" md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-2xl text-black contactUs-input"
              required
              onChange={handleInputChange}
              value={formData.bookName}
            />
          </div>
          <div className="flex flex-wrap mb-4">
            
              <div class="contactUs-input">
              <input 
                className="opacity-0 hidden" 
                type="file" 
                id="file" 
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                />
                <label
                  className="flex justify-center px-4 py-2 bg-gray-100  text-gray-400 text-2xl cursor-pointer "
                  for="file"
                >
                  Insert a picture of your book
                </label>
              
            </div>
            <span className="contactUsDescription-span"></span>
            <input
              type="text"
              name="location"
              placeholder="Location"
              className=" md:mt-0 px-4 py-2 bg-gray-100 px-4 py-2 bg-gray-100 focus:outline-none text-2xl text-black contactUs-input"
              required
              onChange={handleInputChange}
              value={formData.location}
            />
          </div>
          <textarea
            className="w-full px-4 py-2 h-28 bg-gray-100 focus:outline-none  text-2xl text-black"
            placeholder="Additional Description"
            name="description"
            required
            onChange={handleInputChange}
            value={formData.description}
          ></textarea>
          <button
            className="bg-book text-white  py-1 px-8  text-3xl inline-block mt-5 flex ml-auto justify-center"
            type="submit"
          >
            Submit
          </button>
        </form>
         )}
      </div>
    </div>
  );
}

export default TradeRequest;
