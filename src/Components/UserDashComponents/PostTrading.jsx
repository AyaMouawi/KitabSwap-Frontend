import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postTrade } from "../../redux/actions/tradeBook";
import { getAllGenres } from "../../redux/actions/genres";

function PostTrading({ closeModal }) {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);

  const [formData, setFormData] = useState({
    bookname: "",
    authorName: "",
    genre: "",
    location: "",
    file: null,
    description: "",
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
      file: e.target.files[0],
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const { bookname, authorName, genre, location, file, description } = formData;

    const data = new FormData();
    data.append("title", bookname);
    data.append("authorName", authorName);
    data.append("genre_id", genre); // Assuming genre_id is the correct field name
    data.append("location", location);
    data.append("image", file); // Change "file" to "image"
    data.append("description", description);

    // Get owner_id from localStorage
    const owner_id = localStorage.getItem("userId");
    if (owner_id) {
      data.append("owner_id", owner_id);
    }

    dispatch(postTrade(data));

    // Optionally, you can clear the form fields after submission
    setFormData({
      bookname: "",
      authorName: "",
      genre: "",
      location: "",
      file: null,
      description: "",
    });

    closeModal(); // Close the modal after submission
  };

  useEffect(() => {
    dispatch(getAllGenres());
  }, [dispatch]);

  return (
    <div className="  flex items-center justify-center font-lateef">
      <div className="   ">
        <p className="text-right text-2xl mb-8">
          <button onClick={closeModal}>X</button>
        </p>
        <p className="text-3xl text-center  underline text-book mb-8">
          Post Trading
        </p>
        <form className="py-4" onSubmit={handleFormSubmit}>
          <div className="flex flex-wrap mb-4">
            <input
              type="text"
              name="bookname"
              value={formData.bookname}
              onChange={handleInputChange}
              placeholder="Book Name"
              className=" md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-2xl text-black contactUs-input"
              required
            />
            <input
              type="text"
              name="authorName"
              value={formData.authorName}
              onChange={handleInputChange}
              placeholder="Author Name"
              className=" md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-2xl text-black contactUs-input"
              required
            />
          </div>
          <div className="flex flex-wrap mb-4 ">
            <select
              id="selectOption"
              name="genre"
              value={formData.genre}
              onChange={handleInputChange}
              className="p-2 contactUs-input text-2xl text-black bg-gray-100"
            >
              <option value="">Genre</option>
              {genres.map((genre) => (
                <option key={genre.genre_id} value={genre.genre_id}>
                  {genre.genreName}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Location"
              className=" md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-2xl text-black contactUs-input"
              required
            />
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="contactUs-input">
              <input
                type="file"
                id="file"
                onChange={handleFileChange}
                className="opacity-0 hidden"
              />
              <label
                className="flex justify-center px-4 py-2 bg-gray-100 text-gray-400 text-2xl cursor-pointer "
                htmlFor="file"
              >
                Insert a picture of your book
              </label>
            </div>
          </div>
          <textarea
            className="w-full px-4 py-2 h-28 bg-gray-100 focus:outline-none  text-2xl text-black"
            placeholder="Additional Description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>
          <button
            className="bg-book text-white py-1 px-8 text-2xl inline-block mt-5 flex ml-auto justify-center"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostTrading;
