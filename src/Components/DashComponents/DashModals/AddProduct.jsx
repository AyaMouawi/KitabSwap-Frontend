import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllGenres } from "../../../redux/actions/genres";
import { addBook } from "../../../redux/actions/AddBook";
import { hourglass } from 'ldrs';

function AddProduct({ closeAddProductModal }) {
  const dispatch = useDispatch();
  hourglass.register();
  const genres = useSelector((state) => state.genres);
  const addLoading = useSelector(state => state.addBook.addLoading );
console.log("loading", addLoading)
  const [formData, setFormData] = useState({
    genre_id: "",
    authorName: "",
    quantity: "",
    description: "",
    title: "",
    price: "",
    image: null,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = new FormData();
    data.append("genre_id", formData.genre_id);
    data.append("authorName", formData.authorName);
    data.append("title", formData.title);
    data.append("quantity", formData.quantity);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("image", formData.image);
  
    try {
      await dispatch(addBook(data));
      closeAddProductModal();
    } catch (error) {
      console.error("Error in adding book:", error);
    }
  };
  
  useEffect(() => {
    dispatch(getAllGenres());
  }, [dispatch]);

  return (
    <div className="font-lateef w-[32rem] px-12">
      <p className="text-book text-3xl text-center underline my-5">
        Add Product
      </p>
      {addLoading &&  (
      <div className="text-center">
        <l-hourglass
          size="40"
          bg-opacity="0.1"
          speed="1.75"
         color="rgb(183,86,66)"
        ></l-hourglass></div>
        )}
     {!addLoading && (
      <div className="text-center">
        <form className="py-4" onSubmit={handleSubmit}>
          <div className="flex mb-4">
            <div className="flex flex-grow mb-4">
              <select
                name="genre_id"
                onChange={handleInputChange}
                value={formData.genre_id}
                className="px-4 py-2 mr-4 bg-gray-100 focus:outline-none text-xl text-black w-full"
              >
                <option value="">Select Genre</option>
                {genres.map((genre) => (
                  <option
                    key={genre.genre_id}
                    className="capitalize"
                    value={genre.genre_id}
                  >
                    {genre.genreName}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <div className="">
              <input
                type="file"
                name="file"
                id="file"
                onChange={handleFileChange}
                className="opacity-0 hidden"
              />
              <label
                htmlFor="file"
                className="flex px-4 py-2 bg-gray-100 text-gray-400 text-xl cursor-pointer"
              >
                Image input fields
              </label>
            </div>
          </div>
          <div className="mb-4">
            <div className="">
              <input
                type="text"
                name="authorName"
                placeholder="Author Name"
                className="flex flex-grow w-full md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black"
                onChange={handleInputChange}
                value={formData.authorName}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="">
              <input
                type="text"
                name="title"
                placeholder="title"
                className="flex flex-grow w-full md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black"
                onChange={handleInputChange}
                value={formData.title}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="">
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                className="flex flex-grow w-full md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black"
                onChange={handleInputChange}
                value={formData.quantity}
                required
              />
            </div>
          </div>
          <div className="flex mb-4">
            <textarea
              rows={5}
              name="description"
              placeholder="Description"
              className="flex-1 px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black resize-none"
              onChange={handleInputChange}
              value={formData.description}
            />
          </div>
          <div className="mb-4">
            <div className="">
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="flex flex-grow w-full md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black"
                onChange={handleInputChange}
                value={formData.price}
                required
              />
            </div>
          </div>
          <div className="flex justify-start">
            <button className="text-book border border-book px-4 py-2 hover:bg-book hover:text-white text-xl">
              Submit
            </button>
          </div>
        </form>
      </div>
      )}
    </div>
  );
}

export default AddProduct;